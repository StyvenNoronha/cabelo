import {apiConfig} from "./api.config"
import dayjs from "dayjs"
export async function scheduleFetchByDay({date}) {
    try {
        //so fazendo uma busca
        const reponse = await fetch(`${apiConfig.baseURL}/schedules`)
        //converte para json
        const data = await reponse.json()
        //filtra os agendamentos pelo dia selecionado
        const dailySchedules = data.filter((schedule)=> dayjs(date).isSame(schedule.when, "day") )
        return dailySchedules
    } catch (error) {
        console.log(error)
        alert("deu erro do dia")
    }
}