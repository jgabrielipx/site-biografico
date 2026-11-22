const raiz = document.documentElement;
document.getElementById('tema').addEventListener('click', () => {
  const novo = raiz.dataset.theme === 'dark' ? 'light' : 'dark';
  raiz.dataset.theme = novo;
  localStorage.setItem('tema', novo);
});

// Menu do celular
const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
  const aberto = nav.classList.toggle('aberto');
  menu.setAttribute('aria-expanded', aberto);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') { nav.classList.remove('aberto'); menu.setAttribute('aria-expanded', 'false'); }
});

// Habilidades
document.getElementById('lista-habilidades').innerHTML = habilidades.map(g => `
  <div><h3>${g.grupo}</h3><ul>${g.itens.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('');

// Cursos e certificados
document.getElementById('lista-cursos').innerHTML = certificados.map(c => `
  <article class="projeto">
    ${c.imagem ? `<img class="selo-curso" src="${c.imagem}" alt="Selo digital do curso ${c.titulo}">` : ''}
    <h3>${c.titulo}</h3>
    <p>${c.descricao}</p>
    <div class="tags"><span>${c.emissor}</span><span>${c.data}</span></div>
    <div class="links">
      ${c.arquivo ? `<a href="${c.arquivo}" target="_blank" rel="noopener">Ver certificado (PDF)</a>` : ''}
      ${c.verificar ? `<a href="${c.verificar}" target="_blank" rel="noopener">Verificar</a>` : ''}
    </div>
  </article>`).join('');

// Ilustrações do topo de cada card de projeto (campo "capa" em data.js)
const capas = {
  git: '<svg viewBox="0 0 200 80" aria-hidden="true"><path class="l" d="M10 58H190"/><path class="l b" d="M50 58C70 58 70 20 90 20H130C150 20 150 58 170 58"/><circle cx="10" cy="58" r="5"/><circle cx="50" cy="58" r="5"/><circle cx="90" cy="20" r="5"/><circle cx="130" cy="20" r="5"/><circle cx="170" cy="58" r="5"/></svg>',
  gastos: '<svg viewBox="0 0 200 80" aria-hidden="true"><rect class="m" x="30" y="14" width="80" height="8" rx="4"/><rect class="a" x="130" y="14" width="40" height="8" rx="4"/><rect class="m" x="30" y="36" width="60" height="8" rx="4"/><rect class="a" x="130" y="36" width="40" height="8" rx="4"/><rect class="m" x="30" y="58" width="95" height="8" rx="4"/><rect class="a" x="130" y="58" width="40" height="8" rx="4"/></svg>',
  kaprekar: '<div class="num">6174<small>7641 − 1467 = 6174</small></div>',
  site: '<svg viewBox="0 0 200 80" aria-hidden="true"><rect class="l" x="30" y="6" width="140" height="68" rx="8"/><circle cx="42" cy="16" r="2.5"/><circle cx="51" cy="16" r="2.5"/><circle cx="60" cy="16" r="2.5"/><rect class="m" x="42" y="32" width="64" height="6" rx="3"/><rect class="m" x="42" y="46" width="50" height="6" rx="3"/><path class="a" d="M122 68V50a14 14 0 0 1 28 0V68Z"/></svg>'
};

// Projetos
document.getElementById('lista-projetos').innerHTML = projetos.map((p, i) => `
  <article class="card-projeto">
    ${p.capa ? `<div class="capa"><span class="n">${String(i + 1).padStart(2, '0')}</span>${capas[p.capa] || ''}</div>` : ''}
    <div class="corpo">
      <div class="cabeca">
        <h3>${p.titulo}</h3>
        ${p.status ? `<span class="pill ${p.status === 'Concluído' ? 'ok' : ''}">${p.status}</span>` : ''}
      </div>
      <p>${p.descricao}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      ${p.aprendi ? `<details class="aprendi-box"><summary>O que aprendi</summary><ul>${p.aprendi.map(a => `<li>${a}</li>`).join('')}</ul></details>` : ''}
      <div class="acoes">
        ${p.link ? `<a class="btn-codigo" href="${p.link}" target="_blank" rel="noopener">Ver código ↗</a>` : ''}
        ${p.site ? `<a class="btn-codigo" href="${p.site}" target="_blank" rel="noopener">Ver site ↗</a>` : ''}
      </div>
    </div>
  </article>`).join('');

document.getElementById('ano').textContent = new Date().getFullYear();
