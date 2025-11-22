import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions, Pressable } from 'react-native';
import { PRODUCTS, CATEGORIES } from '../data/data';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../data/types';
import { ItemDetailsModal } from '../components/ItemDetailsModal';
import { Search, ListFilter, LayoutGrid } from 'lucide-react-native';
import { useCartStore } from '../store/cartStore';
import { PayButton } from '../components/PayButton';
import { CartItem } from '../components/CartItem';
import { CartSummary } from '../components/CartSummary';


// Get screen width for responsive calculations
const { width } = Dimensions.get('window');
const NUM_COLUMNS = 4;
const ITEM_MARGIN = 16;



const CartSection = () => {
  const cartCount = useCartStore((state) => state.cart.length);
  const total = useCartStore((state) => state.getTotal());
  return (
    <View className="flex-1 flex-col justify-between p-4">
      <View>
        <Text className="text-gray-400 text-sm">Customer</Text>
        <Text className="text-white text-lg font-bold mr-4 my-2">+ Add Customer</Text>
        <Text className="text-white text-2xl font-bold mb-4">Cart</Text>
        <Text className="text-gray-400">Items in Cart: {cartCount}</Text>

        {/* Cart List */}
        <View className="max-h-1/2 mt-4">
          {/* Placeholder*/}
          <Text className="text-gray-500 italic">Cart items will appear here...</Text>
        </View>
      </View>

      {/* Summary and pay button */}
      <View>
        <CartSummary
          subtotal={useCartStore((s) => s.getSubtotal())}
          tax={useCartStore((s) => s.getTax())}
          total={total}
        />
        <PayButton total={total} />
      </View>
    </View>
  );
};



const MenuSection = () => {
  // Local state to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].id);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Get the action from Zustand store
  const addItem = useCartStore((state) => state.addItem);

  // Filtering Logic
  const filteredProducts = PRODUCTS.filter(p => p.categoryId === selectedCategory);

  // Hnadlers
  const handleProductPress = (product: Product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleAddToCart = (product: Product, quantity: number, notes: string) => {
    addItem(product, quantity, notes);
    setSelectedProduct(null);
    setIsModalVisible(false);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalVisible(false);
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
            <ProductCard product={item} onPress={() => handleProductPress(item)} />
          </View>
        )}
      />

      <ItemDetailsModal
        isVisible={isModalVisible}
        product={selectedProduct}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </View>
  );
};

export default function OrderScreen() {
  return (

    <View className="flex-1 flex-row">
      {/* Left Column: Cart/Bill Section (35% width) */}

      <View className="w-[35%] rounded-xl bg-gray-800 border border-gray-700 shadow-lg">
        <CartSection />
      </View>

      {/* Right Column: Menu Section (65% width) */}

      <View className="w-[65%] ml-4 rounded-xl bg-gray-800 border border-gray-700 shadow-lg p-4">
        <MenuSection />
      </View>
    </View>
  );
}
