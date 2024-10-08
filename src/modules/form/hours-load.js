import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailyScheduled }) {
    // Limpa a lista de horários
    hours.innerHTML = "";

    //obtem a lista das todos os horarios ocupados
    const bloqueadosHoras = dailyScheduled.map((schedule)=>
    dayjs(schedule.id.when).format("HH:mm")
    )
    
    
    const opening = openingHours.map((hour) => {
        // Recupera somente a hora
        const [scheduleHour] = hour.split(":");

        // Adiciona a hora na data e verifica se está no passado
        const isHourPresent = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());
        const available = !bloqueadosHoras.includes(hour) && !isHourPresent

        // Define se horário está disponível
        return {
            hour,
            available, 
        };
    });

    // Renderiza os horários
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li");
        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");

        li.textContent = hour;
        if (hour === "9:00") {
            hourHeaderAdd("Manhã");
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde");
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite");
        }
        hours.append(li);
    });

    // Adiciona o evento click
    hoursClick();
}

function hourHeaderAdd(title) {
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;
    hours.append(header);
}
