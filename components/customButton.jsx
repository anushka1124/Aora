import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress} 
        className={`${containerStyles} ${isLoading ? 'opacity-50' : ''} bg-[#FFA001] rounded-xl min-h-[62px] justify-center items-center`}
        activeOpacity={0.7}
        disabled={isLoading}
    >
      <Text className={`text-black font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
