
# Early alpha

`react-native-screens-devtool` is still in an early alpha stage. This readme will be written when it is ready for beta.

You will likely only want to load this in development builds. For now, the easiest way to do this is by conditionally importing it like so:

```js
let ScreensDevTool = React.Fragment;

if (__DEV__) {
  ScreensDevTool = require('react-native-screens-devtool').default;
}
```
