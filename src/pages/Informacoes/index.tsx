import React, { useState } from "react";

import { SafeAreaView, ScrollView, StatusBar, View, Text, TouchableOpacity } from "react-native";
import BackButton from "../../shared/BackButton";
import Logo from "../../shared/Logo";

import Ionicons from '@expo/vector-icons/Ionicons';

import { useNavigation } from "@react-navigation/native";

//@ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

interface CustomCollapseProps {
    title: string;
    children?: React.ReactNode;
    active?: boolean;
}

const CustomCollapse = ({title, children, active}: CustomCollapseProps) => {

    return (
        <Collapse style={{ width: "100%" }}>
            <CollapseHeader style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", paddingHorizontal: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#cecece", height: 50}}>
                <View>
                    <Text style={{ fontWeight: active ? "bold" : "normal", fontSize: 17 }}>
                        {title}
                    </Text>
                </View>
            </CollapseHeader>
            <CollapseBody style={{ height: "auto%", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, borderBottomColor: "#cecece", borderBottomWidth: 1 }}>
                { children }
            </CollapseBody>
        </Collapse>
    )
}

export default function Informacoes() {

    const navigation = useNavigation();

    const handleNavigate = () => {
        //@ts-ignore
        navigation.navigate("Transporte");
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", flexDirection: "column", alignItems: "center", backgroundColor: "#FFF" }}>
                <View style={{ marginTop: -70 }}>
                    <Logo small/>
                </View>
                <Ionicons name="information-circle-outline" size={70} color="#EB6D27" style={{ marginBottom: 30 }}/>
                <ScrollView style={{ width: "100%", height: "100%", marginBottom: 150 }}>
                    <CustomCollapse title="Assistência Estudantil">
                        <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                                Em breve
                            </Text>
                            <Ionicons name="arrow-forward" size={17}/>
                        </TouchableOpacity>
                    </CustomCollapse>
                    <CustomCollapse title="Contatos">
                        <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                                Em breve
                            </Text>
                            <Ionicons name="arrow-forward" size={17}/>
                        </TouchableOpacity>
                    </CustomCollapse>
                    <CustomCollapse title="Dúvidas dos Estudantes">
                        <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                                Em breve
                            </Text>
                            <Ionicons name="arrow-forward" size={17}/>
                        </TouchableOpacity>
                    </CustomCollapse>
                    <CustomCollapse title="Estude no IFNMG">
                        <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                                Em breve
                            </Text>
                            <Ionicons name="arrow-forward" size={17}/>
                        </TouchableOpacity>
                    </CustomCollapse>
                    <CustomCollapse title="Redes sociais">
                        <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                                Em breve
                            </Text>
                            <Ionicons name="arrow-forward" size={17}/>
                        </TouchableOpacity>
                    </CustomCollapse>
                    <CustomCollapse title="Transportes" active>
                        <TouchableOpacity onPress={handleNavigate} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                                Matutino
                            </Text>
                            <Ionicons name="arrow-forward" size={17}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                            <Text style={{ fontSize: 13 }}>
                                Vespertino
                            </Text>
                            <Ionicons name="arrow-forward" size={17}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                            <Text style={{ fontSize: 13 }}>
                                Noturno
                            </Text>
                            <Ionicons name="arrow-forward" size={17}/>
                        </TouchableOpacity>
                    </CustomCollapse>
                    <CustomCollapse title="Setores">
                        <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                                Em breve
                            </Text>
                            <Ionicons name="arrow-forward" size={17}/>
                        </TouchableOpacity>
                    </CustomCollapse>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}