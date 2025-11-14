// Espera o HTML ser totalmente carregado antes de rodar o script
// Isso CORRIGE o bug de não funcionamento
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os itens da lista de competências
    const skillItems = document.querySelectorAll('.competencias-list li');
    
    // CORREÇÃO AQUI: O ID no HTML é "competence-modal"
    const modal = document.getElementById('competence-modal'); 
    
    // Verifica se o modal existe na página antes de continuar
    if (modal) {
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const closeModalBtn = document.getElementById('modal-close-btn');

        // Adiciona o 'display: flex' via JS para garantir que está escondido
        // mas pronto para a animação de 'visible'
        modal.style.display = 'flex';
        
        skillItems.forEach(item => {
            item.addEventListener('click', () => {
                // Pega o título e a descrição do item clicado
                const title = item.innerText;
                const description = item.getAttribute('data-description');
                
                // Popula o modal
                if(modalTitle) modalTitle.innerText = title;
                if(modalDescription) modalDescription.innerText = description;
                
                // Mostra o modal (usando a classe 'visible' do CSS)
                modal.classList.add('visible');
            });
        });

        // Função para fechar o modal
        const closeModal = () => {
            modal.classList.remove('visible');
        };

        // Event Listeners para fechar
        if(closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }
        
        // Fecha o modal se clicar fora do 'modal-content' (no overlay)
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        // Opcional: Fechar o modal com a tecla "Escape"
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('visible')) {
                closeModal();
            }
        });
    } else {
        console.error("Erro: O elemento modal #competence-modal não foi encontrado.");
    }

});