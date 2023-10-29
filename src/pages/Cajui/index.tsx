import React from "react";

import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";
import BackButton from "../../shared/BackButton";

export default function Cajui() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackButton/>
            <WebView style={{ width: "100%", height: "100%" }}  source={{ uri: "https://cajui.ifnmg.edu.br/cajui/login" }}/>
        </SafeAreaView>
    )
}