import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Modal, Image, TextInput, Pressable } from 'react-native';
import { X, Plus, Minus, ChevronLeft, Check } from 'lucide-react-native';
import { Product } from '../data/types';

interface ItemDetailsModalProps {
  isVisible: boolean;
  product: Product | null;
  onClose: () => void;
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
  const MAX_NOTES_LENGTH = 80;

  // Reset local state
  useEffect(() => {
    if (product) {
      setQuantity(1);
      setNotes('');
    }
  }, [product, isVisible]);

  // useMemo for performance and safe calculation
  const totalDisplay = useMemo(() => {
    const price = product?.price ?? 0;
    return (price * quantity).toFixed(2);
  }, [product, quantity]);

  if (!product) return null;

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleFinalAdd = () => {
    if (product && quantity > 0) {
      onAddToCart(product, quantity, notes);
      onClose();
    }
  };

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="flex-1">
        {/* Modal Content*/}
        <View className="w-[65%] ml-[35%] h-full bg-zinc-900 p-6 rounded-xl border border-gray-800 shadow-xl">

          {/* Header Bar */}
          <View className="flex-row items-center justify-between pb-4 mb-4 border-b border-zinc-800">
            <View className="flex-row items-center">
              <ChevronLeft size={20} color="#E5E7EB" />
              <Text className="text-gray-200 text-base font-medium ml-2">Back to Menu</Text>
            </View>
            <View className="flex-row items-center">
              {/* Cancel Button*/}
              <Pressable
                onPress={onClose}
                className="p-2 bg-red-600 rounded-lg mr-2"
              >
                <X size={20} color="white" />
              </Pressable>
              {/* Done/Add button */}
              <Pressable
                onPress={handleFinalAdd}
                className="p-2 bg-green-600 rounded-lg flex-row items-center"
              >
                <Check size={20} color="white" />
                <Text className="text-white ml-1 font-semibold">Done</Text>
              </Pressable>
            </View>
          </View>

          {/* Product Info */}
          <View className="flex-row items-start mb-6">
            <Image
              source={{ uri: product.image }}
              className="w-16 h-16 rounded-md mr-4 bg-gray-600"
            />
            <View>
              <Text className="text-white text-xl font-bold">{product.name}</Text>
              <Text className="text-gray-400 text-sm">Base ${product.price.toFixed(2)}</Text>
            </View>
          </View>

          {/* Quantity Controller */}
          <View className="mb-6">
            <Text className="text-gray-400 text-sm mb-2">Quantity</Text>
            <View className="flex-row items-center">
              {/* Decrement/Minus Button */}
              <Pressable
                onPress={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className={`p-3 rounded-lg ${quantity <= 1 ? 'bg-zinc-800/50 opacity-50' : 'bg-zinc-800'}`}
              >
                <Minus size={20} color="white" />
              </Pressable>

              {/* Quantity Display */}
              <Text className="text-white text-xl font-bold w-12 text-center mx-4">{quantity}</Text>

              {/* Increment/Plus Button */}
              <Pressable
                onPress={() => handleQuantityChange(1)}
                className="p-3 bg-indigo-600 rounded-lg"
              >
                <Plus size={20} color="white" />
              </Pressable>
            </View>
          </View>

          {/* Notes Field */}
          <View className="mb-8">
            <Text className="text-gray-400 text-sm mb-2">Notes</Text>
            <View className="relative">
              <TextInput
                className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white h-24"
                placeholder="No onions..."
                placeholderTextColor="#6B7280"
                multiline
                value={notes}
                onChangeText={(text) => setNotes(text.slice(0, MAX_NOTES_LENGTH))}
                maxLength={MAX_NOTES_LENGTH}
                style={{ textAlignVertical: 'top' }}
              />
              <Text className="text-gray-500 text-xs absolute bottom-1 right-2">
                {notes.length}/{MAX_NOTES_LENGTH}
              </Text>
            </View>
          </View>

          {/* Display Total */}
          <View className="flex-row justify-between items-center pt-4 border-t border-zinc-800">
            <Text className="text-white text-xl font-semibold">Total</Text>
            <Text className="text-indigo-400 text-2xl font-bold">${totalDisplay}</Text>
          </View>

        </View>
      </View>
    </Modal>
  );
};
