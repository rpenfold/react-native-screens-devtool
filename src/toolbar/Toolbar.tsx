import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableHighlight,
  Text,
  Animated,
} from 'react-native';
import {MockDeviceConfig} from '../types';
import styles from '../styles';
import PresetSelector from './PresetSelector';
import ScaleSelector from './ScaleSelector';

interface Props {
  devicePan: Animated.ValueXY;
  presets: Array<MockDeviceConfig>;
  scale: number;
  selectedConfig: MockDeviceConfig;
  close(): void;
  setSelectedPreset(name: string): void;
  setScale(value: number): void;
}

function Toolbar(props: Props) {
  const {
    devicePan,
    presets,
    selectedConfig,
    setSelectedPreset,
    scale,
    setScale,
  } = props;

  return (
    <View style={styles.toolbarContainer}>
      <SafeAreaView />
      <View style={styles.toolbar}>
        <PresetSelector
          presets={presets}
          selected={selectedConfig.name}
          setSelected={setSelectedPreset}
        />
        <ScaleSelector scale={scale} setScale={setScale} />
        <TouchableHighlight onPress={props.close}>
          <Text>X</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => devicePan.setValue({x: 0, y: 0})}>
          <Text>Center</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Toolbar;
