import React, { Component } from 'react';
import {
        StyleSheet,
        View,
        Text
	   } from 'react-native';
import Icone from './Icone';

const styles = StyleSheet.create({
	painel: {
		alignItems: 'center',
		marginTop: 10
	},
	textoResultado: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#0ca8cc',
		height: 60
	}
});

class Resultado extends Component {
    render(){
        return (
            <View style={styles.painel}>
                <Text style={styles.textoResultado}>{this.props.resultado}</Text>
                <Icone escolha={this.props.escolhaUsuario} jogador="Você" />
                <Icone escolha={this.props.escolhaComputador} jogador="Computador" />
            </View>
        )
    }
}
export default Resultado;