import React, {Children, ReactNode} from 'react';
import Emitter from 'tiny-emitter';
import Frame from './Frame';
import DimensionsProxy from './DimensionsProxy';
import presets from './presets.json';
import { MockDeviceConfig } from './types';

const emitter = new (Emitter as any)();

interface DevToolProps {
  children: ReactNode;
  disabled?: boolean;
}

function DevTool(props: DevToolProps) {
  const [enabled, setEnabled] = React.useState(!props.disabled);
  React.useEffect(() => {
    emitter.on('enable', () => {
      setEnabled(true);
      DimensionsProxy.setConfig(presets[0] as MockDeviceConfig);
    });
    emitter.on('disable', () => {
      setEnabled(false);
      DimensionsProxy.setConfig();
    });
  }, []);

  if (!enabled) {
    return props.children;
  }

  return (
    <Frame close={() => emitter.emit('disable')}>
      {Children.only(props.children)}
    </Frame>
  );
}

DevTool.enable = () => {
  emitter.emit('enable');
};

DevTool.disable = () => {
  emitter.emit('disable');
};

DevTool.on = emitter.on;

export default DevTool;
