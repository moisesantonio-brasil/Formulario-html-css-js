let apr = document.querySelector(".apr")
let form = document.querySelector("form")
let pontofinal = document.querySelector("h4")

let nome = document.querySelector(".nome_input")
let idade = document.querySelector(".idade_input")
let email = document.querySelector(".email_input")
let sexo = document.querySelector("select")

let opt0 = document.querySelector(".vazio0")
let opt1 = document.querySelector(".vazio1")
let opt2 = document.querySelector(".vazio2")
let opt3 = document.querySelector(".vazio3")
let opt4 = document.querySelector(".vazio4")
let opt5 = document.querySelector(".vazio5")
let opt6 = document.querySelector(".vazio6")
let opt7 = document.querySelector(".vazio7")
let opt8 = document.querySelector(".vazio8")
let opt9 = document.querySelector(".vazio9")
let opt10 = document.querySelector(".vazio10")
let opt11 = document.querySelector(".vazio11")
let opt12 = document.querySelector(".vazio12")
let opt13 = document.querySelector(".vazio13")
let opt14 = document.querySelector(".vazio14")

let nota = document.querySelector(".nota")
let notaaluno = document.querySelector(".notadoaluno")

let condiçao_p1 = ""
let condiçao_p2 = ""
let condiçao_p3 = ""
let condiçao_p4 = ""
let condiçao_p5 = ""
let ponto = 0;
let resultado = ponto + 1;


let primeiro = document.querySelector(".primeira_parte")
let segundo = document.querySelector(".segunda_parte")
let terceiro = document.querySelector(".terceira_parte")

let começar = document.querySelector(".começar_btn")
let continuar = document.querySelector(".continuar")
let continuar2 = document.querySelector(".continuar2")
let span = document.querySelector("span")
document.body.appendChild(form);

começar.addEventListener("click", (c) => {
    c.preventDefault();
    const nomevl = nome.value;
    const idadevl = idade.value;
    const emailvl = email.value;
    const sexovl = sexo.value;

    if (nomevl.length < 1) {
        window.alert("adicione o nome no campo nome, localizado abaixo: ")
    } else if (nomevl.length <= 2) {
        window.alert("o nome deve ter no mínimo três caracteres")
    }


    if (emailvl.length < 1) {
        window.alert("adicione o email no campo email, localizado abaixo: ")
    }


    if (idadevl < 1) {
        window.alert("adicione a idade no campo idade, localizado abaixo: ")
    }

    if (nomevl.length > 2 && emailvl.length > 2 && idadevl >= 1) {
        apr.style = "display:none"
        primeiro.style = "display:block;"
    } else {
        location.reload()
    }

    console.log("///Informações de Usuário///")
    console.log("Nome escolhido: " + nomevl)
    console.log("Email escolhido: " + emailvl)
    console.log("Idade: " + idadevl + " anos")
    console.log("Sexualidade: " + sexovl)
})

continuar.addEventListener("click", () => {
    if (condiçao_p1 == "opt0-em-uso") {
        console.log("PERGUNTA01: Triangulo selecionado")
    }
    if (condiçao_p1 == "opt1-em-uso") {
        console.log("PERGUNTA01: Retangulo selecionado")
    }
    if (condiçao_p1 == "opt2-em-uso") {
        console.log("PERGUNTA01: Quadrado selecionado")
    } else if (condiçao_p1 == "") {
        console.log("PERGUNTA01: nenhum item selecionado")
    }
    if (condiçao_p2 == "opt3-em-uso") {
        console.log("PERGUNTA02: Cachorro selecionado")
    }
    if (condiçao_p2 == "opt4-em-uso") {
        console.log("PERGUNTA02: Dinossauro selecionado")
    }
    if (condiçao_p2 == "opt5-em-uso") {
        console.log("PERGUNTA02: Avestruz selecionado")
    } else if (condiçao_p2 == "") {
        console.log("PERGUNTA02: nenhum item selecionado")
    }
    if (condiçao_p3 == "opt6-em-uso") {
        console.log("PERGUNTA03: numero 20 selecionado")
    }
    if (condiçao_p3 == "opt7-em-uso") {
        console.log("PERGUNTA03: numero 30 selecionado")
    }
    if (condiçao_p3 == "opt8-em-uso") {
        console.log("PERGUNTA03: numero 10 selecionado")
    } else if (condiçao_p3 == "") {
        console.log("PERGUNTA03: nenhum item selecionado")
    }

    if (condiçao_p1 == "" || condiçao_p2 == "" || condiçao_p3 == "" || condiçao_p1 == "") {
        window.alert("selecione uma das respostas sugeridas de cada questão")
    } else {
        primeiro.remove()
        segundo.style = "display:block"
    }

})

