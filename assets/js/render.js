function card(p) {
  return `
    <div class="card">
      <p>Perfume exclusivo selecionado</p>

      <a class="btn-primary" href="${p.url}" target="_blank">
        Ver produto
      </a>

      <a class="btn-secondary" href="https://wa.me/message/P2WGXAOBKQKNP1">
        Comprar no WhatsApp
      </a>
    </div>
  `;
}

function render() {
  const f = document.getElementById("feminino-grid");
  const m = document.getElementById("masculino-grid");
  const o = document.getElementById("mais-vendidos");

  produtos.feminino.forEach(p => f.insertAdjacentHTML("beforeend", card(p)));
  produtos.masculino.forEach(p => m.insertAdjacentHTML("beforeend", card(p)));

  [...produtos.feminino.slice(0,2), ...produtos.masculino.slice(0,2)]
    .forEach(p => o.insertAdjacentHTML("beforeend", card(p)));
}

document.addEventListener("DOMContentLoaded", render);