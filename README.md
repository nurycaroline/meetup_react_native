# 2º Meetup React de Blumenau - SC
Explicações e Arquivos Utilizados no 2° Meetup React Blumenau-SC

## Slides
[SlideShare](http://pt.slideshare.net/NuriellyCarolineBrizola/meetup-react-native)
[SpeakerDeck](https://speakerdeck.com/nurycaroline/introducao-react-natibe)

## O que é React Native

* Uma biblioteca criada pelo Facebook, usando Javascript e React, para tornar o desenvolvimento para aplicações móveis mais rápido e permitir o desenvolvimento de aplicativos nativos com a interface com componentes. Sem diferença perceptível entre aplicativos criado usando Java ou Object C.

* Não utiliza HTML para processar o aplicativo (div, input, ...), 
mas possui componentes alternativos, que funcionam de forma parecida.
    View == div
    Text == p
    
* Como o código não é renderizado em uma página HTML, significa que não será possível reutilizar as bibliotecas criadas com ReactJs.

## Folhas de Estilo
* Para compor os componentes tem as Folhas de Estilo em Javascript. 
Parece Css, mas não é. 
```
const styles = StyleSheet.create({
    icones:{
        alignItems: 'center',
        marginBottom: 20,
    }, 
    textJogador: {
        fontSize: 18
    }
});
```

## Por que usar React Native
* ** JAVASCRIPT ** 
* Cobertura para Android e IOS 
* Componentes reutilizáveis, renderizando de forma nativa
* Aplicativos nativos são mais eficientes
* Menos uso de memória

## Casos para não usar
* Quer utiliza o mesmo código para as diversas plataformas existentes (android, ios, windows phone, PS4, Xbox, 3DS, Fireos, ...)


## O que é necessário para comecar a desenvolver em React Native
* Python
* NodeJS
* React Native Cli
* Android Studio ou XCode

## Projeto - Jokenpo
* O usuário terá 3 opções: Pedra, Papel ou Tesoura. 
* O computador também irá escolher uma das 2 opções aleatóriamente.

Pedra e Pedra || Papel e Papel || Tesoura e Tesoura = Empate
Pedra e Papel = Papel enrrola Pedra
Pedra e Tesoura = Pedra quebra Tesoura
Papel e Tesoura = Tesoura corta Papel 

### Criando a estrutura inicial do React Native
1. No terminal: 
```
    react-native init Jokenpo
```

2. Abrir projeto no Android Studio
3. Execução no Smartphone ou Emulador
```
    react-native run-android
```

### Componentes
O react native não possui html, mas seus componentes são bem parecidos com as Tags HTML.
* [Text](https://facebook.github.io/react-native/docs/text.html) que pode substituir <label> ou <p>:

    ```
        <Text style={styles.titleText} onPress={this.onPressTitle}> Hello World </Text>
    ```

* [Button](https://facebook.github.io/react-native/docs/button.html), que não precisa dizer para o que serve né kk

    ```
        <Button
            onPress={onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
    ```

* Podem ver outros componente da documentação. https://facebook.github.io/react-native/docs/getting-started.html

## Publicação Android
https://facebook.github.io/react-native/
https://facebook.github.io/react-native/docs/signed-apk-android.html

## Referências
https://facebook.github.io/react-native/docs/getting-started.html
https://medium.com/@alexmngn/from-reactjs-to-react-native-what-are-the-main-differences-between-both-d6e8e88ebf24#.oo68jo7yw

