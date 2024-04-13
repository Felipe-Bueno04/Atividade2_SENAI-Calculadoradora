calcForm.addEventListener("submit", (e) => e.preventDefault()) 

function soma() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    valor1 = valor1.replace(",", ".");
    valor2 = valor2.replace(",", ".");

    if (valor1 && valor2) {
        if (!isNaN(valor1) && !isNaN(valor2)) {
            let valorUm = parseFloat(valor1);
            let valorDois = parseFloat(valor2);
            let calculo = valorUm + valorDois;

            if (!isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = "RESULTADO = " + calculo;
                calcForm.reset();
            } else {
                document.getElementById("resultado").innerHTML = "RESULTADO = ";
            }
        } else {
            alert("Números inválidos, tente novamente!");
            document.getElementById("valor1").focus();
            document.getElementById("valor2").focus();
            document.getElementById("resultado").innerHTML = "RESULTADO = ";
        }
    } else {
        if (valor1) {
            alert("Faltou colocar o segundo valor!");
        } else if (valor2) {
            alert("Faltou colocar o primeiro valor!!");
        } else {
            alert("Os campos estão vazios, tente novamente!");
        }
        document.getElementById("resultado").innerHTML = "";
    }
}

function subtrair() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    valor1 = valor1.replace(",", ".");
    valor2 = valor2.replace(",", ".");

    if (valor1 && valor2) {
        if (!isNaN(valor1) && !isNaN(valor2)) {
            let valorUm = parseFloat(valor1);
            let valorDois = parseFloat(valor2);
            let calculo = valorUm - valorDois;

            if (!isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = "RESULTADO = " + calculo;
                calcForm.reset();
            } else {
                document.getElementById("resultado").innerHTML = "RESULTADO = ";
            }
        } else {
            alert("Números inválidos, tente novamente!");
            document.getElementById("valor1").focus();
            document.getElementById("valor2").focus();
            document.getElementById("resultado").innerHTML = "RESULTADO = ";
        }
    } else {
        if (valor1) {
            alert("Faltou colocar o segundo valor!");
        } else if (valor2) {
            alert("Faltou colocar o primeiro valor!!");
        } else {
            alert("Os campos estão vazios, tente novamente!");
        }
        document.getElementById("resultado").innerHTML = "";
    }    
}

function multiplicar() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    valor1 = valor1.replace(",", ".");
    valor2 = valor2.replace(",", ".");

    if (valor1 && valor2) {
        if (!isNaN(valor1) && !isNaN(valor2)) {
            let valorUm = parseFloat(valor1);
            let valorDois = parseFloat(valor2);
            let calculo = valorUm * valorDois;

            if (!isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = "RESULTADO = " + calculo;
                calcForm.reset();
            } else {
                document.getElementById("resultado").innerHTML = "RESULTADO = ";
            }
        } else {
            alert("Números inválidos, tente novamente!");
            document.getElementById("valor1").focus();
            document.getElementById("valor2").focus();
            document.getElementById("resultado").innerHTML = "RESULTADO = ";
        }
    } else {
        if (valor1) {
            alert("Faltou colocar o segundo valor!");
        } else if (valor2) {
            alert("Faltou colocar o primeiro valor!!");
        } else {
            alert("Os campos estão vazios, tente novamente!");
        }
        document.getElementById("resultado").innerHTML = "";
    }
}

function dividir() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    valor1 = valor1.replace(",", ".");
    valor2 = valor2.replace(",", ".");

    if (valor1 && valor2) {
        if (!isNaN(valor1) && !isNaN(valor2)) {
            let valorUm = parseFloat(valor1);
            let valorDois = parseFloat(valor2);

            if(valorDois !== 0) {
                let calculo = valorUm / valorDois;

                if (isFinite(calculo)) {
                    document.getElementById("resultado").innerHTML = "RESULTADO = " + calculo;
                    calcForm.reset();
                }
            } else {
                alert("Não é possível dividir por zero!");
            }
  
        } else {
            alert("Números inválidos, tente novamente!");
            document.getElementById("valor1").focus();
            document.getElementById("valor2").focus();
            document.getElementById("resultado").innerHTML = "RESULTADO = ";
        }
    } else {
        if (valor1) {
            alert("Faltou colocar o segundo valor!");
        } else if (valor2) {
            alert("Faltou colocar o primeiro valor!!");
        } else {
            alert("Os campos estão vazios, tente novamente!");
        }
        document.getElementById("resultado").innerHTML = "";
    }
}

function potencia() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    valor1 = valor1.replace(",", ".");
    valor2 = valor2.replace(",", ".");

    if (valor1 && valor2) {
        if (!isNaN(valor1) && !isNaN(valor2)) {
            let valorUm = parseFloat(valor1);
            let valorDois = parseFloat(valor2);
            let calculo = valorUm ** valorDois;

            if (!isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = "RESULTADO = " + calculo;
                calcForm.reset();
            } else {
                document.getElementById("resultado").innerHTML = "RESULTADO = ";
            }
        } else {
            alert("Números inválidos, tente novamente!");
            document.getElementById("valor1").focus();
            document.getElementById("valor2").focus();
            document.getElementById("resultado").innerHTML = "RESULTADO = ";
        }
    } else {
        if (valor1) {
            alert("Faltou colocar o segundo valor!");
        } else if (valor2) {
            alert("Faltou colocar o primeiro valor!!");
        } else {
            alert("Os campos estão vazios, tente novamente!");
        }
        document.getElementById("resultado").innerHTML = "";
    }
}

const input1 = document.querySelector("#valor1");
    input1.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Impede o envio do formulário
        }
    });

const input2 = document.querySelector("#valor2");
    input2.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Impede o envio do formulário
        }
    });