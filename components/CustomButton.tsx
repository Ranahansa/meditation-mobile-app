import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomButtonProps from '@/constants/custom-models'

const CustomButton = ({ onPress,
    title,
    textStyles = "",
    containerStyles = ""
}: CustomButtonProps) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            className={`bg-white min-w-full rounded-xl min-h-[62px] 
                justify-center items-center ${containerStyles}`}
            onPress={onPress}
        >
            <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton