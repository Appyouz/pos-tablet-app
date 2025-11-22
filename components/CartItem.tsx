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

  const statusTags = [
    { text: 'Unpaid', color: 'bg-red-700/50 text-red-300' },
    { text: 'Building', color: 'bg-indigo-700/50 text-indigo-300' },
    { text: 'Opened', color: 'bg-purple-700/50 text-purple-300' },
  ];
  return (
    // <View className="flex-row justify-between items-center py-2 border-b border-gray-700">
    <View className="flex-col py-2 border-b border-gray-700">
      <View className="flex-row items-center mb-1">

        {statusTags.map((tag) => (
          <Text
            key={tag.text}
            className={`text-[10px] ${tag.color} px-1 mr-1 rounded-sm font-bold`}
          >
            {tag.text.toUpperCase()}
          </Text>
        ))}
      </View>
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center flex-1">
          {/* Item name and quantity */}
          <Text className="text-white text-base font-bold flex-shrink mr-2">
            {item.name}
          </Text>
          <Text className="text-gray-400 text-base">
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
            className="p-1 rounded-full bg-red-800/50"
            onPress={() => onDelete(item.id)}
          >
            <X size={14} color="#EF4444" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
