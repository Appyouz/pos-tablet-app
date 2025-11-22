import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Send, Tag } from 'lucide-react-native';



interface CartSummaryProps {
  subtotal: number;
  tax: number;
  total: number;
  itemCount: number;
}

export const CartSummary = ({ subtotal, tax, total, itemCount }: CartSummaryProps) => {
  const format = (value: number) => `$${value.toFixed(2)}`;

  return (
    <View className="mt-4 pt-4 border-t border-gray-700">

      {/* Subtotal */}
      <View className="flex-row justify-between mb-1">
        <Text className="text-gray-400 text-base">Subtotal</Text>
        <Text className="text-white text-base">{format(subtotal)}</Text>
      </View>

      {/* Tax */}
      <View className="flex-row justify-between mb-1">
        <Text className="text-gray-400 text-base">Tax (10%)</Text>
        <Text className="text-white text-base">{format(tax)}</Text>
      </View>

      {/* Voucher */}
      <View className="flex-row justify-between mb-4">
        <Text className="text-gray-400 text-base">Voucher</Text>
        <Text className="text-green-400 text-base">{format(0)}</Text>
      </View>

      {/* Total */}
      <View className="flex-row justify-between items-center pt-2 border-t border-gray-700">
        <Text className="text-white text-xl font-bold">Total</Text>
        <Text className="text-indigo-400 text-3xl font-bold">{format(total)}</Text>
      </View>

      {/* Buttons for discounts/Send to Kitchen */}
      <View className="flex-row justify-between items-center mt-4">
        <TouchableOpacity className="py-2 px-4 rounded-lg border border-gray-700 bg-gray-800 flex-row items-center">
          <Tag size={16} color="#9CA3AF" className="mr-1" />
          <Text className="text-white font-semibold">Discounts</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-2 px-4 rounded-lg bg-gray-800 flex-row items-center">
          <Text className="text-white font-semibold mr-1">Send to Kitchen ({itemCount})</Text>
          <Send size={16} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

    </View>
  );
};
