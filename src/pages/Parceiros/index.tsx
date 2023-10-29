import React from 'react';

import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import Logo from '../../shared/Logo';
import BackButton from '../../shared/BackButton';

interface ActionButtonsProps {
    imagePath: string;
    text: string;
    route?: string;
    active?: boolean;
}

const ActionButtons = ({ imagePath, text, route, active }: ActionButtonsProps) => {

    const navigation = useNavigation();

    const handleNavigate = () => {
        //@ts-ignore
        navigation.navigate(route);
    }

    return (
        <TouchableOpacity onPress={() => active ? handleNavigate() : null}>
            <View style={{ width: 100, height: 100, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderColor: "#cecece", borderWidth: 1, backgroundColor: "#FFF", borderRadius: 10 }}>
                {/* @ts-ignore */}
                <Image style={{width: 50, height: 50, maxWidth: 50, maxHeight: 50}} source={imagePath}/>                
                <Text style={{ fontSize: 13, fontWeight: "bold", textAlign: "center", color: "#EB6D27", marginTop: 2}}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default function Parceiros() {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", backgroundColor: "#FFF" }}>
                <View style={{ marginTop: -70 }}>
                    <Logo small/>
                </View>
                <ScrollView style={{ width: "100%" }}>
                    <View style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 30}}>
                            <ActionButtons imagePath={require("../../../assets/cravoECanela.jpg")} text="Cravo e Canela" route="CravoECanela" active/>
                            <ActionButtons imagePath={require("../../../assets/prefeituraDeJanuaria.jpg")} text="Prefeitura"/>
                        </View>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 30}}>
                            <ActionButtons imagePath={require("../../../assets/Supergasbras.png")} text="Supergasbras"/>
                            <ActionButtons imagePath={require("../../../assets/cdl.jpg")} text="CDL"/>
                        </View>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 30}}>
                            <ActionButtons imagePath={require("../../../assets/aikaSports.jpg")} text="Academia"/>
                            <ActionButtons imagePath={require("../../../assets/IFNMG.png")} text="IFNMG"/>
                        </View>
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <ActionButtons imagePath={require("../../../assets/superene.png")} text="Superene"/>
                            <ActionButtons imagePath={require("../../../assets/CocaCola.png")} text="Coca-Cola"/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}