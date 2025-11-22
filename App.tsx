import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './global.css'

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-gray-900'>
      <Text className='text-white text-2xl font-bold'>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
