/**
 * DimensionsProxy is a proxy for the react-native Dimensions module. It is responsible for
 * simulating Dimensions for the mock device while using the screens devtool. In order for
 * it to work this library must be imported near the root of the applications component
 * tree.
 */
import { Dimensions, ScaledSize } from 'react-native';
import {MockDeviceConfig} from './types';

const dimensionsActual = {
  get: Dimensions.get,
  addEventListener: Dimensions.addEventListener,
  removeEventListener: Dimensions.removeEventListener,
}

type DimType = 'window' | 'screen';
type DimensionsEventHandler = ({ window, screen }: { window: ScaledSize, screen: ScaledSize }) => void;

class DimensionsProxy {
  private deviceConfig?: MockDeviceConfig;
  private changeListeners: Array<DimensionsEventHandler> = [];

  setConfig = (config?: MockDeviceConfig) => {
    this.deviceConfig = config
    this.emitChange();
  }

  getWindow = (): ScaledSize => {
    const config = this.deviceConfig;

    return !config ? dimensionsActual.get('window') : {
      height: config.height,
      width: config.width,
      scale: config.scale,
      fontScale: config.font,
    }
  }

  get = (type: DimType) => {
    return this.getWindow()
  }

  addEventListener = (type: 'change', handler: DimensionsEventHandler) => {
    this.changeListeners.push(handler);

    dimensionsActual.addEventListener(type, () => {
      const window = this.getWindow();
      handler({ window, screen: window });
    });
  }

  removeEventListener = (type: 'change', handler: DimensionsEventHandler) => {
    this.changeListeners = this.changeListeners.filter(x => x !== handler);
    dimensionsActual.removeEventListener(type, handler);
  }

  emitChange = () => {
    this.changeListeners.forEach((handler) => {
      handler({ window: this.getWindow(), screen: this.getWindow() });
    });
  }
}

const proxySingleton = new DimensionsProxy();

Dimensions.get = proxySingleton.get;
Dimensions.addEventListener = proxySingleton.addEventListener;

export default proxySingleton;
