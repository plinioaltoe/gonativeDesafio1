import Reactotron from 'reactotron-react-native'
// import { reactotronRedux } from 'reactotron-redux'
// import sagaPlugin from 'reactotron-redux-saga'

// Reactotron.configure({
//   host: 'ip_address'
// }).useReactNative()
//  .connect();

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect()

  console.tron = tron

  tron.clear()
}
