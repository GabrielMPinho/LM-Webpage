# Deploy - Site LM

## 1. Resumo tecnico do site

O Site LM e um site institucional em formato single-page application. Ele apresenta a LM/LM2Rodas em secoes de conteudo como hero, quem somos, numeros, historia, marcas, logistica, valores, depoimentos, carreiras, contato e rodape.

### Tecnologias principais

- React 18: biblioteca usada para montar a interface do site em componentes.
- TypeScript/TSX: linguagem usada nos componentes React, com tipagem para reduzir erros durante desenvolvimento.
- Vite 6: ferramenta de desenvolvimento e build. Gera a pasta final `dist/` para publicacao.
- Tailwind CSS 4: utilitarios de estilo usados no layout e responsividade.
- CSS customizado: arquivos em `src/styles/` com tema, fontes e estilos globais.
- Motion: biblioteca usada para animacoes de entrada, transicoes e efeitos durante rolagem.
- Lucide React: biblioteca de icones usada em botoes, informacoes de contato e elementos visuais.
- MUI Icons: pacote de icones instalado como dependencia complementar.
- React Slick / Slick Carousel: dependencia usada/disponivel para carrosseis.
- Radix UI: conjunto de componentes base de interface dentro de `src/app/components/ui/`.

### Estrutura do projeto

- `src/main.tsx`: ponto de entrada da aplicacao React.
- `src/app/App.tsx`: organiza todas as secoes principais da pagina.
- `src/app/components/`: componentes visuais do site.
- `src/app/components/Contact.tsx`: formulario de contato.
- `src/app/components/ui/`: componentes reutilizaveis de interface.
- `src/styles/`: arquivos globais de CSS, tema e fontes.
- `public/`: arquivos estaticos copiados para producao, como logos, imagens, video, SVGs e PHP do formulario.
- `public/api/contact.php`: endpoint PHP que recebe o formulario e repassa para o n8n.
- `public/api/contact.config.example.php`: exemplo de configuracao da URL do webhook n8n.
- `dist/`: pasta gerada pelo comando de build. E essa pasta que deve ser publicada no servidor.

### Como o site funciona em producao

O site e publicado como arquivos estaticos:

- `index.html`
- arquivos JS e CSS gerados pelo Vite
- imagens e videos da pasta `public/`
- endpoint PHP do formulario em `/api/contact.php`

Nao e necessario manter um servidor Node.js rodando em producao. O Node/npm sao necessarios apenas para instalar dependencias e gerar o build.

O Vite esta configurado com `base: './'` para permitir que o site funcione tanto na raiz do dominio quanto em uma subpasta, como `/sitenovo/`. Por isso, o build deve referenciar arquivos com caminhos relativos, como `./assets/...`, e nao com caminhos absolutos, como `/assets/...`.

### Dependencias de runtime no servidor

Para subir apenas o site institucional, sera necessario:

- Apache ou LiteSpeed servindo `public_html/`
- SSL ativo para o dominio
- `.htaccess` habilitado para redirecionamento HTTPS e fallback da SPA

Para o formulario funcionar futuramente, tambem sera necessario:

- PHP habilitado
- extensao PHP cURL habilitada
- acesso do servidor HostGator ao n8n

### Formulario de contato

O formulario nao deve bloquear o deploy inicial do site. O site pode ser publicado mesmo que o envio do formulario ainda nao esteja funcionando.

O navegador nao chama mais o webhook do n8n diretamente. O fluxo correto e:

```text
Usuario envia formulario
-> site chama /api/contact.php
-> PHP valida os campos
-> PHP envia os dados para o webhook do n8n
-> n8n executa a automacao
```

Isso evita:

- exposicao da URL real do webhook no JavaScript
- problemas de CORS
- mixed content
- tentativa de acesso a IP privado pelo navegador do visitante

Para ativar o formulario no futuro, o servidor precisa ter o arquivo:

```text
public_html/api/contact.config.php
```

com a URL real do webhook que seja acessivel a partir do servidor HostGator.

