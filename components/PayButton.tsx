import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';

interface PayButtonProps {
  total: number;
  onPaySuccess: () => void;
}

export const PayButton = ({ total, onPaySuccess }: PayButtonProps) => {
  const handlePay = () => {

    if (total === 0) {
      Alert.alert("Order Empty", "Please add items to the cart before paying.");
      return;
    }
    // For web
    // console.log(`[PAYMENT] Processing payment for $${total.toFixed(2)}`);
    // onPaySuccess();


    // Display final total
    Alert.alert(
      "Payment Initiated",
      `Final Total: $${total.toFixed(2)}\nOrder Processed Successfully!`,
      [{
        text: "OK",
        onPress: onPaySuccess
      }]
    );
  };

  return (
    <TouchableOpacity
      onPress={handlePay}
      disabled={total === 0}
      className={`py-4 rounded-xl items-center justify-center ${total > 0 ? 'bg-indigo-600' : 'bg-gray-700 opacity-50'}`}
    >
      <Text className="text-white text-xl font-bold">
        Pay ${total.toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
};
