import dayjs from "dayjs"

const form = document.querySelector("form")

const clienteNome = document.getElementById("client")

const colocarData = dayjs(new Date()).format("YYYY-MM-DD")

//selecionar data atual
const selectDate = document.getElementById("date")
////
//colocar a data atual
selectDate.value = colocarData
///////
//defina date minima
selectDate.min = colocarData
/////
form.onsubmit = (event) =>{

    event.preventDefault()

    try {
        //recuperando o nome do cliente
        const nome = clienteNome.value.trim()
        if(!nome){
          return  alert("digite seu nome")
        }

        //recupera o horario selecionado
        const hourSelected = document.querySelector(".hour-selected")
        if(!hourSelected){
            return alert("infome a hora")
        }

        //recupera so a hora
        const [hour] = hourSelected.innerText.split(":")
        //insere a hora na data
        const when = dayjs(selectDate.value).add(hour, "hour")
        //gerar um id
        const id = new Date().getTime()

        console.log({
            id,
            nome,
            when,
        })
    } catch (error) {
        alert("Erro: Não foi possivel realizar o agendamento")
        console.log(error)
    }
}