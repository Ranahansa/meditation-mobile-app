import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { GuidedAffirmationsProps } from '@/constants/custom-models'
import { Link } from 'expo-router'

const GuidedAffirmations = ({ title, previews }: GuidedAffirmationsProps) => {
    return (
        <View className='my-5'>
            <View className='mb-2'>
                <Text className='text-xl font-bold text-white'>
                    {title}
                </Text>
            </View>
            <FlatList
                data={previews}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Link href={`/affirmations/${item.id}`} asChild>
                        <Pressable>
                            <View className='w-40 h-40 mr-4 rounded-lg'>
                                <Image
                                    source={item.image}
                                    resizeMode='cover'
                                    className='w-full h-full rounded-2xl'
                                />
                            </View>
                        </Pressable>
                    </Link>
                )}
            />
        </View>
    )
}

export default GuidedAffirmations