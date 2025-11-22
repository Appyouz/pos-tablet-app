import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import OrderScreen from './screens/OrderScreen'

import './global.css'



export default function App() {
  return (
    <View className='flex-1 bg-gray-900 p-4'>
      <OrderScreen />
      <StatusBar style="auto" />
    </View>
  );
}
