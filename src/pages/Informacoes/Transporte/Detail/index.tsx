import React from "react"

import { SafeAreaView, StatusBar, View, ScrollView, Text } from "react-native";
import BackButton from "../../../../shared/BackButton";
import Logo from "../../../../shared/Logo";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function TransporteDetail() {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", flexDirection: "column", alignItems: "center", backgroundColor: "#FFF" }}>
                <View style={{ marginTop: -70 }}>
                    <Logo small/>
                </View>
                <Ionicons name="information-circle-outline" size={70} color="#EB6D27" style={{ marginBottom: 30 }}/>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#EB6D27", marginBottom: 30 }}>
                    Matutino rota 1
                </Text>
                <ScrollView style={{ width: "100%", height: "100%", marginBottom: 150 }}>
                    <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F2F2F2", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE" }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                                IDA
                            </Text>
                        </View>
                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F2F2F2", width: "50%", height: 50, borderLeftWidth: 0.5, borderLeftColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE" }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                                VOLTA
                            </Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                Cerâmica
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                6:45
                            </Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                IFNMG
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                17:10
                            </Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                Prefeitura
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                6:50
                            </Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                Copasinha
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                17:15
                            </Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                Caribé
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                6:55
                            </Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                Rodoviária
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                17:20
                            </Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                Eletrozema 7:00
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                7:00
                            </Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                Eletrozema
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                17:25
                            </Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                Rodoviária
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                7:10
                            </Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                Caribé
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                17:30
                            </Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                Copasinha
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                7:15
                            </Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                Prefeitura
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                17:35
                            </Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                IFNMG
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                7:20
                            </Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", width: "50%", height: 50, borderRightWidth: 0.5, borderRightColor: "#CECECE", borderBottomWidth: 1, borderBottomColor: "#CECECE", paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                Cerâmica
                            </Text>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                                17:40
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}