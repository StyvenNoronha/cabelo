import dayjs from "dayjs"
import {opemingHours} from "../../utils/opening-hours.js"

const hours = document.getElementById("hours")

export function hoursLoad({date}){
const opening= opemingHours.map((hour)=>{
    //recupera somente a hora
    const [scheduleHour] = hour.split(":")

    //adicona a hora na date e verificar se esta no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    

    //define  se horario esta disponivel
    return{
        hour,
        available:!isHourPast,
    }
}) 
//renderiza os horaio

opening.forEach(({hour,available})=>{
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour
    hours.append(li)
})
}