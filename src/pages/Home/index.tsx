import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import Logo from '../../shared/Logo';

export default function Home() {

    const navigation = useNavigation();

    //@ts-ignore
    const handleNavigateToLogin = () => navigation.navigate("Login");
    //@ts-ignore
    const handleNavigateToSobre = () => navigation.navigate("Sobre");

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.container}>
                <Logo />
                <View style={styles.actions}>
                    <TouchableOpacity onPress={handleNavigateToSobre} style={styles.button}>
                        <Text style={styles.buttonText}>
                            Quem somos?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNavigateToLogin} style={styles.button}>
                        <Text style={styles.buttonText}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF"
    },
    logo: {
        width: 200,
        height: 200
    },
    actions: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30
    },
    buttonText: {
        color: "#000",
        fontWeight: "bold",
    }
});