
async function buscarOrcamento() {
    const id = document.getElementById('orcamentoIdUpdate').value;

    // Verificar se o ID não está vazio antes de fazer a requisição
    if (id) {
        try {
            const response = await fetch(`https://public.franciscosensaulas.com/api/v1/trabalho/orcamentos-detalhados/${id}`);

            if (response.ok) {
                const data = await response.json();
                // Exibir as informações do orçamento
                document.getElementById('orcamentoDescricaoUpdate').value = data.descricao || '';
                document.getElementById('orcamentoValorEstimadoUpdate').value = data.valorEstimado || '';
                document.getElementById('orcamentoPrazoDiasUpdate').value = data.prazoDias || '';
                document.getElementById('orcamentoClienteUpdate').value = data.cliente || '';
                document.getElementById('orcamentoStatusUpdate').value = data.status || '';

                // Exibir a seção com informações do orçamento
                document.getElementById('orcamentoIdInfo').textContent = data.id || '';
                document.getElementById('orcamentoDescricaoInfo').textContent = data.descricao || '';
                document.getElementById('orcamentoValorEstimadoInfo').textContent = data.valorEstimado || '';
                document.getElementById('orcamentoPrazoDiasInfo').textContent = data.prazoDias || '';
                document.getElementById('orcamentoClienteInfo').textContent = data.cliente || '';
                document.getElementById('orcamentoStatusInfo').textContent = data.status || '';

                // Mostrar a seção com as informações do orçamento
                document.getElementById('orcamentoInfo').style.display = 'block';
            } else {
                // Caso a resposta não seja OK, ocultar a seção
                document.getElementById('orcamentoInfo').style.display = 'none';
                alert('Orçamento não encontrado!');
            }
        } catch (error) {
            console.error('Erro ao buscar o orçamento:', error);
            alert('Erro ao buscar o orçamento!');
        }
    } else {
        // Ocultar a seção se o ID estiver vazio
        document.getElementById('orcamentoInfo').style.display = 'none';
    }
}

async function updateOrcamento() {
    // Obter os valores dos campos
    const id = document.getElementById('orcamentoIdUpdate').value;
    const descricao = document.getElementById('orcamentoDescricaoUpdate').value;
    const valorEstimado = document.getElementById('orcamentoValorEstimadoUpdate').value;
    const prazoDias = document.getElementById('orcamentoPrazoDiasUpdate').value;
    const cliente = document.getElementById('orcamentoClienteUpdate').value;
    const status = document.getElementById('orcamentoStatusUpdate').value;

    // Montar o corpo da requisição
    const requestData = {
        descricao: descricao,
        valorEstimado: valorEstimado,
        prazoDias: prazoDias,
        cliente: cliente,
        status: status
    };

    try {
        // Enviar a requisição PUT para a API
        const response = await fetch(`https://public.franciscosensaulas.com/api/v1/trabalho/orcamentos-detalhados/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        });

        if (response.ok) {
            alert('Orçamento atualizado com sucesso!');
            limparCampos(); // Limpar os campos após o cadastro
        } else {
            alert('Erro ao atualizar orçamento.');
        }
    } catch (error) {
        console.error('Erro ao enviar a requisição:', error);
        alert('Erro ao enviar a requisição.');
    }
}

// Função para limpar os campos do formulário
function limparCampos() {
    document.getElementById('orcamentoIdUpdate').value = '';
    document.getElementById('orcamentoDescricaoUpdate').value = '';
    document.getElementById('orcamentoValorEstimadoUpdate').value = '';
    document.getElementById('orcamentoPrazoDiasUpdate').value = '';
    document.getElementById('orcamentoClienteUpdate').value = '';
    document.getElementById('orcamentoStatusUpdate').value = '';
    document.getElementById('orcamentoInfo').style.display = 'none'; // Ocultar as informações
}
