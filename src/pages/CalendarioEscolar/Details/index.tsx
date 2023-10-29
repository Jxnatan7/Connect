import React, { useState } from "react";

import { SafeAreaView, StatusBar, Text, View, ScrollView } from "react-native";
import BackButton from "../../../shared/BackButton";
import Logo from "../../../shared/Logo";
import { Calendar } from "react-native-calendars";

import Ionicons from '@expo/vector-icons/Ionicons';

//@ts-ignore
export default function CalendarioEscolarDetail({ route }) {

    const monthData = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];
    
    const mesAtual = new Date().getMonth();

    const [mesSelecionado, setMesSelecionado] = useState(mesAtual);

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", flexDirection: "column", alignItems: "center", backgroundColor: "#FFF" }}>
                <View style={{ marginTop: -70 }}>
                    <Logo small/>
                </View>
                <Ionicons name="calendar-outline" size={70} color="#EB6D27"/>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#EB6D27", marginBottom: 30 }}>
                    {route.params}
                </Text>
                <ScrollView style={{ width: "100%" }} contentContainerStyle={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingHorizontal: 15, paddingBottom: 150 }}>
                    <Calendar style={{ borderRadius: 20, backgroundColor: "#f2f2f2", width: "80%" }} onMonthChange={(month) => setMesSelecionado(month.month - 1)}/>
                    <View style={{ width: "100%", marginTop: 30, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <View style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "#CECECE" }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                                { monthData[mesSelecionado] }, 2023
                            </Text>
                        </View>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 10, marginTop: 20 }}>
                            <Text>
                                01
                            </Text>
                            <Text>
                                Aula inaugural
                            </Text>
                        </View>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 10, marginTop: 20 }}>
                            <Text>
                                06
                            </Text>
                            <Text>
                                Sábado letivo
                            </Text>
                        </View>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 10, marginTop: 20 }}>
                            <Text>
                                16
                            </Text>
                            <Text>
                                Feriado regional
                            </Text>
                        </View>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 10, marginTop: 20 }}>
                            <Text>
                                28
                            </Text>
                            <Text>
                                Recesso Escolar
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}