import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions, Pressable } from 'react-native';
import { PRODUCTS, CATEGORIES } from '../data/data';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../data/types';
import { ItemDetailsModal } from '../components/ItemDetailsModal';
import { Search, ListFilter, LayoutGrid, ChevronDown, List } from 'lucide-react-native';
import { useCartStore } from '../store/cartStore';
import { PayButton } from '../components/PayButton';
import { CartItem } from '../components/CartItem';
import { CartSummary } from '../components/CartSummary';
import { TouchableOpacity } from 'react-native';

const NUM_COLUMNS = 4;
const ITEM_MARGIN = 16;



const CartSection = () => {
  // const cartCount = useCartStore((state) => state.cart.length);
  // const total = useCartStore((state) => state.getTotal());
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  // Calculations of subtotal, total and tax
  const getSubtotal = useCartStore((s) => s.getSubtotal);
  const getTax = useCartStore((s) => s.getTax);
  const getTotal = useCartStore((s) => s.getTotal);


  const subtotal = getSubtotal();
  const tax = getTax();
  const total = getTotal();
  const handlePaySuccess = () => {
    // clear the global state
    clearCart();
  };
  return (
    <View className="flex-1 flex-col justify-between p-4">
      {/* <View className="flex-shrink"> */}
      {/*   <Text className="text-gray-400 text-sm">Customer</Text> */}
      {/*   <Text className="text-white text-lg font-bold mr-4 my-2">+ Add Customer</Text> */}
      <View className="flex-row justify-between mb-2">

        {/* Customer Section */}
        <View className="flex-1 mr-1">
          <Text className="text-gray-400 text-sm mb-1">Customer</Text>
          <TouchableOpacity
            className="p-2 rounded-lg border border-gray-700 bg-gray-800"
          >
            <Text className="text-white text-base font-semibold">+ Add Customer</Text>
          </TouchableOpacity>
        </View>

        {/* Order type section */}
        <View className="flex-1 ml-1">
          <Text className="text-gray-400 text-sm mb-1">Order Type</Text>
          <TouchableOpacity
            className="p-2 rounded-lg border border-gray-700 bg-gray-800 flex-row justify-between items-center"
          >
            <Text className="text-white text-base font-semibold">Takeaway</Text>
            <ChevronDown size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Order number and item count */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-gray-500 text-xs">order_1763661833981</Text>
        <Text className="text-gray-400 text-sm">{cart.length} Items</Text>
      </View>
      <Text className="text-white text-3xl font-bold mb-4">Cart</Text>

      {/* Display cart items from Zustand */}
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        className="max-h-[60%] border-y border-gray-700/50"
        contentContainerStyle={{ paddingVertical: 8 }}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onDelete={removeItem}
          />
        )}
        ListEmptyComponent={() => (
          <View className="items-center py-12">
            <Text className="text-gray-500 italic">No items in cart. Start an order!</Text>
          </View>
        )}
      />

      {/* Summary and pay button */}
      <View className="flex-shrink-0 mt-4">
        <CartSummary
          subtotal={subtotal}
          tax={tax}
          total={total}
          itemCount={cart.length}
        />
        <View className="flex-row mt-4 gap-3">
          {/* More button */}
          <TouchableOpacity
            className="flex-1 py-4 rounded-xl items-center justify-center bg-gray-800 border border-gray-700"
          >
            <Text className="text-white text-xl font-bold">More</Text>
          </TouchableOpacity>
          {/* TODO: Pay connection here*/}
          <View className="flex-1">
            <PayButton total={total}
              onPaySuccess={handlePaySuccess}
            />
          </View>
        </View>
      </View>
    </View >
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
    <View className="flex-1 bg-zinc-900 p-4">

      {/* Top Bar */}
      <View className="flex-row items-center justify-between pb-3 border-b border-zinc-700/50">

        {/* Menu and order type*/}
        <View className="flex-row items-center">
          <Text className="text-gray-300 font-medium mr-3">Menu</Text>
          <View className="bg-zinc-800 py-1 px-3 rounded-md">
            <Text className="text-gray-300 text-sm">Order Type: Takeaway</Text>
          </View>
        </View>

        {/* Right side action buttons */}
        <View className="flex-row items-center">
          {/* Grid view button */}
          <Pressable className="p-2 ml-2 bg-indigo-700 rounded-lg">
            <LayoutGrid size={20} color="white" />
          </Pressable>

          {/* Search Button */}
          <Pressable className="p-2 ml-2 bg-gray-800 rounded-lg">
            <Search size={20} color="#6B7280" />
          </Pressable>

          {/* Filter view */}
          <Pressable className="p-2 ml-2 bg-gray-800 rounded-lg">
            <ListFilter size={20} color="#6B7280" />
          </Pressable>

          {/* Orders icon  */}
          <Pressable className="p-2 ml-2 bg-gray-800 rounded-lg">
            <List size={20} color="#6B7280" />
          </Pressable>

          {/* Menu dropdown */}
          <Pressable className="py-2 px-3 ml-2 bg-gray-800 rounded-lg flex-row items-center">
            <Text className="text-white font-semibold mr-1">Main Menu</Text>
            <ChevronDown size={20} color="white" />
          </Pressable>
        </View>
      </View>

      {/*categoyr filter wrapper*/}
      <View className="bg-zinc-800/50 p-3 rounded-lg mt-3 mb-4">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </View>
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

      <View className="w-[35%] rounded-xl bg-zinc-900 border border-gray-700 shadow-lg">
        <CartSection />
      </View>

      {/* Right Column: Menu Section (65% width) */}

      <View className="w-[65%] ml-4 rounded-xl bg-zinc-950 border border-gray-700 shadow-lg p-4">
        <MenuSection />
      </View>
    </View>
  );
}
