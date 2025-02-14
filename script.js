function selecionarDia(celula, dia) {
    let diaSelecionado = document.getElementById("diaSelecionado");
    
    // Defina o mês e o ano fixos
    let mes = "02";  // Fevereiro
    let ano = "2025";

    // Formato de data: DD/MM/AAAA
    let dataFormatada = `${dia.toString().padStart(2, '0')}/${mes}/${ano}`;

    // Adiciona a data ao dropdown (mantendo opções anteriores)
    let option = document.createElement("option");
    option.text = dataFormatada;
    option.value = dataFormatada;
    diaSelecionado.appendChild(option);
    
    // Define a opção selecionada automaticamente
    diaSelecionado.value = dataFormatada;
}