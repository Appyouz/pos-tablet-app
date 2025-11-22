import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Settings } from 'lucide-react-native';
import { Product } from '../data/types';

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
}

export const ProductCard = ({ product, onPress }: ProductCardProps) => {
  const cardClasses = "bg-zinc-800 rounded-xl p-3 border border-gray-700 shadow-md";
  const stockIndicatorClasses = product.inStock
    ? "text-green-400 font-medium text-xs"
    : "text-red-400 font-medium text-xs";

  return (
    <TouchableOpacity
      onPress={() => onPress(product)}
      disabled={!product.inStock}
      className={`${cardClasses} flex-col h-56 ${!product.inStock ? 'opacity-50' : ''}`}
      activeOpacity={0.7}
    >
      {/* Top Section: Product Image  */}
      <View className="h-2/3 rounded-lg overflow-hidden mb-2 bg-gray-600 justify-center items-center">
        <Image
          source={{ uri: product.image }}
          className="w-full h-full"
          resizeMode="cover"
        />
        {/* Placeholder for the small  icon as per Screenshot*/}
        <View className="absolute top-2 right-2 bg-gray-800/80 p-1 rounded-full">
          <Settings size={14} color="#6B7280" />
        </View>
      </View>

      {/* Bottom Section: Product Details  */}
      <View className="flex-1 justify-between items-start">
        <Text className="text-white font-semibold text-sm line-clamp-2" numberOfLines={2}>
          {product.name}
        </Text>
        <Text className="text-indigo-400 font-bold text-lg mt-1">
          {`$${product.price.toFixed(2)}`}
        </Text>
        <Text className={stockIndicatorClasses}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
