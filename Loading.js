import React from 'react';
import {View, Text, StyleSheet, StatusBar} from "react-native";

const Loading = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text style={styles.text}>Получение погоды...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2C2C2C",
        fontSize: 30
    }
})

export default Loading;