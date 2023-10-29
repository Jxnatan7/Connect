import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import BackButton from "../../../shared/BackButton";
import Logo from "../../../shared/Logo";

import Ionicons from '@expo/vector-icons/Ionicons';

//@ts-ignore
export default function DetailClasses({ route }) {

    const nomesDosMeses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
      
    const nomesDosDiasDaSemana = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
        'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];

    const [selected, setSelected] = useState('');

    const date = new Date();

    const today = date.getDate();
    const month = date.getMonth() + 1;
    const week = date.getDay();
    const year = date.getFullYear();

    const formattedDate = `${year}-${month}-${today}`;

    const mesAtual = nomesDosMeses[month];
    const semanaAtual = nomesDosDiasDaSemana[week];

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
                <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%", marginBottom: 150 }} contentContainerStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Calendar
                        style={{ borderRadius: 20, backgroundColor: "#f2f2f2", width: "90%" }}
                        onDayPress={day => {
                            setSelected(day.dateString);
                        }}
                        markedDates={{
                            [selected !== '' ? selected : formattedDate]: {selected: true, disableTouchEvent: true, selectedColor: 'orange'},
                        }}
                    />
                    <View style={{ marginTop: 20, justifyContent: 'flex-start', width: "100%", paddingHorizontal: 20, borderBottomColor: "#cecece", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 17, paddingBottom: 5 }}>
                            {
                                `${semanaAtual}, ${today} de ${mesAtual}`
                            }
                        </Text>
                    </View>
                    <View style={{ width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                            07:30
                        </Text>
                        <View>
                            <Text>
                                Matemática - Egidio Martins
                            </Text>
                            <Text>
                                Sala 7 - Prédio novo
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                            09:25
                        </Text>
                        <View>
                            <Text>
                                Geografia - Cristiane Rodrigues
                            </Text>
                            <Text>
                                Sala 13 - Prédio novo
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}