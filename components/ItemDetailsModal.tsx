import React, { useState } from 'react';
import { View, Text, Modal, Image, TextInput, TouchableOpacity } from 'react-native';
import { X, Plus, Minus, ChevronLeft, Check } from 'lucide-react-native';
import { Product } from '../data/types';

interface ItemDetailsModalProps {
  isVisible: boolean;
  product: Product | null;
  onClose: () => void;
  // Empty function for now. TODO: Will fill it later
  onAddToCart: (product: Product, quantity: number, notes: string) => void;
}

export const ItemDetailsModal = ({
  isVisible,
  product,
  onClose,
  onAddToCart
}: ItemDetailsModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  // Reset local state here
  const handleClose = () => {
    setQuantity(1);
    setNotes('');
    onClose();
  };

  if (!product) return null;

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const totalDisplay = (product.price * quantity).toFixed(2);

  return (
    // MOdal component
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={handleClose}
    >
      <View className="flex-1">
        {/* Transparency for Modal content to look like its inside menu componenet*/}
        <View className="w-[65%] ml-[35%] h-full bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl">

          {/* Top Header Bar */}
          <View className="flex-row items-center justify-between pb-4 mb-4 border-b border-gray-700">
            <View className="flex-row items-center">
              <ChevronLeft size={20} color="#9CA3AF" />
              <Text className="text-gray-400 text-base font-medium ml-2">
                Back to Menu
              </Text>
            </View>
            <View className="flex-row items-center">
              {/* Close/Cancel Button */}
              <TouchableOpacity
                onPress={handleClose}
                className="p-2 bg-red-700/50 rounded-lg mr-2"
              >
                <X size={20} color="#EF4444" />
              </TouchableOpacity>
              {/* Done/Add to Order Button */}
              <TouchableOpacity
                onPress={() => onAddToCart(product, quantity, notes)}
                className="p-2 bg-green-600 rounded-lg"
              >
                <Check size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Product info */}
          <View className="flex-row items-start mb-6">
            <Image
              source={{ uri: product.image }}
              className="w-20 h-20 rounded-lg mr-4 bg-gray-600"
            />
            <View>
              <Text className="text-white text-2xl font-bold">{product.name}</Text>
              <Text className="text-gray-400 text-sm">Base ${product.price.toFixed(2)}</Text>
            </View>
          </View>

          {/* Quantity */}
          <View className="mb-6">
            <Text className="text-gray-400 text-lg mb-2">Quantity</Text>
            <View className="flex-row items-center">
              {/* Minus/ Decrement Button */}
              <TouchableOpacity
                onPress={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className={`p-3 rounded-xl border border-gray-700 ${quantity <= 1 ? 'opacity-50' : 'bg-gray-700'}`}
              >
                <Minus size={24} color="white" />
              </TouchableOpacity>

              {/* Quantity Display */}
              <Text className="text-white text-2xl font-bold w-16 text-center mx-4">
                {quantity}
              </Text>

              {/* Plus Button */}
              <TouchableOpacity
                onPress={() => handleQuantityChange(1)}
                className="p-3 bg-indigo-600 rounded-xl"
              >
                <Plus size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Notes Field */}
          <View className="mb-8 flex-1">
            <Text className="text-gray-400 text-lg mb-2">Notes</Text>
            <TextInput
              className="p-3 bg-gray-900 border border-gray-700 rounded-lg text-white h-24"
              placeholder="No onions..."
              placeholderTextColor="#4B5563"
              multiline
              value={notes}
              onChangeText={setNotes}
              maxLength={80}
            />
          </View>

          {/* Displaytotal */}
          <View className="flex-row justify-between items-center pt-4 border-t border-gray-700">
            <Text className="text-white text-xl font-bold">Total</Text>
            <Text className="text-indigo-400 text-3xl font-bold">${totalDisplay}</Text>
          </View>

        </View>
      </View>
    </Modal>
  );
};