Exemplo com n8n rodando no proprio servidor dedicado:

```php
<?php

$n8nWebhookUrl = 'http://127.0.0.1:5678/webhook/contato-site-lm';
```

Exemplo com VPN/tunel para o n8n interno:

```php
<?php

$n8nWebhookUrl = 'http://192.168.x.x:5678/webhook/contato-site-lm';
```

Observacao: o arquivo PHP atual exige URL HTTPS por seguranca. Se a decisao for chamar n8n local (`127.0.0.1`) ou via VPN HTTP, essa validacao precisara ser ajustada antes de ativar o formulario.

## 2. Guia passo a passo de deploy

### 1. Preparar o projeto no computador

Abra o terminal na pasta do projeto:

```bash
cd "caminho/para/Site LM"
```

Instale as dependencias, se ainda nao estiverem instaladas:

```bash
npm install
```

Gere o build de producao:

```bash
npm run build
```

Ao final, o Vite vai criar/atualizar a pasta:

```text
dist/
```

Essa pasta contem os arquivos que vao para o servidor.

### 2. Conferir o conteudo gerado

Dentro de `dist/`, devem existir arquivos como:

```text
dist/index.html
dist/assets/...
dist/videoHero.mp4
dist/warehouse/...
dist/api/contact.php
dist/api/contact.config.example.php
```

Importante: a pasta `dist/` nao deve ser enviada como uma subpasta para o site. O conteudo dela deve ir diretamente para `public_html/`.

Correto para publicar na raiz do dominio:

```text
public_html/index.html
public_html/assets/...
public_html/api/contact.php
```

Correto para publicar temporariamente em uma subpasta, como `/sitenovo/`:

```text
public_html/sitenovo/index.html
public_html/sitenovo/assets/...
public_html/sitenovo/api/contact.php
```

Incorreto quando a intencao for publicar na raiz:

```text
public_html/dist/index.html
```

### 3. Preparar o dominio no WHM/cPanel

No WHM:

1. Criar ou validar a conta cPanel do dominio.
2. Confirmar que o document root do dominio e `public_html/`.
3. Garantir que o dominio principal e `www` apontem para a mesma conta.
4. Habilitar AutoSSL/Let's Encrypt.
5. Validar que o servidor web tem suporte a:
   - HTTPS
   - `.htaccess`
   - redirecionamento com `mod_rewrite`

PHP e cURL so precisam ser validados nesta etapa se o formulario for ativado junto com o deploy.

No DNS:

1. Apontar o registro `A` do dominio raiz para o IP do servidor dedicado.
2. Apontar `www` para o mesmo IP ou criar `CNAME` para o dominio raiz.
3. Preservar MX, SPF, DKIM e DMARC se o e-mail corporativo estiver em outro provedor.

### 4. Enviar arquivos para o servidor

Acesse o cPanel ou SFTP e abra:

```text
public_html/
```

Envie todo o conteudo da pasta local `dist/` para dentro de `public_html/`.

Depois do envio, a estrutura deve ficar parecida com:

```text
public_html/index.html
public_html/assets/
public_html/api/contact.php
public_html/api/contact.config.example.php
public_html/videoHero.mp4
public_html/warehouse/
public_html/logo.png
```

### 5. Opcional: configurar o formulario com n8n

Esta etapa nao e obrigatoria para subir o site. Se o formulario ficar para depois, pule para o passo 6.

No servidor, dentro de:

```text
public_html/api/
```

crie o arquivo:

```text
contact.config.php
```

Conteudo:

```php
<?php

$n8nWebhookUrl = 'URL-DO-WEBHOOK-N8N';
```

Troque `URL-DO-WEBHOOK-N8N` pela URL real do webhook.

Existem duas possibilidades principais:

1. Instalar o n8n no proprio servidor dedicado da HostGator.

   Nesse caso, o PHP chama o webhook localmente:

   ```php
   <?php

   $n8nWebhookUrl = 'http://127.0.0.1:5678/webhook/contato-site-lm';
   ```

