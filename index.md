```js
// variáveis - onde se guarda os dados, que se pode usar mais 
//de uma vez.
const mensagem = "Olá, Seja Bem-Vindo"

// tipos de dados - number, string

// função
alert(mensagem)


const participante = {
  nome: "Sarah Vargas",
  email: "sarah@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
} 

// let - permite que o valor seja alterado
// array
let participantes = [
  {
  nome: "Sarah Vargas",
  email: "sarah@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
},
]

// estrutura de repetição - loop
  // funciona apenas pegando um part. da lista o 1º, só 
  // agora com o output ele soma junto já com a Sarah
  for(let participante of participantes){
    // faça alguma coisa aqui
    // enquanto tiver pessoas nessa lista
    output = output + criarNovoParticipante(participante)
  }

  //variável que está recebendo uma função, que tem um argumento
const adicionarParticipante = (event) => {
  //ao clicar no botão ele vai querer fazer o onsubmit(nele se chama a função adicionar... e manda o event para dentro, vai procurar a função, achou), event.preventDefault está dizendo não fazer esse padrão Default, prevent: não faça o padrão desse evento, não enviar os dados.
  event.preventDefault() 

  //Pegar as inform. do formulário
  //FormData - Espera passar um arg. de quem é o form.?, de qual form se vai pegar os dados?
  //event.target - Pega o formulário e avisa que quer buscar os dados do formulário e colocar nessa váriavel  os dados do formulário.
  const dadosDoFormulario = new FormData(event.target)
  
  //atualiza a lista adicionando novos particip. e pegando os particpantes que já estavam form. para inserir ...participantes
  participantes = [participante, ...participantes]
  atualizarLista(participantes)
} 


```