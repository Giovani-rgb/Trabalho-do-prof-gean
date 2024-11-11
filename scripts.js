// Dados fictícios de horários
const horarios = [
    {
        dia: "Segunda-feira",
        horario: "08:00 - 09:00",
        aula: "Yoga",
        instrutor: "Carlos"
    },
    {
        dia: "Segunda-feira",
        horario: "15:00 - 22:00",
        aula: "Jiu-Jitsu",
        instrutor: "Matheus"
    },
    {
        dia: "Segunda-feira",
        horario: "10:00 - 11:00",
        aula: "Pilates",
        instrutor: "Ana"
    },
    {
        dia: "Terça-feira",
        horario: "08:00 - 09:00",
        aula: "Zumba",
        instrutor: "Bianca"
    },
    {
        dia: "Terça-feira",
        horario: "05:00 - 13:00",
        aula: "Ballet",
        instrutor: "Fernanda"
    },
    {
        dia: "Terça-feira",
        horario: "15:00 - 23:00",
        aula: "Defesa Pessoal",
        instrutor: "Marcelo"
    },
    {
        dia: "Quarta-feira",
        horario: "08:00 - 09:00",
        aula: "Crossfit",
        instrutor: "Pedro"
    },
    {
        dia: "Quarta-feira",
        horario: "09:00 - 15:00",
        aula: "Musculação",
        instrutor: "Daniel"
    },
    {
        dia: "Quarta-feira",
        horario: "06:00 - 18:00",
        aula: "Natação",
        instrutor: "Jefferson"
    },
    {
        dia: "Quinta-feira",
        horario: "10:00 - 11:00",
        aula: "Boxe",
        instrutor: "Marcos"
    },
    {
        dia: "Quinta-feira",
        horario: "15:00 - 22:00",
        aula: "Ciclismo",
        instrutor: "Roberto"
    },
    {
        dia: "Quinta-feira",
        horario: "10:00 - 20:00",
        aula: "Hiposmo",
        instrutor: "Celso"
    },
    {
        dia: "Sexta-feira",
        horario: "14:00 - 15:00",
        aula: "Spinning",
        instrutor: "Laura"
    },
    {
        dia: "Sexta-feira",
        horario: "08:00 - 15:00",
        aula: "Dança do Ventre",
        instrutor: "Ana Paula"
    },
    {
        dia: "Sexta-feira",
        horario: "06:00 - 14:00",
        aula: "Tiro ao Alvo",
        instrutor: "Miguel"
    },
    {
        dia: "Sábado",
        horario: "09:00 - 10:00",
        aula: "Alongamento",
        instrutor: "Joana"
    },
    {
        dia: "Sábado",
        horario: "05:00 - 20:00",
        aula: "Karaté",
        instrutor: "Rosana"
    },
    {
        dia: "Sábado",
        horario: "14:00 - 20:00",
        aula: "Musica",
        instrutor: "Raquel"
    },
    {
        dia: "Domingo",
        horario: "10:00 - 11:00",
        aula: "Meditação",
        instrutor: "Rafael"
    },
    {
        dia: "Domingo",
        horario: "08:00 - 20:00",
        aula: "Pillates",
        instrutor: "Gabriel"
    },
    {
        dia: "Domingo",
        horario: "10:00 - 14:00",
        aula: "Fisioterapia",
        instrutor: "Rodrigo"
    }
];

// Função para exibir os horários na tabela
function exibirHorarios(diaSelecionado) {
    const tabela = document.getElementById("conteudo-horarios");
    tabela.innerHTML = ""; // Limpar a tabela

    // Filtrar horários pelo dia selecionado ou mostrar todos se nenhum dia for especificado
    const horariosFiltrados = diaSelecionado
        ? horarios.filter(horario => horario.dia === diaSelecionado)
        : horarios;

    // Preencher a tabela com os horários filtrados
    horariosFiltrados.forEach(horario => {
        const row = document.createElement("tr");
        row.innerHTML = `
                <td>${horario.dia}</td>
                <td>${horario.horario}</td>
                <td>${horario.aula}</td>
                <td>${horario.instrutor}</td>
            `;
        tabela.appendChild(row);
    });
}

// Função para filtrar horários com base no dia selecionado
function filtrarHorarios(dia) {
    exibirHorarios(dia);
}

// Exibir todos os horários ao carregar a página
window.onload = () => exibirHorarios();
