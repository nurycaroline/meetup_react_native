import React, { Component } from 'react';
import {
		Image,
		View, 
		AppRegistry,
		TextInput,
		Text
	   } from 'react-native';

import BotoesEscolha from './src/components/BotoesEscolha';
import Resultado from './src/components/Resultado';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			escolhaUsuario: '',
			escolhaComputador: '', 
			resultado: '',
			nomeJogador: '' 
		}
	}

	verificarGanhador = (escolhaUsuario, escolhaComputador) => {
		let usuarioGanhou = 'Você ganhou!';
		let computadorGanhou = 'Você perdeu!';

		if (escolhaUsuario == escolhaComputador){
			return 'Empate';
		} else if (escolhaComputador == 'pedra'){
			return  escolhaUsuario == 'papel' ? usuarioGanhou : 
					escolhaUsuario == 'tesoura'? computadorGanhou : '';
		}else if (escolhaComputador == 'papel'){
			return  escolhaUsuario == 'tesoura' ? usuarioGanhou :
					escolhaUsuario == 'pedra' ? computadorGanhou : '';
		}else if (escolhaComputador == 'tesoura'){
			return  escolhaUsuario == 'pedra'? usuarioGanhou :
					escolhaUsuario == 'papel' ? computadorGanhou : '';
		}
	}

	escolhaComp = () => {
		let numeroAleatorio = Math.floor(Math.random() * 3);
		let escolhaComputador = '';

		switch (numeroAleatorio) {
			case 0: return 'pedra'; 
			case 1: return 'papel'; 
			case 2: return'tesoura'; 
		}
	}

	atualizaState = (escolhaUsuario) => {
		let escolhaComputador = this.escolhaComp();
		let resultado = this.verificarGanhador(escolhaUsuario, escolhaComputador);

		this.setState({escolhaUsuario: escolhaUsuario,
					  escolhaComputador: escolhaComputador, 
					  resultado: resultado
					});
	}

	render(){
		return (
			<View>

				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={(text) => this.setState({nomeJogador: text})}
					value={this.state.nomeJogador}
				/>

				<Text>{this.state.nomeJogador}</Text>

				<Image source={ require('./img/jokenpo.png')} />
			
				<BotoesEscolha atualizaState={this.atualizaState} />

				{ this.state.resultado ?
					<Resultado 
						escolhaUsuario={this.state.escolhaUsuario} 
						escolhaComputador={this.state.escolhaComputador}
						resultado={this.state.resultado}  
					/>
				: null
				}

			</View>
		)
	}
}

AppRegistry.registerComponent('Jokenpo', () => App)