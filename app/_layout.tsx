import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import TimerProvider from '@/context/TimerContext'

const RootLayout = () => {
    return (
            <TimerProvider>
                <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
                <Stack.Screen name="(modal)/adjust-meditation" options={{ headerShown: false, presentation: "modal" }} />
            </Stack>
            </TimerProvider>
    )
}

export default RootLayout