import React from "react";

import { SafeAreaView } from "react-native";
import BackButton from "../../../shared/BackButton";
import WebView from "react-native-webview";

// @ts-ignore
export default function EditalWeb({route}) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackButton/>
            <WebView style={{ width: "100%", height: "100%" }}  source={{ uri: route.params.link }}/>
        </SafeAreaView>
    )
}