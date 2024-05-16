function apagar(id){
        document.querySelector(`#${id}`)
        document
            .querySelector(`#${id}`)
            .addEventListener( () => 
                document.querySelector(`#${id}`).remove())
        
        const jogadores= JSON.parse(localStorage.getItem("jogadores")) || []
        const tarefasAtualizadas = jogadores.filter((t) => t.id !== id)
        localStorage.setItem("jogadores", JSON.stringify(tarefasAtualizadas))
    
    }