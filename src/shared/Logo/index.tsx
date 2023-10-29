import React from "react";

import { Image } from "react-native";

interface LogoProps {
    small?: boolean;
}

export default function Logo({ small }: LogoProps) {
    return (
        <Image style={small ? {width: 120, height: 120} : {width: 200, height: 200}} source={require("../../../assets/ConnectLogo.png")}/>
    )
}