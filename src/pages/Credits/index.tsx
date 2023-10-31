import React from "react";

import { SafeAreaView, ScrollView, StatusBar, Text, View,TouchableOpacity } from "react-native";
import BackButton from "../../shared/BackButton";
import Logo from "../../shared/Logo";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

export default function Credits() {

    const navigation = useNavigation();

    const handleNavigate = (link: string) => {
        //@ts-ignore
        navigation.navigate("EditalWeb", { link: link } );
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", flexDirection: "column", alignItems: "center", backgroundColor: "#FFF" }}>
                <View style={{ marginTop: -70 }}>
                    <Logo small/>
                </View>
                <ScrollView contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: 150 }} showsVerticalScrollIndicator={false}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: 172, height: 50, backgroundColor: "#EB6D27", marginBottom: 50 }}>
                        <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>
                            Créditos
                        </Text>
                    </View>
                    <Text style={{ marginBottom: 20, maxWidth: "90%", textAlign: "justify" }}>
                        Olá, este app foi desenvolvido por Jonatan Gabriel de Souza Santos
                    </Text>
                    <Text style={{ marginBottom: 20, maxWidth: "90%", textAlign: "justify" }}>
                        A principal tecnologia utilizada para o desenvolvimento foi o JavaScript juntamente com o React Native + Expo
                        <Ionicons name="logo-react" size={25}/>
                    </Text>
                    <Text style={{ marginBottom: 20, maxWidth: "90%", textAlign: "justify" }}>
                        Link do repositório no Github: 
                    </Text>
                    <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 20, marginBottom: 30 }}>
                        <TouchableOpacity onPress={() => handleNavigate("https://github.com/Jxnatan7/Connect")}>
                            <Ionicons name="logo-github" size={40}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginBottom: 20, maxWidth: "90%", textAlign: "justify" }}>
                        Link do meu site: 
                    </Text>
                    <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 20, marginBottom: 30 }}>
                        <TouchableOpacity onPress={() => handleNavigate("https://jxntalinks.netlify.app/")}>
                            <Ionicons name="code" size={40}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginBottom: 20, maxWidth: "90%", textAlign: "justify" }}>
                        Sinta-se em casa para explorar e aproveitar
                        ao máximo todas as informações de maneira
                        descomplicada.
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Conecte-se conosco!
                    </Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}