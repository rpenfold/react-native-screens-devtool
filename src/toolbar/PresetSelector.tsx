import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {MockDeviceConfig} from '../types';
import styles from '../styles';

const localStyles = StyleSheet.create({
  presetSelector: {
    minWidth: 200,
  },
  dropdownOffset: {
    transform: [{translateY: 16}]
  }
});

interface Props {
  presets: Array<MockDeviceConfig>;
  selected: string;
  setSelected(name: string): void;
}

function PresetSelector(props: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const {presets, setSelected, selected} = props;

  return (
    <TouchableHighlight
      style={[styles.btn, localStyles.presetSelector]}
      onPress={() => setIsOpen(!isOpen)}
    >
      <>
        <Text>{selected}&nbsp;&nbsp;▼</Text>
        {isOpen && (
          <View style={[styles.dropdown, localStyles.dropdownOffset]}>
            {presets.map((config) => (
              <TouchableHighlight
                underlayColor="#CCC"
                style={[
                  styles.dropdownItem,
                  config.name === selected && styles.dropdownItemSelected,
                ]}
                key={config.name}
                onPress={() => {
                  setSelected(config.name);
                  setIsOpen(false);
                }}>
                <Text>{config.name}</Text>
              </TouchableHighlight>
            ))}
          </View>
        )}
      </>
    </TouchableHighlight>
  )
}

export default PresetSelector;
