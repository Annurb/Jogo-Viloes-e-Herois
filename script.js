let res = window.document.getElementById("res")
let rodada = 0
let personagem = ["", "", ""]

function comecar(){
    res.innerHTML = ""
    if(rodada >= 3){
        let viloes = ["", "", ""]
        let forcaPersonagem = 0
        let forcaViloes = 0
    
        res.innerHTML = ""
    
        let viloesPossiveis = ["Darth Vader", "Voldemort", "Hannibal Lecter", "Locki", "Doutor Destino", "Venom", "Doutor Octopus", "Electro", "Thanos"]
    
        // Gerar vilões
        for(let i = 0; i < 3; i++){
            let indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length)
            viloes[i] = viloesPossiveis[indiceAleatorio]
            forcaViloes += Math.floor(Math.random() * 10) + 1
            forcaPersonagem += Math.floor(Math.random() * 10) + 1
        }
    

        //Comparar a força dos dois times
        if(forcaPersonagem >forcaViloes){
            res.innerHTML = "Seu time é muito forte! Você ganhou a disputa de cabo de guerra! Sua força foi " + forcaPersonagem
        }else{
            if(forcaPersonagem< forcaViloes){
                res.innerHTML = "Seu time é fraquinho! O computador ganhou o cabo de guerra com força de " + forcaViloes
            }else{
             res.innerHTML ="Os dois times tem a mesma força, os times empataram!"
            }
        }
        res.innerHTML += `</p>Seus personagens foram: ${personagem.join(", ")}`
        res.innerHTML += `<p>Os vilões foram: ${viloes.join(", ")}</p>`

        let voltar = document.createElement("input")
        voltar.type = "button"
        voltar.value = "Voltar"
        voltar.onclick = function(){
            rodada = 0
            comecar()
        }
        res.appendChild(voltar)
        return;
    }
    
    res.innerHTML += `<p>Digite o nome do seu personagem ${rodada + 1}:</p>`

    let input = document.createElement("input")
    input.type = "text"
    input.id = "input"

    let botao = document.createElement("input")
    botao.type = "button"
    botao.value = "Escolher"

    res.appendChild(input)
    res.appendChild(botao)

    botao.onclick = function(){
        let nome = input.value
        if(nome == ""){
            alert("[ERRO] Por favor, digite um nome!")
        } else {
            personagem[rodada] = nome
            rodada++
            comecar()
            botao.disabled = true
        }
    }
}