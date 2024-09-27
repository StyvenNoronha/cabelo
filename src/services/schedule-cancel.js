import {apiConfig} from "./api.config"

export async function scheduleCancel({id}){
try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`,{
        method:"DELETE",
    })
    alert("Agendamento cencelado com sucesso")
} catch (error) {
    console.log(error)
    alert("deu erro no cancelar")
}
}