import React, { useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { PRODUCTS, CATEGORIES } from '../data/data';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../data/types';
import { Search, ListFilter, LayoutGrid } from 'lucide-react-native';

const CartSection = () => (
  <View className="flex-1 items-center justify-center bg-gray-800 rounded-xl">
    <View className="p-4 rounded-lg bg-gray-700">
      <Text className="text-white text-lg font-bold">
        Cart Section (35% Width)
      </Text>
    </View>
  </View>
);

const NUM_COLUMNS = 4;
const ITEM_MARGIN = 16;


const MenuSection = () => {
  // Local state to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].id);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filtering Logic
  const filteredProducts = PRODUCTS.filter(p => p.categoryId === selectedCategory);

  const handleProductPress = (product: Product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  return (
    <View className="flex-1 bg-gray-900">

      {/* Top Bar */}
      <View className="flex-row items-center justify-between pb-2 mb-4 border-b border-gray-700">
        <Text className="text-white text-xl font-bold">Order Line</Text>

        <View className="flex-row items-center">
          <Pressable className="p-2 ml-2 bg-indigo-700 rounded-lg">
            <LayoutGrid size={20} color="white" />
          </Pressable>
          <Pressable className="p-2 ml-2 bg-gray-700 rounded-lg">
            <Search size={20} color="#6B7280" />
          </Pressable>
          <Pressable className="p-2 ml-2 bg-gray-700 rounded-lg">
            <ListFilter size={20} color="#6B7280" />
          </Pressable>
        </View>
      </View>

      {/* Category Filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Product Grid */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={{ paddingBottom: 16 }}
        columnWrapperStyle={{ gap: ITEM_MARGIN, marginBottom: ITEM_MARGIN }}
        renderItem={({ item }) => (
          <View className="flex-1" style={{ maxWidth: `${100 / NUM_COLUMNS}%` }}>
            <ProductCard product={item} onPress={handleProductPress} />
          </View>
        )}
      />

      {/* TODO: Item Details Modal rendering here */}
    </View>
  );
};

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
