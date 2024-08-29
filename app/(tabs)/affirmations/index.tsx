import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import GuidedAffirmations from '@/components/GuidedAffirmations'

const Affirmations = () => {
    return (
        <View className='flex-1'>
            <AppGradient colors={["#2e1f58", "#54426b","#a790af"]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='text-3xl font-bold text-zinc-50'>
                        Change your beliefs and change your life
                    </Text>
                    <View>
                        {AFFIRMATION_GALLERY.map((g)=> (
                            <GuidedAffirmations
                                key={g.title}
                                title={g.title}
                                previews={g.data}
                            />
                        ))}
                    </View>
                </ScrollView>
            </AppGradient>
        </View>
    )
}

export default Affirmations