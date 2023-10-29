import * as React from "react";

import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, StatusBar, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Logo from "../../shared/Logo";
import BackButton from "../../shared/BackButton";

export default function Login() {

    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigation = useNavigation();

    const handleLogin = () => {
        if (
            name.trim() === "" &&
            password.trim() === ""
        ) {
            Alert.alert("Preencha todos os campos!");
        } else {
            //@ts-ignore
            navigation.navigate("BemVindo");
        }
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={styles.container}>
                <Logo/>
                <KeyboardAvoidingView style={styles.actions} behavior="height" keyboardVerticalOffset={70}>
                    <View style={styles.actions}>
                        <View style={styles.inputContainer}>
                            <TextInput keyboardType="numeric" style={styles.input} placeholder="Usuário (Mátricula)" value={name} onChangeText={(text) => setName(text)}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput keyboardType="numeric" style={styles.input} placeholder="Senha" value={password} onChangeText={(text) => setPassword(text)}/>
                            <Text style={{ color: "#959595", marginTop: 10, marginBottom: 20, fontSize: 13, alignSelf: "flex-end"}}>
                                Esqueceu a sua senha?
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                                <Text style={styles.buttonText}>
                                    CONECTAR
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: "#EB6D27" }}>
                            Primeiro acesso?
                        </Text>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        marginBottom: 20,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 70
    },
    input: {
        width: 240,
        borderWidth: 1,
        borderColor: "#000",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20
    },
    button: {
        width: 240,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#EB6D27",
        borderRadius: 20
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold"
    }
});