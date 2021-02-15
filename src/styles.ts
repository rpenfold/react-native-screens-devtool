import {StyleSheet} from 'react-native';

const DIM_LINE_COLOR = '#999';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  frame: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  toolbarContainer: {
    position: 'absolute',
    top: 0,
  },
  toolbar: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  screenContainer: {
    alignItems: 'center',
  },
  dims: {
    flexDirection: 'row',
  },
  screen: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: DIM_LINE_COLOR,
  },
  dimWidth: {
    position: 'absolute',
    right: 0,
    bottom: '100%',
    alignItems: 'center',
    height: 36,
    flexDirection: 'row',
  },
  dimHeight: {
    height: '100%',
    alignItems: 'center',
    width: 36,
  },
  dimSpec: {
    backgroundColor: '#ddd',
    borderRadius: 50,
    paddingVertical: 2,
    width: 50,
    alignItems: 'center',
  },
  dimWidthLine: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: DIM_LINE_COLOR,
    flexGrow: 1,
  },
  dimHeightLine: {
    width: StyleSheet.hairlineWidth,
    backgroundColor: DIM_LINE_COLOR,
    flexGrow: 1,
  },
  rotate270: {
    transform: [{rotate: '270deg'}],
  },
});

export default styles;
