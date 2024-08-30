import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import AppGradient from '@/components/AppGradient'
import AntDesign from '@expo/vector-icons/AntDesign'
import { router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import { TimerContext } from '@/context/TimerContext'

const AdjustMeditation = () => {

    const {setDuration} = useContext(TimerContext);
    
    const handlePress = (duration: number) => {
        setDuration(duration)
        router.back(); 
    }
    return (
        <View className='relative flex-1'>
            <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <Text>AdjustMeditation</Text>
                <Pressable 
                    onPress={() => router.back()}
                    className='absolute z-10 top-8 left-6'
                >
                    <AntDesign name='leftcircleo' size={50} color="white" />
                </Pressable>
                <View className='justify-center h-4/5'>
                    <Text className='text-3xl font-bold text-center text-white'>
                        Adjust your meditation duration
                    </Text>
                    <View>
                        <CustomButton 
                            title="10 Seconds"
                            onPress={() => handlePress(10)}
                            containerStyles = "mb-5"
                        />
                        <CustomButton 
                            title="5 Minutes"
                            onPress={() => handlePress(5 * 60)}
                            containerStyles = "mb-5"
                        />
                        <CustomButton 
                            title="10 Minutes"
                            onPress={() => handlePress(10 * 60)} 
                            containerStyles = "mb-5"
                        />
                        <CustomButton 
                            title="15 Minutes"
                            onPress={() => handlePress(15 * 60)}
                            containerStyles = "mb-5"
                        />
                    </View>
                </View>
            </AppGradient>
        </View>
    )
}

export default AdjustMeditation