  // Função para buscar todos os orçamentos
  function getAllOrcamentos() {
    fetch('https://public.franciscosensaulas.com/api/v1/trabalho/orcamentos-detalhados')
        .then(response => response.json())
        .then(data => {
            let resultContent = '<h3>Todos os Orçamentos:</h3>';
            data.forEach(item => {
                resultContent += `
                    <p>ID: ${item.id} - Descrição: ${item.descricao} - Valor Estimado: R$ ${item.valorEstimado} - Prazo: ${item.prazoDias} dias - Cliente: ${item.cliente} - Status: ${item.status}</p>
                `;
            });
            document.getElementById('result').innerHTML = resultContent;
        })
        .catch(error => console.error('Erro ao buscar orçamentos:', error));
}
