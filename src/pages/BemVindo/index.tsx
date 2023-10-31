import React, { useState } from 'react';

import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const NotificationCard = () => {

    const navigation = useNavigation();

    const handleNavigate = () => {
        //@ts-ignore
        navigation.navigate("Notifications");
    }

     return (
        <View style={{ width: 300, height: 250, backgroundColor: "#EB6D27", borderRadius: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 30, color: "#FFF", borderBottomWidth: 1, borderBottomColor: "#000", marginBottom: 20 }}>
                Notificações
            </Text>
            <View style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "center", marginBottom: 10 }}>
                <Ionicons name="mail" size={20}/>
                <Text style={{ fontSize: 15 }}>
                    Cardápio semanal atualizado
                </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "center", marginBottom: 10 }}>
                <Ionicons name="mail" size={20}/>
                <Text style={{ fontSize: 15 }}>
                    Cardápio semanal atualizado
                </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "center", marginBottom: 10 }}>
                <Ionicons name="mail" size={20}/>
                <Text style={{ fontSize: 15 }}>
                    Cardápio semanal atualizado
                </Text>
            </View>
            <TouchableOpacity onPress={handleNavigate} style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 20, color: "#FFF" }}>
                    Veja todas as notificações
                </Text>
            </TouchableOpacity>
        </View>
    );
}

interface ButtonProps {
    index: number;
    isActive: boolean;
    onPressFunction: (index: number) => void;
    setNotificationCardVisible: (visible: boolean) => void;
}

const Button = ({ index, isActive, onPressFunction, setNotificationCardVisible }: ButtonProps) => {

    const navigation = useNavigation();

    const handleNavigate = (route: string) => {
        //@ts-ignore
        navigation.navigate(route);
    }

    const routes = ["BemVindo", "Notifications", "Credits"];

    const icons = ["home", "notifications", "code"];

    return (        
        <TouchableOpacity onPress={() => [onPressFunction(index), index != 1 ? [handleNavigate(routes[index]), setNotificationCardVisible(false)] : setNotificationCardVisible(true)]}>
            {
                index == 1 ? (
                    // @ts-ignore
                    <View style={{ width: 50, height: 50, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ position: "absolute", width: 20, height:  20, backgroundColor: "#ffb731", right: 0, top: 0, borderRadius: 50 }}>
                            <Text style={{ fontSize: 15 }}>
                                10
                            </Text>
                        </View>
                        <Ionicons name={ `notifications${!isActive ? "-outline" : ""}` } size={30}/>
                    </View>
                ) : (
                    // @ts-ignore
                    <Ionicons name={ `${icons[index]}${!isActive ? "-outline" : ""}` } size={30}/>
                )
            }
        </TouchableOpacity>
    )
}

interface ButtomTabProps {
    setNotificationCardVisible: (visible: boolean) => void;
}

const ButtomTab = ({ setNotificationCardVisible }: ButtomTabProps) => {

    const [buttonStates, setButtonStates] = useState([true, false, false]);

    const handleButtonPress = (index: number) => {
        const newButtonStates = buttonStates.map((_, i) => i === index);
        setButtonStates(newButtonStates);
    };

    return (
        <View style={{ width: "100%", height: 60, backgroundColor: "#F2F2F2", display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", gap: 60 }}>
            {
                buttonStates.map((isActive, index) => (
                    <Button index={index} isActive={isActive} onPressFunction={handleButtonPress} setNotificationCardVisible={setNotificationCardVisible}/>
                ))
            }
        </View>
    );
}

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

    const [notificationCardVisible, setNotificationCardVisible] = useState(false);

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
                {
                    notificationCardVisible && (
                        <NotificationCard/>
                    )
                }
                <ButtomTab setNotificationCardVisible={setNotificationCardVisible}/>
            </View>
        </SafeAreaView>
    )
}