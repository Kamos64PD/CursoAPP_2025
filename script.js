document.getElementById("mostrarResultados").addEventListener("click", function() {
    let inputs = document.querySelectorAll(".resultado-input");
    let filas = document.querySelectorAll("table tr");

    inputs.forEach((input, index) => {
        let valor = parseFloat(input.value);
        let celdaInterpretacion = filas[index + 1].cells[2]; // Columna "Interpretación"
        celdaInterpretacion.innerHTML = ""; // Limpiar contenido previo

        // Crear 4 bolitas blancas por defecto
        let bolitas = [];
        for (let i = 0; i < 4; i++) {
            let bolita = document.createElement("span");
            bolita.classList.add("circle", "blanco");
            bolitas.push(bolita);
            celdaInterpretacion.appendChild(bolita);
        }

        if (!isNaN(valor)) {
            // Cambiar color de las bolitas según el valor ingresado
            switch (index) {
                case 0: // Glucosa en ayunas
                    if (valor < 100) bolitas[2].classList.replace("blanco", "dorado");
                    else if (valor >= 100 && valor <= 125) bolitas[1].classList.replace("blanco", "amarillo");
                    else if (valor >= 126) bolitas[0].classList.replace("blanco", "naranja");
                    break;

                case 1: // Colesterol Total
                    if (valor < 200) bolitas[2].classList.replace("blanco", "dorado");
                    else if (valor >= 200 && valor <= 239) bolitas[1].classList.replace("blanco", "verde");
                    else if (valor >= 240) bolitas[0].classList.replace("blanco", "amarillo");
                    break;

                case 2: // Colesterol HDL
                    if (valor < 40) bolitas[0].classList.replace("blanco", "naranja");
                    else bolitas[3].classList.replace("blanco", "verde");
                    break;

                case 3: // Colesterol LDL
                    if (valor < 100) bolitas[0].classList.replace("blanco", "naranja");
                    else if (valor >= 100 && valor <= 129) bolitas[3].classList.replace("blanco", "verde");
                    else if (valor >= 130 && valor <= 159) bolitas[2].classList.replace("blanco", "dorado");
                    else if (valor >= 160 && valor <= 189) bolitas[1].classList.replace("blanco", "amarillo");
                    break;

                case 4: // Colesterol VLDL
                    if (valor >= 5 && valor <= 30) bolitas[3].classList.replace("blanco", "verde");
                    else bolitas[1].classList.replace("blanco", "amarillo");
                    break;

                case 5: // Triglicéridos
                    if (valor < 150) bolitas[3].classList.replace("blanco", "verde");
                    else if (valor >= 150 && valor <= 199) bolitas[2].classList.replace("blanco", "dorado");
                    else if (valor >= 200) bolitas[1].classList.replace("blanco", "amarillo");
                    break;

                case 6: // PSA
                    if (valor < 4.0) bolitas[3].classList.replace("blanco", "verde");
                    else bolitas[1].classList.replace("blanco", "amarillo");
                    break;

                case 7: // Insulina
                    if (valor >= 2 && valor <= 25) bolitas[3].classList.replace("blanco", "verde");
                    else bolitas[1].classList.replace("blanco", "amarillo");
                    break;

                case 8: // Cortisol
                    if (valor >= 5 && valor <= 25) bolitas[3].classList.replace("blanco", "verde");
                    else if (valor >= 2 && valor <= 9) bolitas[0].classList.replace("blanco", "naranja");
                    break;

                case 9: // TSH
                    if (valor < 0.4) bolitas[0].classList.replace("blanco", "naranja");
                    else if (valor >= 0.4 && valor <= 4.0) bolitas[3].classList.replace("blanco", "verde");
                    else bolitas[1].classList.replace("blanco", "amarillo");
                    break;

                case 10: // Creatinina (Diferenciado por género)
                    let genero = document.querySelector('input[name="genero"]:checked');
                    if (genero) {
                        let esHombre = genero.value === "hombre";
                        if ((esHombre && valor >= 0.74 && valor <= 1.35) ||
                            (!esHombre && valor >= 0.59 && valor <= 1.04)) {
                            bolitas[3].classList.replace("blanco", "verde");
                        } else {
                            bolitas[1].classList.replace("blanco", "amarillo");
                        }
                    } else {
                        alert("Por favor, selecciona el género.");
                    }
                    break;
            }
        }
    });
});

// Resetear los valores y volver todas las bolitas a blancas
document.getElementById("resetear").addEventListener("click", function() {
    document.querySelectorAll(".resultado-input").forEach(input => {
        input.value = "";
    });

    document.querySelectorAll("table tr td:nth-child(3)").forEach(cell => {
        cell.innerHTML = ""; // Limpiar las interpretaciones

        // Volver a agregar las 4 bolitas blancas en cada fila
        for (let i = 0; i < 4; i++) {
            let bolita = document.createElement("span");
            bolita.classList.add("circle", "blanco");
            cell.appendChild(bolita);
        }
    });
});



