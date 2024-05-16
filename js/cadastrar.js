document.querySelector("#botao-cadastrar").addEventListener("click", () => {

        const form = document.querySelector("form")

        const jogador = {
            id: "id" + new Date().getTime(),
            nome: document.querySelector("#nome").value,
            nota: document.querySelector("#pontuacao").value,
            escuderia: document.querySelector("#escuderia").value,
            vitorias: document.querySelector("#vitorias").value,
            podios: document.querySelector("#podios").value,
            foto: document.querySelector("#foto").value
        }

        salvar(jogador)
    })
    
    function salvar(jogador){
        const jogadores= JSON.parse(localStorage.getItem("jogadores")) || []
        jogadores.push(jogador)
        localStorage.setItem("jogadores", JSON.stringify(jogadores))
        window.location="index.html"

    }
