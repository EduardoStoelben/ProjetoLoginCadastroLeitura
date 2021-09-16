$(function(){

    document.querySelector('#formulario').addEventListener('submit', submitForm);
    
    function submitForm(e){
        e.preventDefault();

        var itemProduto = document.querySelector('#produto');
        var itemIdentificador = document.querySelector('#identificador');
		var itemData = document.querySelector('#data');
		var itemNf = document.querySelector('#nf');
		var itemValor = document.querySelector('#valor');
		var itemTransportadora = document.querySelector('#transportadora');
		var itemValorfrete = document.querySelector('#valorfrete');
		var itemMeio = document.querySelector('#meio');
        var itemForma = document.querySelector('#forma');
        var itemDescricao = document.querySelector('#descricao');
		var itemParcela = document.querySelector('#parcela');

        // Valores
        var produto = itemProduto.value;
        var identificador = itemIdentificador.value;
		var data = itemData.value;
		var nf = itemNf.value;
		var valor = itemValor.value;
		var transportadora = itemTransportadora.value;
		var valorfrete = itemValorfrete.value;
		var meio = itemMeio.value;
        var forma = itemForma.value;
        var descricao = itemDescricao.value;
		var parcela = itemParcela.value;

    
        // Salva os Dados
        saveMessage(produto, identificador, data, nf, valor, transportadora,valorfrete, meio, forma, descricao, parcela);
    }
    
    // Referências de mensagem
    var mensagemRef = firebase.database().ref('Lista de Produtos');
    

    // Salva as mensagens
    function saveMessage(produto, identificador, data, nf, valor, transportadora, valorfrete, meio, forma, descricao, parcela){
        var newMensagemRef = mensagemRef.push();
        newMensagemRef.set({
            produto: produto,
            identificador: identificador,
			data:data,
			nf:nf,
			valor:valor,
			transportadora:transportadora,
			valorfrete:valorfrete,
			meio:meio,
            forma:forma,
            descricao:descricao,
			parcela:parcela
        });
        }
})


function logout() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut()
      }    
  }
