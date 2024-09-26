import {apiConfig} from "./api.config.js"

export async function scheduleNew(id, nome, when) {
    try {
        await fetch (`${apiConfig.baseURL}/schedules`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({id,nome,when})
        })
        alert("deu tudo certo.")
    } catch (error) {
        console.log(error)
        alert("deu erro")
    }
}