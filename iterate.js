    var i= [{
        "id": 0,
        "nome": "Nome do produto",
        "preco": 562347,
        "tipo": "ENCOMENDA PRÉ-PAGO",
        "imagem":"1.png",
        "sobre":"Sobre a coisa toda e alguma coisa."
            
    },{
        "id": 1,
        "nome": "Produto",
        "preco": 56238,
        "tipo": "ENCOMENDA PRÉ-PAGO",
        "imagem":"2.png",
        "sobre":"Sobre a coisa toda e alguma coisa."
            
    },{
        "id": 2,
        "nome": "Publicidade",
        "preco": 56234,
        "tipo": "ENCOMENDA PRÉ-PAGO",
        "imagem":"3.png",
        "sobre":"Sobre a coisa toda e alguma coisa."
            
    },{
        "id": 3,
        "nome": "Publicidade",
        "preco": 56234,
        "tipo": "ENCOMENDA PRÉ-PAGO",
        "imagem":"4.png",
        "sobre":"Sobre a coisa toda e alguma coisa."
            
    }]

    function iterate(dados=[]){
        var array = [];
        var numeroItens = (dados.length) ;
        dados.forEach((element,key) => {
            
            if((key+1) == numeroItens){
                let item =`
                <div class="card-detalhes-acao">
                    <img src="${element.imagem}" alt="" class="banner">
                    <div>
                        <div class="detalhes" style="text-align:center;">
                            <P>${element.sobre}</P>
                        </div>
                        
                    </div>
                </div>`;
                array.push(item);
                return;
            }

        let item =`<div class="card-detalhes-acao">
        <form id="formulario${element.id}" action="post">

            <img src="${element.imagem}" alt="" class="banner">
            <div>
                <div class="detalhes">
                    <P>Produto: ${element.nome}</P>
                    <P>Preço: ${element.preco} </P>
                </div>
                <button type="button" class="card-abre-collapse btn quero-este"  id="quero${element.id}">QUERO ESTE</button>
            </div>
            <div class="card-collapse" style="display:none"  id="collapse${element.id}">
                <input type="text" required class="inputs" id="nome${element.id}" placeholder="Nome">
                <button type="button" class="card-abre-modal btn"  id="fazer${element.id}">FAZER ENCOMENDA</button>
            </div>
            <div class="card-modal" style="display:none"  id="modal${element.id}">
                <div class="backdrop" id="backdrop${element.id}"></div>
                <div class="relativa">
                    <img src="${element.imagem}" alt="" srcset="">
                    <div class="padding">
                        <input type="hidden"  id="produto${element.id}" value="${element.id}">
                        <input type="number" required class="inputs" id="telefone${element.id}" placeholder="Telefone">
                        <input type="email" required class="inputs" id="email${element.id}"  placeholder="Email">
                        <div class="detalhes">
                            <P>Produto: ${element.nome}</P>
                            <P>Preço: ${element.preco} </P>
                            <P>Tipo de compra: ${element.tipo}</P>
                        </div>                                
                        
                        <button type="submit" class="btn concluir"  id="concluir${element.id}">CONCLUIR PEDIDO</button>
                    </div>
                    <button type="button" class="btn mais-tarde" id="tarde${element.id}"></button>
                </div>
            </div>
        </form>
    </div>`;


    array.push(item);


});

    return array;
}




 

