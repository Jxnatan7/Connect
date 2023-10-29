import React from 'react';

import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Logo from "../../shared/Logo";
import BackButton from "../../shared/BackButton";

export default function Sobre() {
    return (
        <SafeAreaView>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#FFF" }}>
                <Logo/>
                <ScrollView contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: 150 }} showsVerticalScrollIndicator={false}>
                    <View style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 172, height: 30, backgroundColor: "#EB6D27", marginBottom: 50 }}>
                        <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                            Seja Bem-vindo!
                        </Text>
                    </View>
                    <Text style={{ marginBottom: 20, maxWidth: 227, textAlign: "justify" }}>
                        Olá, somos o Connect, sua fonte completa de
                        informações.
                    </Text>
                    <Text style={{ marginBottom: 20, maxWidth: 227, textAlign: "justify" }}>
                        Aqui você encontrará tudo que precisa,
                        desde editais importantes até os horários de
                        aulas.
                    </Text>
                    <Text style={{ marginBottom: 20, maxWidth: 227, textAlign: "justify" }}>
                        Esteja sempre atualizado com as últimas
                        notícias e recursos essenciais para facilitar o
                        seu dia a dia.
                    </Text>
                    <Text style={{ marginBottom: 20, maxWidth: 227, textAlign: "justify" }}>
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