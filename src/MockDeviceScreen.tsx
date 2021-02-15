import 'react';
import React, {ReactNode} from 'react';
import {Animated, Text, View} from 'react-native';
import styles from './styles';
import {MockDeviceConfig} from './types';

interface Props {
  children: ReactNode;
  config: MockDeviceConfig;
  pan: Animated.ValueXY;
  scale: number;
}

function MockDeviceScreen(props: Props) {
  const {config, children, pan, scale} = props;
  const {width, height, radius} = config;

  return (
    <Animated.View
      style={[
        styles.dims,
        {
          transform: [{scale}, {translateX: pan.x}, {translateY: pan.y}],
        },
      ]}>
      <View style={styles.dimHeight}>
        <View style={styles.dimHeightLine} />
        <View style={[styles.dimSpec, styles.rotate270]}>
          <Text>{height}</Text>
        </View>
        <View style={styles.dimHeightLine} />
      </View>
      <View style={[styles.screen, {width, height, borderRadius: radius ?? 0}]}>
        {children}
      </View>
      <View style={[styles.dimWidth, {width}]}>
        <View style={styles.dimWidthLine} />
        <View style={styles.dimSpec}>
          <Text>{width}</Text>
        </View>
        <View style={styles.dimWidthLine} />
      </View>
    </Animated.View>
  );
}

export default MockDeviceScreen;
