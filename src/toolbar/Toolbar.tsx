import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableHighlight,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';
import {MockDeviceConfig} from '../types';
import styles from '../styles';
import PresetSelector from './PresetSelector';
import ScaleSelector from './ScaleSelector';

const localStyles = StyleSheet.create({
  centerIconOffset: {
    transform: [{translateY: 3}, {rotate: '45deg'}]
  }
})

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
        <TouchableHighlight style={styles.btn} onPress={() => devicePan.setValue({x: 0, y: 0})}>
          <Text style={[styles.btnText, localStyles.centerIconOffset]}>⦻</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} onPress={props.close}>
          <Text>CLOSE</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Toolbar;
