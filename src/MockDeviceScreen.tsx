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
  const dimHeightLineStyle = [styles.dimHeightLine, scale < 1 ? { width: 2 } : null]
  const dimWidthLineStyle = [styles.dimWidthLine, scale < 1 ? { height: 2 } : null]

  return (
    <Animated.View
      style={[
        styles.dims,
        {
          transform: [{scale}, {translateX: pan.x}, {translateY: pan.y}],
        },
      ]}>
      <View style={styles.dimHeight}>
        <View style={dimHeightLineStyle} />
        <View style={[styles.dimSpec, styles.rotate270]}>
          <Text>{height}</Text>
        </View>
        <View style={dimHeightLineStyle} />
      </View>
      <View style={[styles.screen, {width, height, borderRadius: radius ?? 0}]}>
        {children}
      </View>
      <View style={[styles.dimWidth, {width}]}>
        <View style={dimWidthLineStyle} />
        <View style={styles.dimSpec}>
          <Text>{width}</Text>
        </View>
        <View style={dimWidthLineStyle} />
      </View>
    </Animated.View>
  );
}

export default MockDeviceScreen;
