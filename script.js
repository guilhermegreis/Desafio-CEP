document.querySelector('#cep').addEventListener('blur', function() {
  var cep = this.value.replace(/\D/g, '');

  if(cep.length != 8) return;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      if(xhr.status === 200) {
        var endereco = JSON.parse(xhr.responseText);
        document.querySelector('#rua').value = endereco.logradouro;
        document.querySelector('#bairro').value = endereco.bairro;
        document.querySelector('#cidade').value = endereco.localidade;
        document.querySelector('#estado').value = endereco.uf;
        document.querySelector('#ibge').value = endereco.ibge;
      } else {
        alert('CEP não encontrado.');
      }
    }
  };
  xhr.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
  xhr.send();
})