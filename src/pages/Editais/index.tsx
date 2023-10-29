import React, { useState } from "react";

import { SafeAreaView, ScrollView, StatusBar, View, Text, TouchableOpacity } from "react-native";
import BackButton from "../../shared/BackButton";
import Logo from "../../shared/Logo";

import Ionicons from '@expo/vector-icons/Ionicons';

import { useNavigation } from "@react-navigation/native";

//@ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

interface CustomCollapseProps {
    title: string;
    children?: React.ReactNode;
}

const CustomCollapse = ({title, children}: CustomCollapseProps) => {

    return (
        <Collapse style={{ width: "100%" }}>
            <CollapseHeader style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", paddingHorizontal: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#cecece", height: 50}}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                        {title}
                    </Text>
                </View>
            </CollapseHeader>
            <CollapseBody style={{ height: "auto%", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, borderBottomColor: "#cecece", borderBottomWidth: 1 }}>
                { children }
            </CollapseBody>
        </Collapse>
    )
}

interface LeftContentProps {
    title: string;
    children: React.ReactNode;
    link: string;
}

const LeftContent = ({title, children, link}: LeftContentProps ) => {

    const navigation = useNavigation();

    const handleNavigate = () => {
        //@ts-ignore
        navigation.navigate("EditalWeb", { link });
    }

    return (
        <View style={{ display: "flex", flexDirection: "column", width: "100%", height: 70, justifyContent:"space-around", alignItems: "flex-start", paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: "#CECECE"}}>
            <Text style={{ color: "#6f6f6f", fontSize: 15, marginBottom: 3 }}>
                { title }
            </Text>
            <TouchableOpacity onPress={handleNavigate}>
                { children }
            </TouchableOpacity>
        </View>
    )
}

