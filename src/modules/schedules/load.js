import {hoursLoad} from "../form/hours-load.js"
import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {schedulesShow} from "../schedules/show.js"
const selectDate = document.getElementById("date")
export async function schedulesDay() {
   const date =  selectDate.value
   //busca na api os agendamentos
    const dailyScheduled = await scheduleFetchByDay({date})
    //antigo methodo para exibir os agendamentos 
    //console.log(dailyScheduled)
    //exibe os agendamentos
    schedulesShow({dailyScheduled})
    //renderiza as horas diponivel
    hoursLoad({date, dailyScheduled})
}
