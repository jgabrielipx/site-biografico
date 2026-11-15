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

// Projetos
document.getElementById('lista-projetos').innerHTML = projetos.map(p => `
  <article class="projeto">
    <h3>${p.titulo}</h3>
    <p>${p.descricao}</p>
    <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">Ver no GitHub</a>` : ''}
  </article>`).join('');

document.getElementById('ano').textContent = new Date().getFullYear();