2. Criar VPN/tunel entre o servidor HostGator e a rede interna onde o n8n ja roda.

   Nesse caso, o PHP chama o IP interno atraves da VPN:

   ```php
   <?php

   $n8nWebhookUrl = 'http://192.168.x.x:5678/webhook/contato-site-lm';
   ```

Observacao: como o PHP atual foi criado para exigir HTTPS, sera necessario ajustar `public_html/api/contact.php` caso a URL escolhida seja `http://127.0.0.1` ou `http://192.168.x.x` via VPN.

### 6. Criar ou atualizar o `.htaccess`

No diretorio:

```text
public_html/
```

crie ou atualize o arquivo:

```text
.htaccess
```

Conteudo recomendado:

```apache
Options -Indexes

<IfModule mod_rewrite.c>
  RewriteEngine On

  RewriteCond %{HTTPS} !=on
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>

<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set X-Frame-Options "SAMEORIGIN"
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType video/mp4 "access plus 30 days"
</IfModule>
```

### 7. Validar o site antes da virada

Antes de alterar DNS definitivo, testar por URL temporaria, subdominio de homologacao ou arquivo `hosts` local.

Validar:

1. Home carregando.
2. Logo e imagens carregando.
3. Video do hero carregando.
4. Menu navegando para as secoes.
5. Links externos funcionando.
6. Layout mobile funcionando.
7. Console do navegador sem erros criticos.
8. HTTPS ativo.
9. Nenhum erro de mixed content.
10. Formulario pode ficar pendente se a integracao com n8n ainda nao tiver sido definida.

### 8. Fazer a virada de DNS

Na janela de cutover:

1. Fazer backup do site atual, se existir.
2. Confirmar que os arquivos novos estao em `public_html/`.
3. Confirmar que o SSL esta ativo.
4. Apontar DNS do dominio para o IP do servidor dedicado.
5. Aguardar propagacao.
6. Testar:
   - `https://dominio.com.br`
   - `https://www.dominio.com.br`
   - carregamento de imagens e video

### 9. Validar depois da publicacao

Depois que o dominio estiver apontando para a HostGator:

1. Testar o site em desktop.
2. Testar o site em celular.
3. Conferir logs de erro no cPanel.
4. Validar se o SSL ficou correto para dominio raiz e `www`.
5. Rodar um teste de performance, como Lighthouse/PageSpeed.
6. Quando a integracao do n8n for definida, testar o formulario separadamente.

### 10. Rollback

Se houver problema critico:

1. Reapontar o DNS para o servidor anterior, se ele ainda estiver ativo.
2. Ou restaurar o backup anterior em `public_html/`.
3. Se o problema for somente no formulario, manter o site no ar e corrigir apenas `public_html/api/contact.config.php` ou o webhook do n8n.
4. Se o problema for no build, gerar novo `npm run build` e reenviar o conteudo de `dist/`.

### 11. Checklist final

- [ ] `npm install` executado, se necessario
- [ ] `npm run build` executado com sucesso
- [ ] conteudo de `dist/` enviado para `public_html/`
- [ ] `public_html/index.html` existe
- [ ] `public_html/assets/` existe
- [ ] `public_html/api/contact.php` existe, mesmo que o formulario fique pendente
- [ ] `.htaccess` configurado
- [ ] SSL ativo
- [ ] HTTP redirecionando para HTTPS
- [ ] DNS apontando para o servidor dedicado
- [ ] e-mails do dominio preservados
- [ ] site validado em desktop e mobile
- [ ] backup/rollback definido

Checklist futuro para ativar o formulario:

- [ ] definido se o n8n ficara no servidor dedicado ou sera acessado por VPN/tunel
- [ ] PHP habilitado no cPanel
- [ ] cURL habilitado no PHP
- [ ] `public_html/api/contact.config.php` criado
- [ ] `public_html/api/contact.php` ajustado se a URL do n8n for HTTP local/VPN
- [ ] webhook do n8n ativo
- [ ] envio de teste chegando no n8n
