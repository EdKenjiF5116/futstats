function somarGol(id){
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    const jogador = jogadores.find(jogador => jogador.id == id)
    jogador.vitorias++
    localStorage.setItem("jogadores", JSON.stringify(jogadores))
    window.location.reload()
}

function subtrairGol(id){
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    const jogador = jogadores.find(jogador => jogador.id == id)
    jogador.vitorias--
    localStorage.setItem("jogadores", JSON.stringify(jogadores))
    window.location.reload()
    
}

function somarAssistencia(id){
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    const jogador = jogadores.find(jogador => jogador.id == id)
    jogador.podios++
    localStorage.setItem("jogadores", JSON.stringify(jogadores))
    window.location.reload()    
}

function subtrairAssistencia(id){
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    const jogador = jogadores.find(jogador => jogador.id == id)
    jogador.podios--
    localStorage.setItem("jogadores", JSON.stringify(jogadores))
    window.location.reload()
    
}