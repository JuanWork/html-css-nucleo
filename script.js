// 🏜️ SISTEMA MIDBAR - INICIALIZAÇÃO CONSCIENTE
// 🌌 Começando com funcionalidades essenciais

console.log('🌵 Iniciando Sistema Midbar...');

// 🎯 FUNÇÃO PRINCIPAL DE INICIALIZAÇÃO
function inicializarSistemaMidbar() {
    console.log('🚀 Inicializando funcionalidades básicas...');
    
    // 📅 ATUALIZAÇÃO DINÂMICA DO ANO
    atualizarAnoCopyright();
    
    // 🎨 INICIALIZAR OUTRAS FUNCIONALIDADES FUTURAS
    // (serão implementadas progressivamente)
    
    console.log('✅ Sistema Midbar inicializado com sucesso!');
}

// 📅 FUNÇÃO: ATUALIZAR ANO DO COPYRIGHT
function atualizarAnoCopyright() {
    const elementoAno = document.getElementById('ano-atual');
    if (elementoAno) {
        const anoAtual = new Date().getFullYear();
        elementoAno.textContent = anoAtual;
        console.log(`📅 Ano atualizado para: ${anoAtual}`);
    } else {
        console.warn('⚠️ Elemento do ano não encontrado');
    }
}

// 🎪 FUNÇÃO: ADICIONAR INTERATIVIDADE À NAVEGAÇÃO
function configurarNavegacaoSuave() {
    const linksNavegacao = document.querySelectorAll('nav a[href^="#"]');
    
    linksNavegacao.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const alvoId = this.getAttribute('href');
            const elementoAlvo = document.querySelector(alvoId);
            
            if (elementoAlvo) {
                elementoAlvo.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log(`🧭 Navegando suavemente para: ${alvoId}`);
            }
        });
    });
}

// 🌟 INICIALIZAR QUANDO A PÁGINA CARREGAR
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM completamente carregado');
    inicializarSistemaMidbar();
    configurarNavegacaoSuave();
});

// 🏜️ MENSAGEM DE STATUS
console.log('🔧 Script Midbar carregado - aguardando DOM...');