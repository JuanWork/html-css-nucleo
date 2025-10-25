// 🌌 SERVIDOR DO NÚCLEO - HTML/CSS/JS
const http = require('http');
const fs = require('fs');
const path = require('path');

console.log('🌌 Iniciando servidor do núcleo...');
console.log('📁 Diretório:', __dirname);

const server = http.createServer((req, res) => {
    console.log('📡 Recebida requisição:', req.method, req.url);
    
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }
    
    const extname = String(path.extname(filePath)).toLowerCase();
    let contentType = 'text/html';
    
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.ico': 'image/x-icon'
    };
    
    contentType = mimeTypes[extname] || 'text/plain';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>404 - Não Encontrado</title>
                        <style>
                            body { 
                                font-family: Arial, sans-serif; 
                                background: #1a1a1a; 
                                color: #fff; 
                                padding: 2rem;
                            }
                            h1 { color: #ff6b6b; }
                        </style>
                    </head>
                    <body>
                        <h1>🌌 Arquivo não encontrado no núcleo</h1>
                        <p><strong>Caminho:</strong> ${filePath}</p>
                        <a href="/" style="color: #4fc3f7;">↩ Voltar ao início</a>
                    </body>
                    </html>
                `);
            } else {
                res.writeHead(500);
                res.end('Erro interno do servidor: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log('🚀 SERVIDOR ATIVO!');
    console.log('📍 Acesse: http://localhost:' + PORT);
    console.log('💡 Pressione Ctrl+C para parar');
    console.log('🌌 Aguardando conexões...');
});

// Capturar Ctrl+C para fechar gracefully
process.on('SIGINT', () => {
    console.log('\n🛑 Recebido Ctrl+C - Encerrando servidor...');
    server.close(() => {
        console.log('🌌 Servidor encerrado. Até a próxima!');
        process.exit(0);
    });
});
