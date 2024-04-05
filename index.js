let participantes = [
  {
    nome: "Sarah Vargas",
    email: "sarah@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 19, 23),
    dataCheckIn: new Date(2024, 2, 25, 20, 20)
  },
  {
    nome: "Bel Oliveira",
    email: "bel@gmail.com",
    dataInscricao: new Date(2024, 1, 2, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "João Silva",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 3, 10, 12, 0),
    dataCheckIn: new Date(2024, 3, 10, 12, 30)
  },
  {
    nome: "Ana Souza",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 3, 15, 8, 0),
    dataCheckIn: new Date(2024, 3, 15, 9, 30)
  },
  {
    nome: "Pedro Oliveira",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 3, 20, 14, 0),
    dataCheckIn: new Date(2024, 3, 20, 15, 30)
  },
  {
    nome: "Mariana Santos",
    email: "mariana@gmail.com",
    dataInscricao: new Date(2024, 3, 25, 16, 0),
    dataCheckIn: new Date(2024, 3, 25, 17, 30)
  },
  {
    nome: "Rafael Oliveira",
    email: "rafael@gmail.com",
    dataInscricao: new Date(2024, 4, 2, 10, 0),
    dataCheckIn: new Date(2024, 4, 2, 11, 30)
  },
  {
    nome: "Camila Ferreira",
    email: "camila@gmail.com",
    dataInscricao: new Date(2024, 4, 5, 13, 0),
    dataCheckIn: new Date(2024, 4, 5, 14, 30)
  },
  {
    nome: "Lucas Oliveira",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2024, 4, 10, 9, 0),
    dataCheckIn: new Date(2024, 4, 10, 10, 30)
  },
  {
    nome: "Fernanda Silva",
    email: "fernanda@gmail.com",
    dataInscricao: new Date(2024, 4, 15, 18, 0),
    dataCheckIn: new Date(2024, 4, 15, 19, 30)
  }
];

//Pode se colocar na variável função, função curta(arrow function)

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if (participante.dataCheckIn == null) {
    dataCheckIn = `
      <button data-email="${participante.email}" onclick="fazerCheckIn(event)">Confirmar check-in</button>
    `
  }

  return `
  <tr>
        <td>
          <strong>${participante.nome}</strong>
          <br>
          <small>
            ${participante.email}
          </small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
      </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  for (let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  // substituir informação do HTML
  document.querySelector('tbody').innerHTML = output
}//arrow function)

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  //verificar se o particip. já existe
  const participanteExiste = participantes.find(
    //retorne logo
    (p) => p.email == participante.email
  )

  if (participanteExiste) {
    alert('E-mail já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar o formulário
  //target(alvo, quem está disparando o onsubmit é o formulário)
  //Pesquisa pelo seletor, seletor a ser pesq. name
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  //confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Realmente deseja fazer o check-in?'

  if (confirm(mensagemConfirmacao) == false) {
    return
  }

  //encontrar o participante dentro da lista
  //vai verificar a lista inteira, até encontrar
  const participante = participantes.find(
    (p) =>
      //o e-mail do participante do check-in 
      //que está guardado na tag 
      //button(data-email="${participante.email})
      p.email == event.target.dataset.email
  )

  //atualizar o check-in do participante 
  participante.dataCheckIn = new Date()

  //atualizar a lista de participantes
  atualizarLista(participantes)
}