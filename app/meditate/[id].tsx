import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from 'expo-router'
import CustomButton from '@/components/CustomButton';

const Meditate = () => {
    
    const {id} = useLocalSearchParams()
    const [secondsRemaining, setSecondsRemaining] = useState(10);
    const [isMeditating, setMeditating] = useState(false);

    useEffect(() => {
        let timerId: NodeJS.Timeout;
        
        if(secondsRemaining ===0){
            setMeditating(false)
            return
        }

        if (isMeditating) {
            
            timerId = setTimeout(() => {
            setSecondsRemaining(secondsRemaining - 1)
        }, 1000)
        }
        
        return () => {
            clearTimeout(timerId);
        }
    }, [secondsRemaining, isMeditating])

    const formattedTimeMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2, '0');
    const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, '0');
    
    return (
        <View className='flex-1'>
            <ImageBackground source={MEDITATION_IMAGES[Number(id) - 1]} 
            resizeMode='cover' 
            className='flex-1'>
                <AppGradient colors={["transparent", 'rgba(0, 0, 0, 0.8)']}>
                    <Pressable
                        onPress={() => router.back()}
                        className="absolute z-10 top-16 left-6"
                    >
                        <AntDesign name="leftcircleo" size={50} color="white"/>
                    </Pressable>
                    <View className='justify-center flex-1'>
                        <View className='items-center justify-center mx-auto rounded-full bg-neutral-200 w-44 h-44'>
                            <Text className='text-3xl font-bold text-center text-white'>
                                {formattedTimeMinutes}:{formattedTimeSeconds}
                            </Text>
                        </View>
                    </View>
                    <View className='mb-5'>
                        <CustomButton title="Start Meditation" onPress={() => setMeditating(true)} containerStyles={'bg-white'} />
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default Meditate