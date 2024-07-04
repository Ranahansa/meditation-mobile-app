import { Image, StyleSheet, Platform, View, Text } from 'react-native';


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>
                Welcome to the meditation app!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