opt0.addEventListener("click", () => {
    opt0.style = "background-color:salmon;"
    condiçao_p1 = "opt0-em-uso"

    if (condiçao_p1 == "opt0-em-uso") {
        opt0.style = "background-color:salmon;"
        opt1.style = "background-color:silver;"
        opt2.style = "background-color:silver;"
    }
    if (condiçao_p1 == "opt1-em-uso") {
        opt0.style = "background-color:silver;"
        opt1.style = "background-color:salmon;"
        opt2.style = "background-color:silver;"
    }
    if (condiçao_p1 == "opt2-em-uso") {
        opt0.style = "background-color:silver;"
        opt1.style = "background-color:silver;"
        opt2.style = "background-color:salmon;"
    }
})
opt1.addEventListener("click", () => {
    opt1.style = "background-color:salmon;"
    condiçao_p1 = "opt1-em-uso"

    if (condiçao_p1 == "opt1-em-uso") {
        opt0.style = "background-color:silver;"
        opt1.style = "background-color:salmon;"
        opt2.style = "background-color:silver;"
    }
    if (condiçao_p1 == "opt0-em-uso") {
        opt0.style = "background-color:salmon;"
        opt1.style = "background-color:silver;"
        opt2.style = "background-color:silver;"
    }
    if (condiçao_p1 == "opt2-em-uso") {
        opt0.style = "background-color:silver;"
        opt1.style = "background-color:silver;"
        opt2.style = "background-color:salmon;"
    }

})
opt2.addEventListener("click", () => {
    opt2.style = "background-color:salmon;"
    condiçao_p1 = "opt2-em-uso"

    if (condiçao_p1 == "opt0-em-uso") {
        opt0.style = "background-color:salmon;"
        opt1.style = "background-color:silver;"
        opt2.style = "background-color:silver;"
    } if (condiçao_p1 == "opt1-em-uso") {
        opt0.style = "background-color:silver;"
        opt1.style = "background-color:salmon;"
        opt2.style = "background-color:silver;"
    }
    if (condiçao_p1 == "opt2-em-uso") {
        opt0.style = "background-color:silver;"
        opt1.style = "background-color:silver;"
        opt2.style = "background-color:salmon"
    }
})
opt3.addEventListener("click", () => {
    opt3.style = "background-color:lime;"
    condiçao_p2 = "opt3-em-uso"

    if (condiçao_p2 == "opt3-em-uso") {
        opt4.style = "background-color:silver;"
        opt3.style = "background-color:lime;"
        opt5.style = "background-color:silver;"

    } if (condiçao_p2 == "opt4-em-uso") {
        opt3.style = "background-color:silver;"
        opt5.style = "background-color:silver;"
        opt4.style = "background-color:lime;"
    }
    if (condiçao_p2 == "opt5-em-uso") {
        opt5.style = "background-color:lime;"
        opt3.style = "background-color:silver;"
        opt4.style = "background-color:silver;"
    }
})
opt4.addEventListener("click", () => {
    opt4.style = "background-color:lime;"
    condiçao_p2 = "opt4-em-uso"

    if (condiçao_p2 == "opt3-em-uso") {
        opt3.style = "background-color:lime;"
        opt4.style = "background-color:silver;"
        opt5.style = "background-color:silver;"
    }
    if (condiçao_p2 == "opt4-em-uso") {
        opt5.style = "background-color:silver;"
        opt3.style = "background-color:silver;"
        opt4.style = "background-color:lime;"
    }
    if (condiçao_p2 == "opt5-em-uso") {
        opt3.style = "background-color:silver;"
        opt5.style = "background-color:lime;"
        opt4.style = "background-color:silver;"
    }
})
opt5.addEventListener("click", () => {
    opt5.style = "background-color:lime;"
    condiçao_p2 = "opt5-em-uso"

    if (condiçao_p2 == "opt3-em-uso") {
        opt3.style = "background-color:lime;"
        opt4.style = "background-color:silver;"
        opt5.style = "background-color:silver;"
    } if (condiçao_p2 == "opt4-em-uso") {
        opt3.style = "background-color:silver;"
        opt4.style = "background-color:lime;"
        opt5.style = "background-color:silver;"
    }
    if (condiçao_p2 == "opt5-em-uso") {
        opt3.style = "background-color:silver;"
        opt4.style = "background-color:silver;"
        opt5.style = "background-color:lime"
    }
})
opt6.addEventListener("click", () => {
    opt6.style = "background-color:teal;"
    condiçao_p3 = "opt6-em-uso"

    if (condiçao_p3 == "opt6-em-uso") {
        opt7.style = "background-color:silver;"
        opt6.style = "background-color:teal;"
        opt8.style = "background-color:silver;"

    } if (condiçao_p3 == "opt7-em-uso") {
        opt6.style = "background-color:silver;"
        opt8.style = "background-color:silver;"
        opt7.style = "background-color:teal;"
    }
    if (condiçao_p3 == "opt8-em-uso") {
        opt8.style = "background-color:teal;"
        opt7.style = "background-color:silver;"
        opt6.style = "background-color:silver;"
    }
})
opt7.addEventListener("click", () => {
    opt7.style = "background-color:teal;"
    condiçao_p3 = "opt7-em-uso"

    if (condiçao_p3 == "opt6-em-uso") {
        opt6.style = "background-color:teal;"
        opt7.style = "background-color:silver;"
        opt8.style = "background-color:silver;"
    }
    if (condiçao_p3 == "opt7-em-uso") {
        opt6.style = "background-color:silver;"
        opt8.style = "background-color:silver;"
        opt7.style = "background-color:teal;"
    }
    if (condiçao_p3 == "opt8-em-uso") {
        opt6.style = "background-color:silver;"
        opt8.style = "background-color:teal;"
        opt7.style = "background-color:silver;"
    }
})
opt8.addEventListener("click", () => {
    opt8.style = "background-color:teal;"
    condiçao_p3 = "opt8-em-uso"

    if (condiçao_p3 == "opt6-em-uso") {
        opt6.style = "background-color:teal;"
        opt7.style = "background-color:silver;"
        opt8.style = "background-color:silver;"
    } if (condiçao_p3 == "opt7-em-uso") {
        opt6.style = "background-color:silver;"
        opt7.style = "background-color:teal;"
        opt8.style = "background-color:silver;"
    }
    if (condiçao_p3 == "opt8-em-uso") {
        opt6.style = "background-color:silver;"
        opt7.style = "background-color:silver;"
        opt8.style = "background-color:teal"
    }
})
opt9.addEventListener("click", () => {
    opt9.style = "  background-color: slateblue;"
    condiçao_p4 = "opt9-em-uso"

    if (condiçao_p4 == "opt9-em-uso") {
        opt9.style = "background-color:slateblue;"
        opt10.style = "background-color:silver;"
        opt11.style = "background-color:silver;"
    } if (condiçao_p4 == "opt10-em-uso") {
        opt9.style = "background-color:silver;"
        opt10.style = "background-color:slateblue;"
        opt11.style = "background-color:silver;"
    }
    if (condiçao_p4 == "opt11-em-uso") {
        opt9.style = "background-color:silver;"
        opt10.style = "background-color:silver;"
        opt11.style = "background-color:slateblue"
    }
})
opt10.addEventListener("click", () => {
    opt10.style = "  background-color: slateblue;"
    condiçao_p4 = "opt10-em-uso"

    if (condiçao_p4 == "opt9-em-uso") {
        opt9.style = "background-color:slateblue;"
        opt10.style = "background-color:silver;"
        opt11.style = "background-color:silver;"
    } if (condiçao_p4 == "opt10-em-uso") {
        opt9.style = "background-color:silver;"
        opt10.style = "background-color:slateblue;"
        opt11.style = "background-color:silver;"
    }
    if (condiçao_p4 == "opt11-em-uso") {
        opt10.style = "background-color:silver;"
        opt9.style = "background-color:silver;"
        opt11.style = "background-color:slateblue"
    }
})
opt11.addEventListener("click", () => {
    opt11.style = "  background-color: royalblue;"
    condiçao_p4 = "opt11-em-uso"

    if (condiçao_p4 == "opt9-em-uso") {
        opt9.style = "  background-color: royalblue;"
        opt10.style = "background-color:silver;"
        opt11.style = "background-color:silver;"
    } if (condiçao_p4 == "opt10-em-uso") {
        opt9.style = "background-color:silver;"
        opt10.style = "  background-color: royalblue;"
        opt11.style = "background-color:silver;"
    }
    if (condiçao_p4 == "opt11-em-uso") {
        opt9.style = "background-color:silver;"
        opt10.style = "background-color:silver;"
        opt11.style = "  background-color: royalblue;"
    }
})
opt12.addEventListener("click", () => {
    opt12.style = "background-color: royalblue;"
    condiçao_p5 = "opt12-em-uso"

    if (condiçao_p5 == "opt12-em-uso") {
        opt12.style = "  background-color: royalblue;"
        opt13.style = "background-color:silver;"
        opt14.style = "background-color:silver;"
    } if (condiçao_p5 == "opt13-em-uso") {
        opt12.style = "background-color:silver;"
        opt13.style = "  background-color: royalblue;"
        opt14.style = "background-color:silver;"
    }
    if (condiçao_p5 == "opt14-em-uso") {
        opt12.style = "background-color:silver;"
        opt13.style = "background-color:silver;"
        opt14.style = "  background-color: royalblue;"
    }
})
opt13.addEventListener("click", () => {
    opt13.style = " background-color: royalblue;"
    condiçao_p5 = "opt13-em-uso"

    if (condiçao_p5 == "opt12-em-uso") {
        opt12.style = "  background-color: royalblue;"
        opt13.style = "background-color:silver;"
        opt14.style = "background-color:silver;"
    } if (condiçao_p5 == "opt13-em-uso") {
        opt12.style = "background-color:silver;"
        opt13.style = "  background-color: royalblue;"
        opt14.style = "background-color:silver;"
    }
    if (condiçao_p5 == "opt14-em-uso") {
        opt12.style = "background-color:silver;"
        opt13.style = "background-color:silver;"
        opt14.style = "  background-color: royalblue;"
    }
})
opt14.addEventListener("click", () => {
    opt14.style = "background-color: royalblue;"
    condiçao_p5 = "opt14-em-uso"

    if (condiçao_p5 == "opt12-em-uso") {
        opt12.style = "  background-color: royalblue;"
        opt13.style = "background-color:silver;"
        opt14.style = "background-color:silver;"
    } if (condiçao_p5 == "opt13-em-uso") {
        opt12.style = "background-color:silver;"
        opt13.style = "  background-color: royalblue;"
        opt14.style = "background-color:silver;"
    }
    if (condiçao_p5 == "opt14-em-uso") {
        opt12.style = "background-color:silver;"
        opt13.style = "background-color:silver;"
        opt14.style = "  background-color: royalblue;"
    }
})



