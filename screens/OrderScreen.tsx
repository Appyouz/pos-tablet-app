import React, { useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { PRODUCTS, CATEGORIES } from '../data/data';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../data/types';
import { Search, ListFilter, LayoutGrid } from 'lucide-react-native';
import { PayButton } from '../components/PayButton';
import { CartItem } from '../components/CartItem';
import { CartSummary } from '../components/CartSummary';





const MOCK_CART_ITEMS: CartItemType[] = [
  {
    id: 'p4', name: 'Buffalo Wings', price: 8.99, categoryId: 'appetizers',
    image: 'url', inStock: true, quantity: 1, notes: 'Extra crispy', cartItemId: 'c1'
  }
];

const CartSection = () => {
  return (
    <View className="flex-1 flex-col justify-between">
      <View>
        <Text className="text-gray-400 text-sm">Customer</Text>
        <View className="flex-row items-center my-2">
          <Text className="text-white text-lg font-bold mr-4">+ Add Customer</Text>
          <Text className="text-gray-500 text-sm">ORDER_17639661833981</Text>
        </View>
        <Text className="text-white text-2xl font-bold mb-4">Cart</Text>

        {/* Cart List */}
        {/* TODO: Implement FlatList/ScrollView for this section*/}
        <View className="max-h-1/2">
          {MOCK_CART_ITEMS.map(item => (
            <CartItem key={item.cartItemId} item={item} />
          ))}
        </View>
      </View>

      {/*  Summary and pay button */}
      <View>
        <CartSummary subtotal={8.99} tax={0.90} total={9.89} />
        <PayButton total={9.89} />
      </View>
    </View>
  );
};

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
