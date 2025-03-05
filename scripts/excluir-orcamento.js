// Função para excluir um orçamento
function deleteOrcamento() {
    const id = document.getElementById('orcamentoIdDelete').value;

    if (!id) {
        alert("Por favor, insira um ID.");
        return;
    }

    fetch(`https://public.franciscosensaulas.com/api/v1/trabalho/orcamentos-detalhados/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('result').innerHTML = '<div class="alert success">Orçamento excluído com sucesso!</div>';
        } else {
            document.getElementById('result').innerHTML = '<div class="alert">Erro ao excluir orçamento. Verifique o ID.</div>';
        }
    })
    .catch(error => {
        console.error('Erro ao excluir orçamento:', error);
        document.getElementById('result').innerHTML = '<div class="alert">Erro ao excluir orçamento.</div>';
    });
}



function deleteOrcamento() {
    // Pega o ID do orçamento a ser excluído
    const orcamentoId = document.getElementById('orcamentoIdDelete').value;

    // Verifica se o ID foi fornecido
    if (!orcamentoId) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Por favor, insira um ID válido para excluir o orçamento.',
        });
        return;
    }

    // Confirmação para excluir o orçamento
    Swal.fire({
        title: 'Tem certeza?',
        text: `Você realmente deseja excluir o orçamento com ID ${orcamentoId}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sim, excluir!',
    }).then((result) => {
        if (result.isConfirmed) {
            // Simulação da exclusão do orçamento (aqui você pode fazer uma requisição DELETE)
            // Exemplo de código para realizar a exclusão via fetch (em um cenário real):
            // fetch('/api/orcamentos/' + orcamentoId, { method: 'DELETE' })
            //    .then(response => response.json())
            //    .then(data => {
            //        Swal.fire('Excluído!', 'O orçamento foi excluído com sucesso!', 'success');
            //    })
            //    .catch(error => {
            //        Swal.fire('Erro!', 'Ocorreu um erro ao excluir o orçamento.', 'error');
            //    });

            // Simulação de sucesso na exclusão
            Swal.fire({
                icon: 'success',
                title: 'Excluído!',
                text: `O orçamento com ID ${orcamentoId} foi excluído com sucesso.`,
            }).then(() => {
                // Limpar o campo de entrada após a exclusão
                document.getElementById('orcamentoIdDelete').value = '';
            });
        }
    });
}
