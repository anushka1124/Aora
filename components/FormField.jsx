import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { icons } from '../constants'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
        <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

        <View className='w-full border border-gray-700 focus:border-[#FFA001] h-16 px-4 bg-gray-800 rounded-2xl items-center flex-row'>
            <TextInput
                className='flex-1 text-white font-psemibold text-base'
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#7b7b8b'
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword}
            />

            {title === 'Password' && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image
                        source={!showPassword ? icons.eye : icons.eyeHide}
                        className='w-6 h-6'
                    />
                </TouchableOpacity>

            )}
        </View>
    </View>
  )
}

export default FormField
