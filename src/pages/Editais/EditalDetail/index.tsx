import React from "react";

import { SafeAreaView, StatusBar, View, Text, ScrollView } from "react-native";
import BackButton from "../../../shared/BackButton";
import Logo from "../../../shared/Logo";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function EditalDetail() {

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", flexDirection: "column", alignItems: "center", backgroundColor: "#FFF" }}>
                <View style={{ marginTop: -70 }}>
                    <Logo small/>
                </View>
                <Ionicons name="folder-open-outline" size={70} color="#EB6D27"/>
                <View style={{ width: "100%", height: 90, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 20, paddingHorizontal: 10, backgroundColor: "#CECECE" }}>
                    <Text>
                        Edital n° 237/2023 - Seleção simplificada de bolsista
                        para o encargo de apoio administrativo para atuar no
                        projeto de extensão "FORMAÇÃO CONTINUADA EM
                        AGROPECUÁRIA NAS ESCOLAS FAMÍLIA AGRíCOLA"
                    </Text>
                </View>
                <ScrollView style={{ width: "100%" }} contentContainerStyle={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingHorizontal: 15, paddingBottom: 150 }}>
                    <View style={{ width: "100%", height: 50, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 10 }}>
                        <Text>
                            Homologação do resultado final
                        </Text>
                        <Text>
                            16/06/2023
                        </Text>
                    </View>
                    <View style={{ width: "100%", height: 50, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 10 }}>
                        <Text>
                            Resultado final
                        </Text>
                        <Text>
                            15/06/2023
                        </Text>
                    </View>
                    <View style={{ width: "100%", height: 50, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 10 }}>
                        <Text>
                            Resultado preliminar
                        </Text>
                        <Text>
                            07/06/2023
                        </Text>
                    </View>
                    <View style={{ width: "100%", height: 50, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 10 }}>
                        <Text>
                            Anexo ||
                        </Text>
                        <Text>
                            30/05/2023
                        </Text>
                    </View>
                    <View style={{ width: "100%", height: 50, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 10 }}>
                        <Text>
                            Edital nº 247/2023 - Retificação
                        </Text>
                        <Text>
                            30/05/2023
                        </Text>
                    </View>
                    <View style={{ width: "100%", height: 50, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 10 }}>
                        <Text>
                            Edital nº 237/2023
                        </Text>
                        <Text>
                            25/05/2023
                        </Text>
                    </View>
                    <View style={{ width: "100%", height: 50, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 10 }}>
                        <Text>
                            Anexos
                        </Text>
                        <Text>
                            25/05/2023
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}