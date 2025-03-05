    // Função para criar um novo orçamento
    function createOrcamento() {
        const descricao = document.getElementById('orcamentoDescricao').value;
        const valorEstimado = parseFloat(document.getElementById('orcamentoValorEstimado').value.replace(',', '.'));
        const prazoDias = document.getElementById('orcamentoPrazoDias').value;
        const cliente = document.getElementById('orcamentoCliente').value.trim();
        const status = document.getElementById('orcamentoStatus').value.trim();

        if (!descricao || isNaN(valorEstimado) || !prazoDias || !cliente || !status) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        const data = {
            descricao: descricao,
            valorEstimado: valorEstimado,
            prazoDias: prazoDias,
            cliente: cliente,
            status: status
        };

        fetch('https://public.franciscosensaulas.com/api/v1/trabalho/orcamentos-detalhados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                document.getElementById('result').innerHTML = '<div class="alert success">Orçamento criado com sucesso!</div>';
            } else {
                document.getElementById('result').innerHTML = '<div class="alert">Erro ao criar orçamento.</div>';
            }
        })
        .catch(error => {
            console.error('Erro ao criar orçamento:', error);
            document.getElementById('result').innerHTML = '<div class="alert">Erro ao criar orçamento. Tente novamente mais tarde.</div>';
        });
    }