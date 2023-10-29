import React from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../shared/BackButton";
import Logo from "../../shared/Logo";

//@ts-ignore
import { Collapse,CollapseHeader } from 'accordion-collapse-react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

interface CustomCollapseProps {
    title: string;
    route: string;
    name: string;
}

const CustomCollapse = ({ title, route, name }: CustomCollapseProps) => {

    const navigation = useNavigation();

    const navigateToClass = (route:string, name: string) => {
        //@ts-ignore
        navigation.navigate(route, name);
    }

    return (
        <Collapse style={{ width: "100%" }}>
            <CollapseHeader style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", paddingHorizontal: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#cecece", height: 50}}>
                <TouchableOpacity onPress={() => navigateToClass(route, name)}>
                    <View>
                        <Text>{title}</Text>
                    </View>
                </TouchableOpacity>
            </CollapseHeader>
        </Collapse>
    )
}

export default function CalendarioEscolar() {

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
                    Calendario Escolar
                </Text>
                <CustomCollapse route="CalendarioEscolarDetail" title="Ensino Médio" name="Ensino Médio"/>
                <CustomCollapse route="CalendarioEscolarDetail" title="Ensino Superior" name="Ensino Superior"/>
                <CustomCollapse route="CalendarioEscolarDetail" title="Concomitante" name="Concomitante"/>
                <CustomCollapse route="CalendarioEscolarDetail" title="Subsequente" name="Subsequente"/>
                <CustomCollapse route="CalendarioEscolarDetail" title="Formação Inicial e Continuada" name="Formação Inicial e Continuada"/>
                <CustomCollapse route="CalendarioEscolarDetail" title="Pós-graduação" name="Pós-graduação"/>
            </View>
        </SafeAreaView>
    )
}