import React, { Component } from 'react';
import {
        StyleSheet,
        View,
        Button
	   } from 'react-native';

const styles = StyleSheet.create({
	botoes: {
		width: 90
	}, 
	painel: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 10
	},
});

class BotoesEscolha extends Component {
    render(){
        return (
            <View style={styles.painel}>
                <Button  onPress={() => this.props.atualizaState('pedra')} title="Pedra" style={styles.botoes} />
                <Button  onPress={() => this.props.atualizaState('papel')} title="Papel" style={styles.botoes} />
                <Button  onPress={() => this.props.atualizaState('tesoura')} title="Tesoura" style={styles.botoes} />
            </View>
        )
    }
}
export default BotoesEscolha;