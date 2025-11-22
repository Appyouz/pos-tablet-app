import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';

interface PayButtonProps {
  total: number;
}

export const PayButton = ({ total }: PayButtonProps) => {
  const handlePay = () => {
    // Display final total
    Alert.alert(
      "Payment Initiated",
      `Final Total: $${total.toFixed(2)}\nOrder Processed Successfully!`,
      [{ text: "OK" }]
    );
  };

  return (
    <TouchableOpacity
      onPress={handlePay}
      className="bg-indigo-600 py-4 rounded-xl items-center justify-center mt-4"
    >
      <Text className="text-white text-xl font-bold">
        Pay ${total.toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
};
