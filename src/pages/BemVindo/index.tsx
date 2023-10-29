import React from 'react';

import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

interface ActionButtonsProps {
    iconName?: string;
    imagePath?: string;
    text: string;
    route: string;
}

const ActionButtons = ({ iconName, imagePath, text, route }: ActionButtonsProps) => {

    const navigation = useNavigation();

    const handleNavigate = () => {
        //@ts-ignore
        navigation.navigate(route);
    }

    return (
        <TouchableOpacity onPress={handleNavigate}>
            <View style={{ width: 100, height: 100, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderColor: "#cecece", borderWidth: 1, backgroundColor: "#FFF", borderRadius: 10 }}>
                
                {
                    typeof iconName !== "undefined" ? (
                        // @ts-ignore
                        <Ionicons name={iconName} size={40}/>
                    ) : (
                        // @ts-ignore
                        <Image style={{width: 50, height: 50}} source={imagePath}/>
                    )
                }
                
                <Text style={{ fontSize: 13, fontWeight: "bold", textAlign: "center", color: "#EB6D27", marginTop: 2}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function BemVindo() {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <View style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", backgroundColor: "#FFF" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 25, marginBottom: 50 }}>
                    Seja Bem-Vindo!
                </Text>
                <ScrollView style={{ width: "100%" }}>
                    <View style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 30}}>
                            <ActionButtons iconName="time-outline" text="Quadro de horários" route="QuadroDeHorarios"/>
                            <ActionButtons iconName="calendar-outline" text="Calendário escolar" route="CalendarioEscolar"/>
                        </View>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 30}}>
                            <ActionButtons imagePath={require("../../../assets/cajui-logo.png")} text="Cajuí" route="Cajui"/>
                            <ActionButtons iconName="fast-food-outline" text="Cardápio" route="Cardapio"/>
                        </View>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 30}}>
                            <ActionButtons iconName="school-outline" text="Cursos" route="Cursos"/>
                            <ActionButtons iconName="folder-open-outline" text="Editais" route="Editais"/>
                        </View>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <ActionButtons iconName="information-circle-outline" text="Informações" route="Informacoes"/>
                            <ActionButtons iconName="at-outline" text="Parceiros" route="Parceiros"/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}