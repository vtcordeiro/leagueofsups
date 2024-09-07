function pesquisar() {

    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")
   
   let campoPesquisa = document.getElementById ("campo-pesquisa").value.toLowerCase()

   if (!campoPesquisa) {
    section.innerHTML = "Nada foi encontrado"
    
    return
   }
   
    // Inicializa uma string vazia para armazenar os resultados    
    let resultados = ""
        
    //laço de repeticao
    for (let dado of suportes) {
        // SE titulto incluir nome
        if (dado.nome.includes(campoPesquisa)) {

    // Cria o HTML para cada resultado
    resultados += `        
                
                <div class="item-resultado">
                    <h2>
                        <a href=${dado.link} target="_blank">${dado.nome.charAt(0).toUpperCase() + dado.nome.slice(1)}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="descricao-meta"><strong>Facilidade de jogar: </strong>${dado.facilidade}</p>
                    <p class="descricao-meta"><strong>Estilo de jogo: </strong>${dado.estilo}</p>
                    <p class="descricao-meta"><strong>Boa sinergia com: </strong>${dado.sinergiaCom}</p>
                    <p class="descricao-meta"><strong>Countera: </strong>${dado.countera}</p>
                    <p class="descricao-meta"><strong>É counterado por: </strong>${dado.eCounteradaPor}</p>
                </div>
                `
        }
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados
                
}






