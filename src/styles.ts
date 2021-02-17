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
    alignSelf: 'center',
  },
  toolbar: {
    flexGrow: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#CCC',
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
    zIndex: 1,
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
  scaleSelectorContainer: {
    flexDirection: 'row',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#CCC'
  },
  btnText: {
    fontSize: 24,
  },
  dropdown: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: '#CCC'
  },
  dropdownItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  dropdownItemSelected: {
    backgroundColor: '#EAEAEA',
  },
  rotate270: {
    transform: [{rotate: '270deg'}],
  },
  rotate45: {
    transform: [{ rotate: '45deg' }]
  }
});

export default styles;
