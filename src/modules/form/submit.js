import dayjs from "dayjs"

const form = document.querySelector("form")

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
}