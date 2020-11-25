import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import '../../assets/Colors'
import Constants from 'expo-constants'
import { PrimaryTextColor, SecondaryTextColor, WarningColor, YesColor, OptionsOffsetColor } from '../../assets/Colors';
import ProgressCircle from 'react-native-progress-circle'

import Titulo from '../../components/Titulo'
import Subtitulo from '../../components/Subtitulo'
import ProximaPagina from '../../components/ProximaPagina'
import BottomMenu from '../../components/BottomMenu'
import { Table, TableWrapper, Col, Cols, Cell, Row, Rows } from 'react-native-table-component';
import OptionsRow from '../../components/OptionsRow'

export default function RelatorioDeVistoria_05({navigation}) {
    
    return (
        <ScrollView style={styles.Header}>
            <Titulo title = "Medidas de segurança contra Incêncio e Emergência" />
            <View style={styles.HeaderRowContainer}>
                <ProgressCircle  
                    percent={40}
                    radius={25}
                    borderWidth={4}
                    color= {YesColor}
                    shadowColor= {SecondaryTextColor}
                    bgColor="#fff">
                    <Text>{'5/13'}</Text>
                </ProgressCircle>
                <View style={styles.TitlesContainer}>
                    <Subtitulo text= 'Sistema de Hidrantes'/>
                    <ProximaPagina text = "Próx: Extintores" />
                </View>
            </View>

            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 0}} >
                    <Row data = {['Não Consta', 'imagem']} flexArr={[2,1]} style={{height: 40}} textStyle={styles.textTitle} />
                    <Row data = {['Medidas', 'SIM', 'NÃO']} flexArr={[4,1,1]} style={{height: 40}} textStyle={styles.textTitle} />

                    <OptionsRow title = '01 hidrante a no máximo 5m da saída' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Abrigos desobstrídos' />
                    <OptionsRow title = 'Cobertura em toda a área da edificação' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Funcionamento da bomba automático' />

                    <OptionsRow title = 'Botoeiras em todos os abrigos' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Pressurização por bomba' />

                    <OptionsRow title = 'Ligação independente' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Desligamento da bomba manual na casa de bombas' />
                    <OptionsRow title = 'Os abrigos estão com todos os acessórios' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Tubulação aparente de ferro' />

                    <OptionsRow title = 'RTI independente do consumo predial' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Saída do consumo de água predial em nível acima da RTI' />
                    <OptionsRow title = 'Pressurização por gravidade' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Outros itens observados' />

                </Table>
            </View>

            <BottomMenu navigation = {navigation} rootPage = "Forms" backwards = "RelatorioDeVistoria_04" forwards = "RelatorioDeVistoria_06" />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Header: {
        flex: 1
    },
    TitlesContainer: {
        flexDirection: 'column',
        alignSelf: 'center'
    },
    HeaderRowContainer: {
        width: '96%',
        alignItems:'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        paddingBottom: 15,
        alignSelf: 'center',
        borderBottomColor: PrimaryTextColor,
        borderBottomWidth: 1
    },
    container: { flex: 1, padding: 0, paddingTop: 10, backgroundColor: '#fff' },
    CheckButtonView: {
        alignSelf:'center'
    },
    textTitle:{
        fontWeight: 'bold',
        color: PrimaryTextColor,
        textAlign: 'center',
        fontSize: 15
    }

});

