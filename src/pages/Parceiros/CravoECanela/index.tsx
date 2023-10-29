import React from "react"
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native"
import Logo from "../../../shared/Logo"
import BackButton from "../../../shared/BackButton"

export default function CravoECanela() {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", backgroundColor: "#FFF" }}>
                <View style={{ marginTop: -70 }}>
                    <Logo small/>
                </View>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#EB6D27", marginBottom: 30 }}>
                    Cravo e Canela
                </Text>
                <ScrollView style={{ width: "100%" }} contentContainerStyle={{ paddingBottom: 150 }}>
                    <View style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "90%", gap: 10 }}>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", gap: 10 }}>
                                <Image source={require("../../../../assets/cravo1.jpg")} style={{ maxWidth: 150, width: 150, height: 150, maxHeight: 150}}/>
                                <Image source={require("../../../../assets/cravo2.jpg")}style={{ maxWidth: 150, width: 150, height: 150, maxHeight: 150}}/>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", gap: 10 }}>
                                <Image source={require("../../../../assets/cravo3.jpg")} style={{ maxWidth: 150, width: 150, height: 150, maxHeight: 150}}/>
                                <Image source={require("../../../../assets/cravo4.jpg")}style={{ maxWidth: 150, width: 150, height: 150, maxHeight: 150}}/>
                            </View>
                        </View>
                        <View style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", paddingHorizontal: 20, marginTop: 30 }}>
                            <View style={{ width: "100%", height: 40, display: "flex", flexDirection: "row", marginBottom: 20 }}>
                                <Text style={{ fontSize: 15 }}>
                                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                                        Endereço:
                                    </Text>
                                    Av. Mal. Deodoro da Fonseca, 69 - Centro,
                                    Januária - MG, 39480-000
                                </Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom:  20 }}>
                                <Text style={{ fontWeight: "bold" }}>
                                    Telefone:
                                    <Text style={{ fontWeight: "normal" }}>
                                        (38) 99181-0115
                                    </Text>
                                </Text>
                                <Text style={{ fontWeight: "bold" }}>
                                    @cravoecanelajanu
                                </Text>
                            </View>
                            <View style={{ width: "100%", height: 100 }}>
                                <Text style={{ fontWeight: "bold" }}>
                                    Horário de funcionamento:
                                </Text>
                                <Text>
                                    segunda a sexta-feira: 09:00-18:30 {'\n'}
                                    sábado: 09:00-13:00 {'\n'}
                                    domingo: fechado {'\n'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}