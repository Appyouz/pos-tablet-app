import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CartItem as CartItemType } from '../data/types';
import { X } from 'lucide-react-native';

interface CartItemProps {
  item: CartItemType;
  onDelete: (itemId: string) => void;
}

export const CartItem = ({ item, onDelete }: CartItemProps) => {
  const itemTotal = (item.price * item.quantity).toFixed(2);

  return (
    <View className="flex-row justify-between items-center py-2 border-b border-gray-700">
      <View className="flex-row items-center flex-1">
        {/* Item name and quantity */}
        <Text className="text-white text-base font-semibold flex-shrink">
          {item.name}
        </Text>
        <Text className="text-gray-400 text-sm ml-1">
          x{item.quantity}
        </Text>

        {/* Indicator for notes*/}
        {item.notes ? (
          <Text className="text-yellow-400 text-xs italic ml-2">{item.notes}</Text>
        ) : null}
      </View>

      {/* Price for an item*/}
      <View className="flex-row items-center">
        <Text className="text-white text-base font-semibold mr-3">
          ${itemTotal}
        </Text>
        {/* Delete button */}
        <TouchableOpacity
          className="p-1 rounded-full bg-gray-700"
          onPress={() => onDelete(item.id)}
        >
          <X size={14} color="#EF4444" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
