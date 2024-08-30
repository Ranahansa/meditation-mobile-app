import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from 'expo-router'
import CustomButton from '@/components/CustomButton';
import { Audio } from 'expo-av';
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/MeditationData';
import { TimerContext } from '@/context/TimerContext';


const Meditate = () => {

    const {duration: secondsRemaining, setDuration} = useContext(TimerContext)

    const { id } = useLocalSearchParams()
    // const [secondsRemaining, setSecondsRemaining] = useState(10);
    const [isMeditating, setMeditating] = useState(false);
    const [audioSound, setSound] = useState<Audio.Sound>()
    const [isPlayingAudio, setPlayingAudio] = useState(false);

    useEffect(() => {
        let timerId: NodeJS.Timeout;

        if (secondsRemaining === 0) {
            setMeditating(false)
            return
        }

        if (isMeditating) {

            timerId = setTimeout(() => {
                setDuration(secondsRemaining - 1)
            }, 1000)
        }

        return () => {
            clearTimeout(timerId);
        }
    }, [secondsRemaining, isMeditating])

    
    useEffect(() => {
        audioSound?.unloadAsync();
    },[audioSound])


    const toggleMeditationSessionStatus = async () => {
    if (secondsRemaining === 0) setDuration(10);
    setMeditating(!isMeditating);

    await toggleSound();
};


    const toggleSound = async () => {
    try {
        let sound = audioSound;

        if (!sound) {
            sound = await initializeSound();
            setSound(sound);
        }

        const status = await sound.getStatusAsync();

        if (!status.isLoaded) {
            await sound.loadAsync(AUDIO_FILES[MEDITATION_DATA[Number(id) - 1].audio]);
        }

        if (isPlayingAudio) {
            await sound.pauseAsync();
            setPlayingAudio(false);
        } else {
            await sound.playAsync();
            setPlayingAudio(true);
        }
    } catch (error) {
        console.error("Error toggling sound:", error);
    }
};
    

    const initializeSound = async (): Promise<Audio.Sound> => {
    try {
        const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

        const { sound } = await Audio.Sound.createAsync(
            AUDIO_FILES[audioFileName]
        );

        setSound(sound);
        return sound;
    } catch (error) {
        console.error("Error loading sound:", error);
        throw error;
    }
};

    const handleAdjustDuration =() => {
        if(isMeditating) toggleMeditationSessionStatus()

        router.push("/(modal)/adjust-meditation");
    }
    
    

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
                        <AntDesign name="leftcircleo" size={50} color="white" />
                    </Pressable>
                    <View className='justify-center flex-1'>
                        <View className='items-center justify-center mx-auto rounded-full bg-neutral-200 w-44 h-44'>
                            <Text className='text-3xl font-bold text-center text-white'>
                                {formattedTimeMinutes}:{formattedTimeSeconds}
                            </Text>
                        </View>
                    </View>
                    <View className='mb-5'>
                        <CustomButton title="Adjust Duration" onPress={handleAdjustDuration} 
                        containerStyles={'bg-white'} />
                        
                        <CustomButton title={isMeditating ? "stop" : "Start Meditation"} onPress={toggleMeditationSessionStatus} 
                        containerStyles='bg-white mt-4'  />
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default Meditate