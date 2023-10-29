import React from "react";
import { useEffect, useState } from "react";

import { SafeAreaView, StatusBar, Text, View, TouchableOpacity, ScrollView, LayoutAnimation, UIManager, Platform } from "react-native";
import BackButton from "../../shared/BackButton";
import Logo from "../../shared/Logo";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const CONTENT = [
    {
        isExpanded: false,
        name: "Ensino Médio",
        subcategory: [
            {
                id: 1,
                val: "Agropecuária",
                route: "QuadroDeHorariosClasses",
            },
            {
                id: 2,
                val: "Informática",
                route: "QuadroDeHorariosClasses",
            },
            {
                id: 3,
                val: "Meio Ambiente",
                route: "QuadroDeHorariosClasses",
            }
        ]
    },
    {
        isExpanded: false,
        name: "Ensino Superior",
        subcategory: [{ id: 1, val: "Em breve", route: "QuadroDeHorarios"}]
    },
    {
        isExpanded: false,
        name: "Concomitante",
        subcategory: [{ id: 1, val: "Em breve", route: "QuadroDeHorarios"}]
    },
    {
        isExpanded: false,
        name: "Subsequente",
        subcategory: [{ id: 1, val: "Em breve", route: "QuadroDeHorarios"}]
    },
    {
        isExpanded: false,
        name: "Formação Inicial e Continuada",
        subcategory: [{ id: 1, val: "Em breve", route: "QuadroDeHorarios"}]
    },
    {
        isExpanded: false,
        name: "Pós-graduação",
        subcategory: [{ id: 1, val: "Em breve", route: "QuadroDeHorarios"}]
    }
]

interface EducationProps {
    item: any;
    onClickFunction: () => void;
}

const Education = ({ item, onClickFunction }: EducationProps) => {

    const [layoutHeight, setLayoutHeight] = useState<any>(0);

    useEffect(() => {
        if (item.isExpanded) {
          setLayoutHeight(null);
        } else {
          setLayoutHeight(0);
        }
      }, [item.isExpanded]);

      const navigation = useNavigation();

      const navigateToClass = (route:string, name: string) => {
        // @ts-ignore
        navigation.navigate(route, name);
      }

    return (
        <>
            <TouchableOpacity onPress={onClickFunction}>
                <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", paddingHorizontal: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#cecece", height: 50}}>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", paddingHorizontal: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#cecece", height: 50}}>
                        <Text style={{ fontSize: 17 }}>
                            { item.name }
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            {
                layoutHeight === null && (
                    <View style={{ height: layoutHeight, paddingHorizontal: 10, paddingTop: 10, borderBottomColor: "#cecece", borderBottomWidth: 1 }}>
                        {/*  @ts-ignore */}
                        {item.subcategory.map((item, key) => (
                            <View key={key} style={{ marginBottom: 10 }}>
                                <TouchableOpacity onPress={() => navigateToClass(item.route, item.val)} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                                        {item.val}
                                    </Text>
                                    <Ionicons name="arrow-forward" size={17}/>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                )
            }
        </>
    )
}

export default function QuadroDeHorarios() {

    const [listDataSource, setListDataSource] = useState(CONTENT);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout = (index: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        
        array.map((value, placeindex) =>
            placeindex === index
            ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
            : (array[placeindex]['isExpanded'] = false)
        );
        setListDataSource(array);
    };

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
                    Quadro de Horários
                </Text>

                <ScrollView style={{ width: "100%", height: "100%", paddingTop: 20 }}>
                    {listDataSource.map((item, key) => (
                        <Education
                        key={item.name}
                        onClickFunction={() => {
                            updateLayout(key);
                        }}
                        item={item}
                        />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}