export default function Editais() {

    const [buttonLeftActive, setButtonLeftActive] = useState(true);
    const [buttonRightActive, setButtonRightActive] = useState(false);

    const handleButtonLeftPress = () => {
        setButtonLeftActive(true);
        setButtonRightActive(false);
    };
    
    const handleButtonRightPress = () => {
        setButtonLeftActive(false);
        setButtonRightActive(true);
    };

    const navigation = useNavigation();

    const handleNavigate = () => {
        //@ts-ignore
        navigation.navigate("EditalDetail");
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <BackButton/>
            <View style={{ width: "100%", height: "100%", flexDirection: "column", alignItems: "center", backgroundColor: "#FFF" }}>
                <View style={{ marginTop: -70 }}>
                    <Logo small/>
                </View>
                <Ionicons name="folder-open-outline" size={70} color="#EB6D27" style={{ marginBottom: 30 }}/>
                <View style={{ width: "100%", height: 50, borderWidth: 2, borderColor: "#CECECE", display: "flex", flexDirection: "row" }}>
                    <TouchableOpacity onPress={handleButtonLeftPress} disabled={buttonLeftActive} style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center", borderRightWidth: 1, borderRightColor: "#CECECE", backgroundColor: buttonLeftActive ? "#CECECE" : "#FFF" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            RECENTES
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleButtonRightPress} disabled={buttonRightActive} style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center", borderLeftWidth: 1, borderLeftColor: "#CECECE", backgroundColor: buttonRightActive ? "#CECECE" : "#FFF" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            ASSUNTOS
                        </Text>
                    </TouchableOpacity>
                </View>
                {
                    buttonLeftActive && (
                        <ScrollView style={{ width: "100%", height: "100%", marginBottom: 150 }}>
                            <LeftContent title="Processo seletivo" link="https://www.ifnmg.edu.br/mais-noticias-januaria/652-januaria-noticias-2023/32602-resultado-final-do-processo-de-selecao-de-alunos-para-participacao-em-evento-na-franca">
                                <Text style={{ fontSize: 12, color: "#000" }}>
                                    09/08/2023 Resultado final do processo de seleção
                                    de alunos para participação em evento na França
                                </Text>
                            </LeftContent>
                            <LeftContent title="Auxilio estudantil" link="https://www.ifnmg.edu.br/mais-noticias-januaria/652-januaria-noticias-2023/32555-publicado-resultado-preliminar-do-edital-de-novas-vagas-de-auxilio">
                                <Text style={{ fontSize: 12, color: "#000" }}>
                                    02/08/2023 Resultado preliminar do edital de novas
                                    vagas de auxílio
                                </Text>
                            </LeftContent>
                            <LeftContent title="Auxilio estudantil" link="https://www.ifnmg.edu.br/mais-noticias-januaria/652-januaria-noticias-2023/32555-publicado-resultado-preliminar-do-edital-de-novas-vagas-de-auxilio">
                                <Text style={{ fontSize: 12, color: "#000" }}>
                                    02/08/2023 Publicado resultado preliminar do edital
                                    de novas vagas de auxílio
                                </Text>
                            </LeftContent>
                            <LeftContent title="Evento" link="https://www.ifnmg.edu.br/mais-noticias-januaria/652-januaria-noticias-2023/32549-ifnmg-campus-januaria-ira-fazer-a-segunda-edicao-do-if-na-praca">
                                <Text style={{ fontSize: 12, color: "#000" }}>
                                    01/08/2023 IFNMG Campus Januária irá realizar a
                                    segunda edição do IF na Praça!
                                </Text>
                            </LeftContent>
                            <LeftContent title="Processo seletivo" link="https://www.ifnmg.edu.br/mais-noticias-januaria/652-januaria-noticias-2023/32546-retificacao-do-edital-do-processo-de-selecao-de-alunos-para-participacao-em-evento-na-franca">
                                <Text style={{ fontSize: 12, color: "#000" }}>
                                    01/08/2023 Retificação do Edital do processo de
                                    seleção de alunos para um em evento na França
                                </Text>
                            </LeftContent>
                        </ScrollView>
                    )
                }
                {
                    buttonRightActive && (
                        <ScrollView style={{ width: "100%", height: "auto", marginBottom: 150 }}>
                            <CustomCollapse title="Extensão">
                                <ScrollView style={{ width: "100%", height: "auto" }}>
                                    <View style={{ width: "100%", height: 100, borderBottomWidth: 1, borderBottomColor: "#CECECE", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                                        <TouchableOpacity onPress={handleNavigate}>
                                            <Text>
                                                Edital n° 237/2023 - Seleção simplificada de
                                                bolsista para o encargo de apoio administrativo
                                                para atuar no projeto de extensão "FORMAÇÃO
                                                CONTINUADA EM AGROPECUÁRIA NAS ESCOLAS"
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: "100%", height: 100, borderBottomWidth: 1, borderBottomColor: "#CECECE", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                                        <TouchableOpacity>
                                            <Text>
                                                Edital n° 174/2023 - Chamada pública para Seleção
                                                de bolsistas para projetos de extensão do
                                                Departamento de Comunicação e da Coordenação
                                                de Processos Seletivos e Concursos Públicos
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: "100%", height: 100, borderBottomWidth: 1, borderBottomColor: "#CECECE", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                                        <TouchableOpacity>
                                            <Text>
                                                Edital n° 84/2023 - Dispõe sobre o processo
                                                seletivo para submissão de Projetos de Extensão,
                                                em atendimento ao Programa Institucional de
                                                Bolsas de Extensão aos Discentes (PIBED)
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: "100%", height: 100, borderBottomWidth: 1, borderBottomColor: "#CECECE", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                                        <TouchableOpacity>
                                            <Text>
                                                Edital n° 09/2023 - Edital de Fluxo Contínuo: Dispõe
                                                sobre o registro e monitoramento de projetos de
                                                fluxo contínuo de extensão, vinculados aos campi
                                                do Ifnmg - Exercíco 2023
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </CustomCollapse>
                            <CustomCollapse title="Estágio">
                                <Text>
                                    Em breve
                                </Text>
                            </CustomCollapse>
                            <CustomCollapse title="Auxílios">
                                <Text>
                                    Em breve
                                </Text>
                            </CustomCollapse>
                            <CustomCollapse title="Ensino">
                                <Text>
                                    Em breve
                                </Text>
                            </CustomCollapse>
                            <CustomCollapse title="Pesquisa">
                                <Text>
                                    Em breve
                                </Text>
                            </CustomCollapse>
                            <CustomCollapse title="Eleições">
                                <Text>
                                    Em breve
                                </Text>
                            </CustomCollapse>
                            <CustomCollapse title="Assistência estudantil">
                                <Text>
                                    Em breve
                                </Text>
                            </CustomCollapse>
                            <CustomCollapse title="Educação a distância">
                                <Text>
                                    Em breve
                                </Text>
                            </CustomCollapse>
                        </ScrollView>
                    )
                }
            </View>
        </SafeAreaView>
    );
}