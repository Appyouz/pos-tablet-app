import React from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { CATEGORIES } from '../data/data';

// Props interface definition for strict typing
interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    // For horizontal scrolling of categories
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex-row py-2 mb-4"
    >
      {CATEGORIES.map((category) => {
        const isActive = category.id === selectedCategory;

        // Dark badge style
        const baseClasses = "py-2 px-4 rounded-full border mr-3";
        const activeClasses = "bg-gray-700 border-indigo-500";
        const inactiveClasses = "bg-transparent border-gray-600";

        return (
          <TouchableOpacity
            key={category.id}
            onPress={() => onSelectCategory(category.id)}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            activeOpacity={0.7}
          >
            <Text
              className={`font-semibold text-sm ${isActive ? 'text-indigo-400' : 'text-gray-400'}`}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
