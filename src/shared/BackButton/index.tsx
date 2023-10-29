import React from "react";

import { TouchableOpacity } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import { CommonActions, useNavigation } from "@react-navigation/native";

export default function BackButton() {

    const navigation = useNavigation();

    const handleGoBack = () => navigation.dispatch(CommonActions.goBack());

    return (
        <TouchableOpacity onPress={handleGoBack} style={{ paddingLeft: 20, paddingTop: 20, backgroundColor: "#FFF" }}>
            <Ionicons name="md-arrow-back" size={30} color="#000"/>
        </TouchableOpacity>
    );
}