import {hoursLoad} from "../form/hours-load.js"
import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
const selectDate = document.getElementById("date")
export async function schedulesDay() {
   const date =  selectDate.value
   //busca na api os agendamentos
    const dailyScheduled = await scheduleFetchByDay({date})
    console.log(dailyScheduled)
    //renderiza as horas diponivel
    hoursLoad({date})
}
