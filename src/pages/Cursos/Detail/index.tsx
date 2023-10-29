import React from "react";

import { SafeAreaView, StatusBar, Text, View } from "react-native";
import BackButton from "../../../shared/BackButton";
import Logo from "../../../shared/Logo";

import Ionicons from '@expo/vector-icons/Ionicons';

//@ts-ignore
export default function DetailCursos({ route }) {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", flexDirection: "column", alignItems: "center", backgroundColor: "#FFF" }}>
                <View style={{ marginTop: -70 }}>
                    <Logo small/>
                </View>
                <Ionicons name="school-outline" size={70} color="#EB6D27"/>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#EB6D27", marginBottom: 30 }}>
                    { route.params }
                </Text>
                <View style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%", height: "100%" }}>
                    <View style={{ backgroundColor: "#3453", width: 350, height: 150, borderRadius: 20, display: "flex", justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 20, paddingVertical: 20, marginBottom: 20 }}>
                        <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Text style={{ marginBottom: 3 }}>
                                Coordenador
                            </Text>
                            <Text style={{ marginBottom: 3, fontWeight: "bold" }}>
                                Felipe Guedes Lisboa
                            </Text>
                            <Text style={{ marginBottom: 3 }}>
                                Nível de ensino
                            </Text>
                            <Text style={{ marginBottom: 3, fontWeight: "bold" }}>
                                Médio
                            </Text>
                            <Text style={{ marginBottom: 3 }}>
                                Natureza de participação
                            </Text>
                            <Text style={{ marginBottom: 3, fontWeight: "bold" }}>
                                Presencial
                            </Text>
                        </View>
                        <View>
                            <Text style={{ marginBottom: 3 }}>
                                Mobilidade
                            </Text>
                            <Text style={{ marginBottom: 3, fontWeight: "bold" }}>
                                Técnico integrado
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 60, marginTop: 30, display: "flex", alignItems: "flex-end", flexDirection: "column" }}>
                        <View style={{ width: "100%", paddingLeft: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#CECECE", marginBottom: 10 }}>
                            <Text style={{ fontWeight: "bold" }}>
                                Matriz 2018
                            </Text>
                            <Text>
                                Vigente de 28/01/2019 até 25/03/2023
                            </Text>
                        </View>
                        <View style={{ width: "100%", paddingLeft: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#CECECE" }}>
                            <Text style={{ fontWeight: "bold" }}>
                                Matriz 2023
                            </Text>
                            <Text>
                                Vigente de 26/03/2023 até atualmente
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}