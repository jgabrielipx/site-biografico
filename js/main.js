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
    <h3>${c.titulo}</h3>
    <p>${c.descricao}</p>
    <div class="tags"><span>${c.emissor}</span><span>${c.data}</span></div>
    <div class="links">
      ${c.arquivo ? `<a href="${c.arquivo}" target="_blank" rel="noopener">Ver certificado (PDF)</a>` : ''}
      ${c.verificar ? `<a href="${c.verificar}" target="_blank" rel="noopener">Verificar</a>` : ''}
    </div>
  </article>`).join('');

// Projetos
document.getElementById('lista-projetos').innerHTML = projetos.map(p => `
  <article class="projeto">
    <h3>${p.titulo}</h3>
    <p>${p.descricao}</p>
    <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    <div class="links">
      ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">Código no GitHub</a>` : ''}
      ${p.site ? `<a href="${p.site}" target="_blank" rel="noopener">Ver site</a>` : ''}
    </div>
  </article>`).join('');

document.getElementById('ano').textContent = new Date().getFullYear();
