import React, {ReactNode} from 'react';
import {Animated, PanResponder, SafeAreaView, View} from 'react-native';

import styles from './styles';
import MockDeviceScreen from './MockDeviceScreen';
import Toolbar from './toolbar';
import internalPresets from './presets.json';
import {MockDeviceConfig} from './types';
import DimensionsProxy from './DimensionsProxy';

interface FrameProps {
  additionalPresets: Array<MockDeviceConfig>;
  children: ReactNode;
  close(): void;
}

function Frame(props: FrameProps) {
  console.debug(props)
  const presets = React.useRef([...(props.additionalPresets ?? []), ...internalPresets]).current;
  const [selectedPreset, setSelectedPreset] = React.useState(presets[0].name);
  const [scale, setScale] = React.useState(1);
  const selectedConfig = presets.find(
    (x) => x.name === selectedPreset,
  ) as MockDeviceConfig;
  const devicePan = React.useRef(new Animated.ValueXY()).current;

  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt) =>
        evt.nativeEvent.touches.length === 2,
      onPanResponderGrant: () => {
        devicePan.setOffset({
          x: (devicePan.x as any)._value,
          y: (devicePan.y as any)._value,
        });
      },
      onPanResponderMove: Animated.event(
        [null, {dx: devicePan.x, dy: devicePan.y}],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: () => {
        devicePan.flattenOffset();
      },
    }),
  ).current;

  const handleSelectPreset = (preset: any) => {
    const config = presets.find(
      (x) => x.name === preset,
    ) as MockDeviceConfig;

    DimensionsProxy.setConfig(config);
    setSelectedPreset(preset);
  }

  return (
    <View style={styles.container}>
      <View style={styles.frame} {...panResponder.panHandlers}>
        <View style={styles.screenContainer}>
          <MockDeviceScreen
            children={props.children}
            config={selectedConfig}
            scale={scale}
            pan={devicePan}
          />
        </View>
      </View>
      <Toolbar
        presets={presets as Array<MockDeviceConfig>}
        selectedConfig={selectedConfig}
        setSelectedPreset={handleSelectPreset}
        scale={scale}
        setScale={setScale}
        devicePan={devicePan}
        close={props.close}
      />
    </View>
  );
}

export default Frame;
