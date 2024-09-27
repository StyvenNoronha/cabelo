import dayjs from "dayjs";

// Selecione de manhã, tarde e noite
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailyScheduled }) {
  try {
    // Limpa as listas
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Renderiza os agendamentos por período
    dailyScheduled.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      // Adiciona o id
      item.setAttribute("data-id", schedule.id.id);

      time.textContent = dayjs(schedule.id.when).format("HH:MM:ss");
      name.textContent = schedule.id.nome;

      // Cria ícone de cancelar agendamento
      const cancela = document.createElement("img");
      cancela.classList.add("cancel-icon");
      cancela.setAttribute("src", "./src/assets/cancel.svg");
      cancela.setAttribute("alt", "Cancelar");

      // Adiciona o tempo, nome e ícone no item
      
      item.append(time, name, cancela);

      // Obtém somente a hora
      const hora = dayjs(schedule.id.when).hour();

      // Renderiza o agendamento na seção (manhã, tarde e noite)
      if (hora <= 12) {
        periodMorning.appendChild(item);
      } else if (hora > 12 && hora <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível exibir os agendamentos");
  }
    
}
