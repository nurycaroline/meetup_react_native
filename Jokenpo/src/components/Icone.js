import React, { Component } from 'react';
import {
        StyleSheet,
        View,
        Image, 
        Text
	   } from 'react-native';

const styles = StyleSheet.create({
	icones:{
        alignItems: 'center',
        marginBottom: 20,
    }, 
    textJogador: {
        fontSize: 18,
        color: '#0ca8cc'
    }
});

class Icone extends Component {
    render(){
        return (
            <View>
                { 
                    !this.props.escolha ? <Image></Image> :
                    <View style={styles.icones}>
                        <Text style={styles.textJogador}>{this.props.jogador}</Text>
                        
                        {
                            this.props.escolha == 'pedra' ? 
                                <Image source={require('../../img/pedra.png')} />
                            : this.props.escolha == 'tesoura' ?
                                <Image source={require('../../img/tesoura.png')} />
                            : this.props.escolha == 'papel' ?
                                <Image source={require('../../img/papel.png')} />
                            : ''
                        }
                    </View>
                }
            </View>
        )
    }
}
export default Icone;