import React from 'react';

import { SafeAreaView, Text, StatusBar, View, ScrollView } from "react-native";
import BackButton from '../../shared/BackButton';
import Logo from '../../shared/Logo';

import Ionicons from '@expo/vector-icons/Ionicons';

//@ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

interface CustomCollapseProps {
    title: string;
    children: React.ReactNode;
}

const CustomCollapse = ({title, children}: CustomCollapseProps) => {

    return (
        <Collapse style={{ width: "100%" }}>
            <CollapseHeader style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", paddingHorizontal: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#cecece", height: 50}}>
                <View>
                    <Text>{title}</Text>
                </View>
            </CollapseHeader>
            <CollapseBody style={{ height: "auto", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, borderBottomColor: "#cecece", borderBottomWidth: 1 }}>
                { children }
            </CollapseBody>
        </Collapse>
    )
}

export default function Cardapio() {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", flexDirection: "column", alignItems: "center", backgroundColor: "#FFF" }}>
                <View style={{ marginTop: -70 }}>
                    <Logo small/>
                </View>
                <Ionicons name="fast-food-outline" size={70} color="#EB6D27" style={{ marginBottom: 30 }}/>
                <ScrollView style={{ width: "100%", height: "100%", marginBottom: 150 }}>
                    <CustomCollapse title="Segunda-feira">
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 350, height: 320, backgroundColor: "#ba7a58", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 10 }}>
                                <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                                    Arroz
                                </Text>
                                <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                                    Feijão Tropeiro
                                </Text>
                                <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                                    Macarrão
                                </Text>
                                <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                                    Purê de Batata
                                </Text>
                                <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                                    Carne Bovina
                                </Text>
                                <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                                    Alface
                                </Text>
                                <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                                    Suco de Laranja
                                </Text>
                                <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                                    Banana
                                </Text>
                                <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                                    Doce de Leite
                                </Text>
                            </View>
                        </View>
                    </CustomCollapse>
                    <CustomCollapse title="Terça-feira">
                        <Text>
                            Em breve
                        </Text>
                    </CustomCollapse>
                    <CustomCollapse title="Quarta-feira">
                        <Text>
                            Em breve
                        </Text>
                    </CustomCollapse>
                    <CustomCollapse title="Quinta-feira">
                        <Text>
                            Em breve
                        </Text>
                    </CustomCollapse>
                    <CustomCollapse title="Sexta-feira">
                        <Text>
                            Em breve
                        </Text>
                    </CustomCollapse>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}