import React from "react";

import { SafeAreaView, StatusBar, View, Text, ScrollView, TouchableOpacity } from "react-native";
import BackButton from "../../shared/BackButton";
import Logo from "../../shared/Logo";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Notifications() {

    const [press, setPress] = React.useState(true);

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", flexDirection: "column", alignItems: "center", backgroundColor: "#FFF" }}>
                <View style={{ marginTop: -70 }}>
                    <Logo small/>
                </View>
                <Ionicons name="notifications" size={70} color="#EB6D27"/>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#EB6D27", marginBottom: 30 }}>
                    Notificações
                </Text>
                <ScrollView style={{ width: "100%", height: "100%", paddingTop: 20 }}>
                    <View style={{ marginBottom: 20, width: "100%", display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "flex-start", gap: 20, height: 50 }}>
                        <TouchableOpacity onPress={() => setPress(!press)} style={{ width: 35, height: 35, borderWidth: 1, borderColor: "#000", backgroundColor: "#FFF", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            { press ? <Ionicons name="checkmark" size={30}/> : null}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15 }}>
                            Cardápio semanal atualizado
                        </Text>
                    </View>
                    <View style={{ marginBottom: 20, width: "100%", display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "flex-start", gap: 20, height: 50 }}>
                        <TouchableOpacity onPress={() => setPress(!press)} style={{ width: 35, height: 35, borderWidth: 1, borderColor: "#000", backgroundColor: "#FFF", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            { press ? <Ionicons name="checkmark" size={30}/> : null}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15 }}>
                            1 novo edital de extensão
                        </Text>
                    </View>
                    <View style={{ marginBottom: 20, width: "100%", display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "flex-start", gap: 20, height: 50 }}>
                        <TouchableOpacity onPress={() => setPress(!press)} style={{ width: 35, height: 35, borderWidth: 1, borderColor: "#000", backgroundColor: "#FFF", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            { press ? <Ionicons name="checkmark" size={30}/> : null}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15 }}>
                            Édson Neves publicou um novo horário
                        </Text>
                    </View>
                    <View style={{ marginBottom: 20, width: "100%", display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "flex-start", gap: 20, height: 50 }}>
                        <TouchableOpacity onPress={() => setPress(!press)} style={{ width: 35, height: 35, borderWidth: 1, borderColor: "#000", backgroundColor: "#FFF", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            { press ? <Ionicons name="checkmark" size={30}/> : null}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15 }}>
                            Nova atualização dos horários do ônibus
                        </Text>
                    </View>
                    <View style={{ marginBottom: 20, width: "100%", display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "flex-start", gap: 20, height: 50 }}>
                        <TouchableOpacity onPress={() => setPress(!press)} style={{ width: 35, height: 35, borderWidth: 1, borderColor: "#000", backgroundColor: "#FFF", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            { press ? <Ionicons name="checkmark" size={30}/> : null}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15 }}>
                            Programação especial Dia do Estudante
                        </Text>
                    </View>
                    <View style={{ marginBottom: 20, width: "100%", display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "flex-start", gap: 20, height: 50 }}>
                        <TouchableOpacity onPress={() => setPress(!press)} style={{ width: 35, height: 35, borderWidth: 1, borderColor: "#000", backgroundColor: "#FFF", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            { press ? <Ionicons name="checkmark" size={30}/> : null}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15 }}>
                            Datas e horários para consulta psicológica no mês de Agosto
                        </Text>
                    </View>
                    <View style={{ marginBottom: 20, width: "100%", display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "flex-start", gap: 20, height: 50 }}>
                        <TouchableOpacity onPress={() => setPress(!press)} style={{ width: 35, height: 35, borderWidth: 1, borderColor: "#000", backgroundColor: "#FFF", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            { press ? <Ionicons name="checkmark" size={30}/> : null}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15 }}>
                            1 novo edital da Assistência Estudantil
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}