continuar2.addEventListener("click", () => {

    if (condiçao_p4 == "opt9-em-uso") {
        console.log("PERGUNTA04: Coelho selecionado")
    }
    if (condiçao_p4 == "opt10-em-uso") {
        console.log("PERGUNTA04: Galinha selecionado")
    }
    if (condiçao_p4 == "opt11-em-uso") {
        console.log("PERGUNTA04: Rato selecionado")
    } else if (condiçao_p4 == "") {
        console.log("PERGUNTA04: nenhum item selecionado")
    }
    if (condiçao_p5 == "opt12-em-uso") {
        console.log("PERGUNTA05: Laranja selecionado")
    }
    if (condiçao_p5 == "opt13-em-uso") {
        console.log("PERGUNTA05: Maça selecionado")
    }
    if (condiçao_p5 == "opt14-em-uso") {
        console.log("PERGUNTA05: Pêra selecionado")
    } else if (condiçao_p5 == "") {
        console.log("PERGUNTA05: nenhum item selecionado")
    }

    if (condiçao_p1 == "opt2-em-uso") {
        ponto++;
    }
    if (condiçao_p2 == "opt4-em-uso") {
        ponto++;
    }
    if (condiçao_p3 == "opt6-em-uso") {
        ponto++;
    }
    if (condiçao_p4 == "opt11-em-uso") {
        ponto++;
    }
    if (condiçao_p5 == "opt12-em-uso") {
        ponto++;
    }
    if (ponto >= 5) {
        span.textContent = "PARABÉNS VOCÊ ACERTOU TODAS"
        terceiro.style.cssText = "display:block;background-color:lightgreen;"
        pontofinal.textContent = "Total de acertos: " + ponto;
    }
    if (ponto <= 2) {
        span.textContent = "LAMENTO MAIS VOCÊ NÃO ACERTOU MUITAS"
        terceiro.style.cssText = "display:block;background-color:tomato;"
        pontofinal.textContent = "Total de acertos: " + ponto;
    }

    if (ponto == 3 || ponto == 4) {
        span.textContent = "MUITO BEM VOCÊ ACERTOU A MAIORIA"
        terceiro.style.cssText = "display:block;background-color:royalblue;"
        pontofinal.textContent = "Total de acertos: " + ponto;
    }

    if (condiçao_p4 == "" || condiçao_p5 == "") {
        window.alert("selecione uma das respostas sugeridas de cada questão")
    } else {
        segundo.remove()
    }


})
terceiro.addEventListener("click", (a) => {
    a.preventDefault()
    const nomevl = nome.value;
    terceiro.remove()
    nota.style = "display:block";
    notaaluno.textContent = "Obrigado " + nomevl + " por testar meu projeto de Formulário...";

})



