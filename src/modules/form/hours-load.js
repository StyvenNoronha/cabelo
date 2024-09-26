import dayjs from "dayjs"
import {opemingHours} from "../../utils/opening-hours.js"


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
}