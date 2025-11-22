import React from 'react';
import { View, Text } from 'react-native';

const CartSection = () => (
  <View className="flex-1 items-center justify-center bg-gray-800 rounded-xl">
    <View className="p-4 rounded-lg bg-gray-700">
      <Text className="text-white text-lg font-bold">
        Cart Section (35% Width)
      </Text>
    </View>
  </View>
);

const MenuSection = () => (
  <View className="flex-1 items-center justify-center bg-gray-800 rounded-xl ml-4">
    <View className="p-4 rounded-lg bg-gray-700">
      <Text className="text-white text-lg font-bold">
        Menu Section (65% Width)
      </Text>
    </View>
  </View>
);

export default function OrderScreen() {
  return (
    <View className="flex-1 flex-row bg-gray-900">

      {/* Left Column: Cart/Bill Section (35% width) */}
      <View className="w-[35%] rounded-xl bg-gray-800 p-4">
        <CartSection />
      </View>

      {/* Right Column: Menu Section (65% width) */}
      <View className="w-[65%] ml-4 rounded-xl bg-gray-800 p-4">
        <MenuSection />
      </View>
    </View>
  );
}
