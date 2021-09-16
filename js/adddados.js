(function(){

    // Pega dados 
        firebase.database().ref('Lista de Produtos').once('value',
         function(AllRecords){
            AllRecords.forEach(
                 function(CurrentRecord){
                    var data = CurrentRecord.val().data;
                    var produto = CurrentRecord.val().produto;
                    var identificador = CurrentRecord.val().identificador;
                    var nf = CurrentRecord.val().nf;
                    var valor = CurrentRecord.val().valor;
                    var forma = CurrentRecord.val().forma;
                    var parcela = CurrentRecord.val().parcela;
                    var meio = CurrentRecord.val().meio;
                    var transportadora = CurrentRecord.val().transportadora;
                    var valorfrete = CurrentRecord.val().valorfrete;
                    var descricao = CurrentRecord.val().descricao; 
                    var deletar = CurrentRecord.val().deletar;
                    

                    var chave = CurrentRecord.key;
                    AddTable(data, produto, identificador, nf, valor, forma, parcela, meio, transportadora, valorfrete, descricao, deletar, chave); // Criar função para pegar a variável local e transformar em Global
                }
            );
        });
    
        // Variável com o dado 'False ou True'
        function AddTable(data, produto, identificador, nf, valor, forma, parcela, meio, transportadora, valorfrete, descricao, deletar, chave){
            
        var apiKey = chave;

        // Construindo a Tabela
    
        var tbody = document.querySelector('#tbody1');
        var trow = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        var td8 = document.createElement('td');
        var td9 = document.createElement('td');
        var td10 = document.createElement('td');
        var td11 = document.createElement('td');
        var td12 = document.createElement('td');

    
        td1.innerHTML = data;
        td2.innerHTML = produto;
        td3.innerHTML = identificador;
        td4.innerHTML = nf;
        td5.innerHTML = valor;
        td6.innerHTML = forma;
        td7.innerHTML = parcela;
        td8.innerHTML = meio;
        td9.innerHTML = transportadora;
        td10.innerHTML = valorfrete;
        td11.innerHTML = descricao;
        td12.innerHTML = '<button type="submit" class="btn red"><i class="material-icons">X</i></button>';
    


        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);
        trow.appendChild(td5);
        trow.appendChild(td6);
        trow.appendChild(td7);
        trow.appendChild(td8);
        trow.appendChild(td9);
        trow.appendChild(td10);
        trow.appendChild(td11);
        trow.appendChild(td12);
        tbody.appendChild(trow);

        // Sem quebra de linha no Telefone
        td4.style.whiteSpace =  'nowrap';
    
        td12.onclick = function(){
            var resultado = confirm('Deseja Realmente remover o produto ' + produto + '?');
            if(resultado){
              var apiKeyContato = apiKey;
              trow.remove();
              firebase.database().ref('Lista de Produtos').child(apiKeyContato).remove();
              var toastHTML = '<span class="span">Informação deletada com Sucesso!</span>';
              M.toast({html: toastHTML})
            }else{
              window.location.replace('sistema.html') 
            }
    
           }       
      }    

})()
    