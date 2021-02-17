import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles';

interface Props {
  scale: number;
  setScale(value: number): void;
}

const SCALES = [0.25, 0.5, 0.75, 1, 1.5, 2];

function ScaleSelector(props: Props) {
  const {scale, setScale} = props;

  return (
    <View style={styles.scaleSelectorContainer}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          const index = SCALES.indexOf(scale);

          if (index > 0) {
            const newVal = SCALES[index - 1];
            setScale(newVal);
          }
        }}>
        <Text style={styles.btnText}>−</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => setScale(1)}>
        <Text>{scale * 100}%</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          const index = SCALES.indexOf(scale);

          if (index < SCALES.length - 1) {
            const newVal = SCALES[index + 1];
            setScale(newVal);
          }
        }}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ScaleSelector;
