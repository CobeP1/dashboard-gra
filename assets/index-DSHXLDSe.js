(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/dashboard-gra/assets/logo-gra-TlnCa9h_.png`,t=`https://script.google.com/macros/s/AKfycbyWd4Bbl2hJHUXYbhzJ17ObdJk_puDYywwplCnxdJcsoNxZNOhbIDxo0pRKNtZAO1hglA/exec`,n=[`Comando`,`Sub.Comando`,`Operador Sentinel`,`Operador Raven`,`Operador Hawk`,`Operador Classe I`,`Operador Classe II`,`Operador Classe III`,`Aspirante a Operador`];document.querySelector(`#app`).innerHTML=`
  <div class="app-shell">
    <header class="hero">
      <div class="hero__overlay"></div>

      <div class="hero__content">
        <div class="hero__logo">
          <img
            src="${e}"
            alt="Logo do Grupamento de Resposta Aérea"
            class="hero__logo-image"
          />
        </div>

        <div class="hero__text">
          <p class="hero__eyebrow">Dashboard Operacional</p>
          <h1>Grupamento de Resposta Aérea</h1>
          <p class="hero__subtitle">
            Painel administrativo com base em membros, apreensões e indicadores do grupamento.
          </p>
        </div>
      </div>
    </header>

    <main class="dashboard">
      <section class="top-summary-grid">
        <article class="card toolbar search-card">
          <div class="search-card__content">
            <div class="search-card__text">
              <h2>Consulta rápida</h2>
              <p>Pesquise por nome, ID ou badge.</p>
            </div>

            <label class="search">
              <span class="search__label">Buscar membro</span>
              <input
                id="search-input"
                type="text"
                placeholder="Ex.: Dante, 462, 600..."
                aria-label="Buscar por nome, ID ou badge"
              />
            </label>
          </div>
        </article>

        <article class="card status-counter-card status-counter-card--active">
          <span class="status-counter-card__label">Membros Ativos</span>
          <strong id="active-members-count" class="status-counter-card__value">0</strong>
        </article>

        <article class="card status-counter-card status-counter-card--away">
          <span class="status-counter-card__label">Membros Ausentes</span>
          <strong id="away-members-count" class="status-counter-card__value">0</strong>
        </article>

        <article class="card status-counter-card status-counter-card--inactive">
          <span class="status-counter-card__label">Membros Inativos</span>
          <strong id="inactive-members-count" class="status-counter-card__value">0</strong>
        </article>
      </section>

      <section class="stats-grid">
        <article class="card stat-card">
          <span class="stat-card__label">Total de membros</span>
          <strong id="total-members" class="stat-card__value">0</strong>
        </article>

        <article class="card stat-card">
          <span class="stat-card__label">Total de apreensões</span>
          <strong id="total-apprehensions" class="stat-card__value">0</strong>
        </article>

        <article class="card stat-card">
          <span class="stat-card__label">Média por membro</span>
          <strong id="average-per-member" class="stat-card__value">0</strong>
        </article>

        <article class="card stat-card">
          <span class="stat-card__label">Última atualização</span>
          <strong id="last-update" class="stat-card__value stat-card__value--small">--/--/----</strong>
        </article>
      </section>

      <section class="content-grid">
        <article class="card panel">
          <div class="panel__header">
            <h2>Membros</h2>
            <span class="panel__tag">Base</span>
          </div>

          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Badge</th>
                  <th>Patente GRA</th>
                  <th>Patente BPM</th>
                </tr>
              </thead>

              <tbody id="members-table-body">
                <tr>
                  <td colspan="5">Carregando membros...</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div id="member-details-card" class="member-details-card" hidden>
            <div class="member-details-card__header">
              <div>
                <p class="member-details-card__eyebrow">Detalhes do membro</p>
                <h3 id="detail-name">--</h3>
              </div>
              <button
                id="close-details-button"
                class="member-details-card__close"
                type="button"
                aria-label="Fechar detalhes"
              >
                ✕
              </button>
            </div>

            <div class="member-details-grid">
              <article class="member-detail-item">
                <span class="member-detail-item__label">Status</span>
                <strong id="detail-status" class="member-detail-item__value">--</strong>
              </article>

              <article class="member-detail-item">
                <span class="member-detail-item__label">Advertências</span>
                <strong id="detail-warnings" class="member-detail-item__value">--</strong>
              </article>

              <article class="member-detail-item">
                <span class="member-detail-item__label">Total de apreensões</span>
                <strong id="detail-apprehensions" class="member-detail-item__value">--</strong>
              </article>

              <article class="member-detail-item">
                <span class="member-detail-item__label">ID / Badge</span>
                <strong id="detail-id-badge" class="member-detail-item__value">--</strong>
              </article>
            </div>
          </div>
        </article>

        <article class="card panel">
          <div class="panel__header">
            <h2>Ranking de apreensões</h2>
            <span class="panel__tag">Operacional</span>
          </div>

          <div id="ranking-list" class="ranking-list">
            <div class="ranking-item">
              <div class="ranking-item__avatar">✦</div>
              <div class="ranking-item__info">
                <strong>Carregando...</strong>
                <span>Aguardando dados</span>
              </div>
              <strong class="ranking-item__score">0</strong>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
`;var r={members:[],ranking:[],apprehensions:[],selectedMemberId:null},i={totalMembers:document.querySelector(`#total-members`),totalApprehensions:document.querySelector(`#total-apprehensions`),averagePerMember:document.querySelector(`#average-per-member`),lastUpdate:document.querySelector(`#last-update`),activeMembersCount:document.querySelector(`#active-members-count`),awayMembersCount:document.querySelector(`#away-members-count`),inactiveMembersCount:document.querySelector(`#inactive-members-count`),membersTableBody:document.querySelector(`#members-table-body`),rankingList:document.querySelector(`#ranking-list`),searchInput:document.querySelector(`#search-input`),memberDetailsCard:document.querySelector(`#member-details-card`),detailName:document.querySelector(`#detail-name`),detailStatus:document.querySelector(`#detail-status`),detailWarnings:document.querySelector(`#detail-warnings`),detailApprehensions:document.querySelector(`#detail-apprehensions`),detailIdBadge:document.querySelector(`#detail-id-badge`),closeDetailsButton:document.querySelector(`#close-details-button`)};function a(e){return String(e||``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().trim()}function o(e){let t=String(e||``).trim();return t?t.charAt(0).toUpperCase():`✦`}function s(e){let t=a(e),r=n.findIndex(e=>a(e)===t);return r===-1?2**53-1:r}function c(e){return[...e].sort((e,t)=>{let n=s(e.rankGRA)-s(t.rankGRA);return n===0?String(e.name||``).localeCompare(String(t.name||``),`pt-BR`,{sensitivity:`base`}):n})}function l(e){let t=a(e);return t===`ativo`?`status-badge status-badge--active`:t===`inativo`?`status-badge status-badge--inactive`:t===`ausente`?`status-badge status-badge--away`:`status-badge`}function u(e){return r.apprehensions.find(t=>String(t.id||``).trim()===String(e||``).trim())}function d(e){return e.reduce((e,t)=>{let n=a(t.status);return n===`ativo`?e.active+=1:n===`ausente`?e.away+=1:n===`inativo`&&(e.inactive+=1),e},{active:0,away:0,inactive:0})}function f(e){let t=d(e);i.activeMembersCount.textContent=t.active,i.awayMembersCount.textContent=t.away,i.inactiveMembersCount.textContent=t.inactive}function p(e){let t=r.members.find(t=>String(t.id||``).trim()===String(e||``).trim());if(!t)return;let n=u(t.id)?.totalApprehensions??0,a=t.warnings||`0`,o=t.status||`Não informado`;r.selectedMemberId=t.id,i.detailName.textContent=t.name||`--`,i.detailStatus.innerHTML=`<span class="${l(o)}">${o}</span>`,i.detailWarnings.textContent=a,i.detailApprehensions.textContent=n,i.detailIdBadge.textContent=`${t.id||`--`} / ${t.badge||`--`}`,i.memberDetailsCard.hidden=!1}function m(){r.selectedMemberId=null,i.memberDetailsCard.hidden=!0}function h(e){i.totalMembers.textContent=e.totalMembers??0,i.totalApprehensions.textContent=e.totalApprehensions??0,i.averagePerMember.textContent=e.averagePerMember??0,i.lastUpdate.textContent=e.lastUpdate||`--/--/----`}function g(e){if(!e.length){i.membersTableBody.innerHTML=`
      <tr>
        <td colspan="5">Nenhum membro encontrado.</td>
      </tr>
    `;return}let t=c(e);i.membersTableBody.innerHTML=t.map(e=>`
        <tr>
          <td>${e.id||`-`}</td>
          <td>
            <button
              class="member-name-button"
              type="button"
              data-member-id="${e.id||``}"
            >
              ${e.name||`-`}
            </button>
          </td>
          <td>${e.badge||`-`}</td>
          <td>${e.rankGRA||`-`}</td>
          <td>${e.rankBPM||`-`}</td>
        </tr>
      `).join(``)}function _(e){if(!e.length){i.rankingList.innerHTML=`
      <div class="ranking-item">
        <div class="ranking-item__avatar">✦</div>
        <div class="ranking-item__info">
          <strong>Nenhum dado</strong>
          <span>Aguardando apreensões</span>
        </div>
        <strong class="ranking-item__score">0</strong>
      </div>
    `;return}i.rankingList.innerHTML=e.map(e=>`
        <div class="ranking-item">
          <div class="ranking-item__avatar">${o(e.name)}</div>
          <div class="ranking-item__info">
            <strong>${e.name||`-`}</strong>
            <span>${e.rankGRA||`-`}</span>
          </div>
          <strong class="ranking-item__score">${e.totalApprehensions??0}</strong>
        </div>
      `).join(``)}function v(e){let t=a(e);if(!t){g(r.members);return}g(r.members.filter(e=>{let n=a(e.name),r=a(e.id),i=a(e.badge);return n.includes(t)||r.includes(t)||i.includes(t)}))}async function y(){try{let e=`${t}?t=${Date.now()}`,n=await(await fetch(e,{method:`GET`,cache:`no-store`})).json();if(!n.success)throw Error(n.error||`Falha ao carregar os dados da API.`);r.members=n.members||[],r.ranking=n.ranking||[],r.apprehensions=n.apprehensions||[],h(n.stats||{}),f(r.members),g(r.members),_(r.ranking)}catch(e){console.error(`Erro ao carregar dashboard:`,e),i.membersTableBody.innerHTML=`
      <tr>
        <td colspan="5">Erro ao carregar membros.</td>
      </tr>
    `,i.rankingList.innerHTML=`
      <div class="ranking-item">
        <div class="ranking-item__avatar">!</div>
        <div class="ranking-item__info">
          <strong>Erro ao carregar</strong>
          <span>Verifique a API e tente novamente</span>
        </div>
        <strong class="ranking-item__score">0</strong>
      </div>
    `}}i.searchInput.addEventListener(`input`,e=>{v(e.target.value)}),i.membersTableBody.addEventListener(`click`,e=>{let t=e.target.closest(`.member-name-button`);if(!t)return;let n=t.dataset.memberId;p(n)}),i.closeDetailsButton.addEventListener(`click`,()=>{m()}),y();