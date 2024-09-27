const periods = document.querySelectorAll(".period")

periods.forEach((period)=>{
    period.addEventListener("click",(event)=>{
        if(event.target.classList.contains("cancel-icon")){
            //pega no icone
            const item = event.target.closest("li")
            const {id} = item.dataset
            console.log(id)

            if(id){
                const isConfirma = confirm("tem certeza? Ele apaga")
                if(isConfirma){
                    console.log("tchau, agendamento")
                }else{
                    console.log("nao apagou")
                }
            }

        }
    })
})