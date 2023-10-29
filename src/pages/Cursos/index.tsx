import React from "react";

import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../shared/BackButton";
import Logo from "../../shared/Logo";

import Ionicons from '@expo/vector-icons/Ionicons';

//@ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

import { useNavigation } from "@react-navigation/native";

interface CustomCollapseProps {
    title: string;
    children: React.ReactNode;
    courses: Number;
}

const CustomCollapse = ({title, children, courses}: CustomCollapseProps) => {

    return (
        <Collapse style={{ width: "100%" }}>
            <CollapseHeader style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", paddingHorizontal: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#cecece", height: 50}}>
                <View>
                    <Text style={{ marginBottom: 5 }}>{title}</Text>
                    <Text style={{ fontSize: 10 }}>{`${courses}`} cursos</Text>
                </View>
            </CollapseHeader>
            <CollapseBody style={{ height: "auto", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, borderBottomColor: "#cecece", borderBottomWidth: 1 }}>
                { children }
            </CollapseBody>
        </Collapse>
    )
}

export default function Cursos() {

    const navigation = useNavigation();

    const navigateToClass = (route:string, name: string) => {
        //@ts-ignore
        navigation.navigate(route, name);
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", flexDirection: "column", alignItems: "center", backgroundColor: "#FFF" }}>
                <View style={{ marginTop: -70 }}>
                    <Logo small/>
                </View>
                <Ionicons name="school-outline" size={70} color="#EB6D27" style={{ marginBottom: 30 }}/>
                <ScrollView style={{ width: "100%", height: "100%", marginBottom: 150 }}>
                    <CustomCollapse courses={3} title="Técnico Integrado">
                        <TouchableOpacity onPress={() => navigateToClass("CursosDetail", "Técnico em Agropecuária")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                                Técnico em Agropecuária
                            </Text>
                            <Ionicons name="arrow-forward" size={17}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigateToClass("CursosDetail", "Técnico em Informática")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                                Técnico em Informática
                            </Text>
                            <Ionicons name="arrow-forward" size={17}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigateToClass("CursosDetail", "Técnico em  Meio Ambiente")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                                Técnico em  Meio Ambiente
                            </Text>
                            <Ionicons name="arrow-forward" size={17}/>
                        </TouchableOpacity>
                    </CustomCollapse>
                    <CustomCollapse courses={2} title="Técnico Concomitante">
                        <Text>
                            Em breve
                        </Text>
                    </CustomCollapse>
                    <CustomCollapse courses={2} title="Técnico Subsequente">
                        <Text>
                            Em breve
                        </Text>
                    </CustomCollapse>
                    <CustomCollapse courses={5} title="Bacharelado">
                        <Text>
                            Em breve
                        </Text>
                    </CustomCollapse>
                    <CustomCollapse courses={4} title="Licenciatura">
                        <Text>
                            Em breve
                        </Text>
                    </CustomCollapse>
                    <CustomCollapse courses={2} title="FIC">
                        <Text>
                            Em breve
                        </Text>
                    </CustomCollapse>
                    <CustomCollapse courses={1} title="Especialização">
                        <Text>
                            Em breve
                        </Text>
                    </CustomCollapse>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}