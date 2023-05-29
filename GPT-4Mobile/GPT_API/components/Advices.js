/*
 * Por: Victor Ramalho | github.com/RamalhoVr
 * feito em 19/05/2023
 * Aplicativo com API do GPT-4
 * */

import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

//cria uma constante para guardar a key da sua API
const ADVICE_API_URL = 'Sua key do GPT-4';

//função advices, responsavel pela funcionalidade da API
export default function Advices(){
    const[advice, setAdvice] = useState('');
    const [response, setResponse] = useState('');

    const fetchAdvices = async () => {
        try {
            const data2 = {
              "input": {
                "input": advice,
                "context": "qual contexto você vai passar para o GPT, por exemplo: responda-me em inglês ou traduza para binário."
              }
            };
            
            fetch(ADVICE_API_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Chave de autorização para o GPT-4'
              },
              body: JSON.stringify(data2) }

            ).then(resp => resp.json()
            ).then(inference => setResponse(inference.output));

        } catch (error) {
          console.log(error);
        }
      };


    return(
        <View style={css.container}>
          //textbox para inserir pergunta
        <TextInput style={css.textbox}
            placeholder="Digite sua pergunta"
            onChangeText={text => setAdvice(text)}
            value={advice}
        />
        //botão que confirma a pergunta
        <TouchableOpacity onPress={fetchAdvices} style={css.buttonA}>
            <Text>enviar</Text>
        </TouchableOpacity>
        //caixa de resposta
        <Text style={css.adviceText}>{response}</Text>
    </View>
    );
}
//css(haverá modificações futuras em quesito de design)
const css = StyleSheet.create({
  //container (toda parte cinza)
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  //botao
  buttonA: {
    width: 80,
    height: 80,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan'
  },
  //textbox
  textbox: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 50,
    fontSize: 20,
    height: 100
  },
  //texto de resposta
  adviceText: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 20,
    fontSize: 40,
    height: 300 
  },
})