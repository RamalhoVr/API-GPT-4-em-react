# API-GPT-4-em-react

# Aplicativo com API do GPT-4

Este é um aplicativo que utiliza a API do GPT-4 para fornecer conselhos ou respostas com base em perguntas feitas pelo usuário. O código está escrito em React Native.

## Funcionalidade do código

O código possui uma função principal chamada `Advices`, que é exportada como padrão. Essa função é responsável por fornecer a lógica do aplicativo.



No início do código, há a importação dos componentes necessários do React Native, como `View`, `Text`, `TouchableOpacity` e `TextInput`. Além disso, é importado o `useState` para lidar com o estado do aplicativo.

![image](https://github.com/RamalhoVr/API-GPT-4-em-react/assets/116125017/2737f1b9-b6c2-445f-a983-87328e21174a)

Em seguida, é definida uma constante `ADVICE_API_URL` que guarda a chave de API do GPT-4. Essa chave é utilizada para fazer a requisição à API e obter as respostas.

![image](https://github.com/RamalhoVr/API-GPT-4-em-react/assets/116125017/3b94bc46-59ad-4b20-8b50-a6fd8cb6c615)


Dentro da função `Advices`, são definidos dois estados utilizando o `useState`. O estado `advice` guarda a pergunta digitada pelo usuário, e o estado `response` guarda a resposta obtida da API.

![image](https://github.com/RamalhoVr/API-GPT-4-em-react/assets/116125017/dfdd5353-2d4f-4ccd-9ebb-a15f8713fcd5)


A função `fetchAdvices` é responsável por fazer a requisição à API do GPT-4. É utilizada a função `fetch` para enviar uma solicitação POST para a URL da API. São definidos os cabeçalhos da requisição, incluindo o tipo de conteúdo e a autorização utilizando a chave da API. O corpo da requisição contém um objeto JSON com a pergunta do usuário e um contexto adicional.

Após enviar a requisição, a função `then` é utilizada para obter a resposta da API. A resposta é convertida para JSON e a saída é atualizada no estado `response` utilizando a função `setResponse`.

![image](https://github.com/RamalhoVr/API-GPT-4-em-react/assets/116125017/bc261444-a4a3-4b5e-be46-cc3babc284d1)


No retorno da função `Advices`, é renderizado um componente `View` que contém os elementos do aplicativo. Há um componente `TextInput` para o usuário digitar a pergunta, um componente `TouchableOpacity` que aciona a função `fetchAdvices` quando pressionado (para enviar a pergunta) e um componente `Text` para exibir a resposta obtida da API.

![image](https://github.com/RamalhoVr/API-GPT-4-em-react/assets/116125017/285d45ce-e667-4cc9-bb5b-7f389aa950a5)

Por fim, é definido um estilo CSS para os componentes do aplicativo, incluindo o estilo do container, do botão, do campo de texto e do texto de resposta.

![image](https://github.com/RamalhoVr/API-GPT-4-em-react/assets/116125017/ea4021ba-1ca2-4f9e-8f87-13ea7a3383ce)


## Observações

O código atualmente utiliza espaços reservados para a chave da API do GPT-4 e o contexto a ser fornecido à API. Certifique-se de substituir esses espaços reservados pelas informações corretas antes de executar o aplicativo.

Além disso, o estilo CSS fornecido no código pode ser modificado para atender aos requisitos de design do aplicativo.

# API-GPT-4-in-react

# Application with GPT-4 API

This is an application that uses the GPT-4 API to provide advice or answers based on user questions. The code is written in React Native.

## Code Functionality

The code has a main function called `Advices`, which is exported as default. This function is responsible for providing the application's logic.

At the beginning of the code, the necessary React Native components are imported, such as `View`, `Text`, `TouchableOpacity`, and `TextInput`. Additionally, `useState` is imported to handle the application's state.

![image](https://github.com/RamalhoVr/API-GPT-4-em-react/assets/116125017/2737f1b9-b6c2-445f-a983-87328e21174a)

Next, a constant `ADVICE_API_URL` is defined to store the GPT-4 API key. This key is used to make the API request and obtain the responses.

![image](https://github.com/RamalhoVr/API-GPT-4-em-react/assets/116125017/3b94bc46-59ad-4b20-8b50-a6fd8cb6c615)


Inside the `Advices` function, two states are defined using `useState`. The `advice` state stores the question entered by the user, and the `response` state stores the response obtained from the API.

![image](https://github.com/RamalhoVr/API-GPT-4-em-react/assets/116125017/dfdd5353-2d4f-4ccd-9ebb-a15f8713fcd5)


The `fetchAdvices` function is responsible for making the request to the GPT-4 API. The `fetch` function is used to send a POST request to the API URL. The request headers are defined, including the content type and authorization using the API key. The request body contains a JSON object with the user's question and additional context.

After sending the request, the `then` function is used to get the API response. The response is converted to JSON, and the output is updated in the `response` state using the `setResponse` function.

![image](https://github.com/RamalhoVr/API-GPT-4-in-react/assets/116125017/bc261444-a4a3-4b5e-be46-cc3babc284d1)


In the return of the `Advices` function, a `View` component is rendered that contains the elements of the application. There is a `TextInput` component for the user to enter the question, a `TouchableOpacity` component that triggers the `fetchAdvices` function when pressed (to send the question), and a `Text` component to display the response obtained from the API.

![image](https://github.com/RamalhoVr/API-GPT-4-em-react/assets/116125017/285d45ce-e667-4cc9-bb5b-7f389aa950a5)

Finally, a CSS style is defined for the application's components, including the container style, button style, text input style, and response text style.

![image](https://github.com/RamalhoVr/API-GPT-4-em-react/assets/116125017/ea4021ba-1ca2-4f9e-8f87-13ea7a3383ce)

## Notes

The code currently uses placeholders for the GPT-4 API key and the context to be provided to the API. Make sure to replace these placeholders with the correct information before running the application.

Additionally, the CSS style provided in the code can be modified to meet the application's design requirements.



