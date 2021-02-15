import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {MockDeviceConfig} from '../types';

interface Props {
  presets: Array<MockDeviceConfig>;
  selected: string;
  setSelected(name: string): void;
}

function PresetSelector(props: Props) {
  const {presets, setSelected} = props;

  return (
    <View>
      {presets.map((config) => (
        <TouchableHighlight
          key={config.name}
          onPress={() => setSelected(config.name)}>
          <Text>{config.name}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
}

export default PresetSelector;
