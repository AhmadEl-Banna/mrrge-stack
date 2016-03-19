var DeviceInfo = require('react-native-device-info')
export default {
   name :  DeviceInfo.getSystemName() + "Ahmed",
   isAndroid : DeviceInfo.getSystemName() === 'Android',
   isIPhone: DeviceInfo.getSystemName() === 'iPhone OS',
}