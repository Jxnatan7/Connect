import React from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../../shared/BackButton";
import Logo from "../../../shared/Logo";

import Ionicons from '@expo/vector-icons/Ionicons';

//@ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

import { useNavigation } from "@react-navigation/native";

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

//@ts-ignore
export default function Classes({ route }) {

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
                <Ionicons name="time-outline" size={70} color="#EB6D27"/>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#EB6D27", marginBottom: 30 }}>
                    { route.params }
                </Text>
                <CustomCollapse title="1° Ano">
                    <TouchableOpacity onPress={() => navigateToClass("QuadroDeHorariosClassesDetail", "Turma A")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            Turma A
                        </Text>
                        <Ionicons name="arrow-forward" size={17}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToClass("QuadroDeHorariosClassesDetail", "Turma B")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            Turma B
                        </Text>
                        <Ionicons name="arrow-forward" size={17}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToClass("QuadroDeHorariosClassesDetail", "Turma C")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                            Turma C
                        </Text>
                        <Ionicons name="arrow-forward" size={17}/>
                    </TouchableOpacity>
                </CustomCollapse>
                <CustomCollapse title="2° Ano">
                    <Text>
                        Em breve
                    </Text>
                </CustomCollapse>
                <CustomCollapse title="3° Ano">
                    <Text>
                        Em breve
                    </Text>
                </CustomCollapse>
            </View>
        </SafeAreaView>
    )
}