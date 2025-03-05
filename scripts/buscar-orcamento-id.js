// Função para buscar um orçamento pelo ID
function getOrcamentoById() {
    const id = document.getElementById('orcamentoId').value;
    if (!id) {
        alert("Por favor, insira um ID.");
        return;
    }

    fetch(`https://public.franciscosensaulas.com/api/v1/trabalho/orcamentos-detalhados/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                document.getElementById('result').innerHTML = `
                    <p>ID: ${data.id}</p>
                    <p>Descrição: ${data.descricao}</p>
                    <p>Valor Estimado: R$ ${data.valorEstimado}</p>
                    <p>Prazos: ${data.prazoDias} dias</p>
                    <p>Cliente: ${data.cliente}</p>
                    <p>Status: ${data.status}</p>
                `;
            } else {
                document.getElementById('result').innerHTML = 'Orçamento não encontrado.';
            }
        })
        .catch(error => console.error('Erro ao buscar orçamento:', error));
}