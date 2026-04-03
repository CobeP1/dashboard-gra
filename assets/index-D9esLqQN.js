(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/dashboard-gra/assets/logo-gra-TlnCa9h_.png`,t=`https://script.google.com/macros/s/AKfycbxDiNY7AHI2_4uNd-MHXFcHB5H25LDs5gztwZejjeyrBZ6htMthSuYk6HSw_QQF_ShU8PuBlwxJW7Wd3yNZcqA9-2wPMDCGJ7XNIDWUKPYbMxT_QBiC5xWd2OmFEK0bSoc_p-UeM11iz_io/exec`,n=`https://manualgra.gitbook.io/manual-de-conduta-g.r.a`,r=[`Comando`,`Sub.Comando`,`Operador Sentinel`,`Operador Raven`,`Operador Hawk`,`Operador Classe I`,`Operador Classe II`,`Operador Classe III`,`Aspirante a Operador`];document.querySelector(`#app`).innerHTML=`
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

        <div class="hero__actions">
          <a
            class="hero__manual-button"
            href="${n}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Manual de Conduta"
          >
            <span class="hero__manual-button-label">Manual de Conduta</span>
            <span class="hero__manual-button-subtitle">Abrir manual oficial</span>
          </a>
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

        <aside class="side-rankings">
          <article class="card panel">
            <div class="panel__header">
              <h2>Ranking Total</h2>
              <span class="panel__tag">Operacional</span>
            </div>

            <div id="ranking-list" class="ranking-list ranking-list--compact">
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

          <article class="card panel">
            <div class="panel__header">
              <h2>Ranking Mensal</h2>
              <span id="monthly-reference" class="panel__tag panel__tag--monthly">Sem mês</span>
            </div>

            <div id="monthly-ranking-list" class="ranking-list ranking-list--compact">
              <div class="ranking-item">
                <div class="ranking-item__avatar">✦</div>
                <div class="ranking-item__info">
                  <strong>Carregando...</strong>
                  <span>Aguardando mês atual</span>
                </div>
                <strong class="ranking-item__score">0</strong>
              </div>
            </div>
          </article>
        </aside>
      </section>
    </main>
  </div>
`;var i={members:[],ranking:[],monthlyRanking:[],monthlyReference:``,selectedMemberId:null},a={totalMembers:document.querySelector(`#total-members`),totalApprehensions:document.querySelector(`#total-apprehensions`),averagePerMember:document.querySelector(`#average-per-member`),lastUpdate:document.querySelector(`#last-update`),activeMembersCount:document.querySelector(`#active-members-count`),awayMembersCount:document.querySelector(`#away-members-count`),inactiveMembersCount:document.querySelector(`#inactive-members-count`),membersTableBody:document.querySelector(`#members-table-body`),rankingList:document.querySelector(`#ranking-list`),monthlyRankingList:document.querySelector(`#monthly-ranking-list`),monthlyReference:document.querySelector(`#monthly-reference`),searchInput:document.querySelector(`#search-input`),memberDetailsCard:document.querySelector(`#member-details-card`),detailName:document.querySelector(`#detail-name`),detailStatus:document.querySelector(`#detail-status`),detailWarnings:document.querySelector(`#detail-warnings`),detailApprehensions:document.querySelector(`#detail-apprehensions`),detailIdBadge:document.querySelector(`#detail-id-badge`),closeDetailsButton:document.querySelector(`#close-details-button`)};function o(e){return String(e||``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().trim()}function s(e){let t=String(e||``).trim();return t?t.charAt(0).toUpperCase():`✦`}function c(e){let t=o(e),n=r.findIndex(e=>o(e)===t);return n===-1?2**53-1:n}function l(e){return[...e].sort((e,t)=>{let n=c(e.rankGRA)-c(t.rankGRA);return n===0?String(e.name||``).localeCompare(String(t.name||``),`pt-BR`,{sensitivity:`base`}):n})}function u(e){let t=o(e);return t===`ativo`?`status-badge status-badge--active`:t===`inativo`?`status-badge status-badge--inactive`:t===`ausente`?`status-badge status-badge--away`:`status-badge`}function d(e){return e.reduce((e,t)=>{let n=o(t.status);return n===`ativo`?e.active+=1:n===`ausente`?e.away+=1:n===`inativo`&&(e.inactive+=1),e},{active:0,away:0,inactive:0})}function f(e){let t=d(e);a.activeMembersCount.textContent=t.active,a.awayMembersCount.textContent=t.away,a.inactiveMembersCount.textContent=t.inactive}function p(e){let t=i.members.find(t=>String(t.id||``).trim()===String(e||``).trim());if(!t){console.log(`MEMBRO NÃO ENCONTRADO PARA ID:`,e);return}console.log(`MEMBRO CLICADO:`,t),console.log(`TOTAL DO MEMBRO CLICADO:`,t?.totalApprehensions);let n=Number(t.totalApprehensions||0),r=t.warnings||`0`,o=t.status||`Não informado`;i.selectedMemberId=t.id,a.detailName.textContent=t.name||`--`,a.detailStatus.innerHTML=`<span class="${u(o)}">${o}</span>`,a.detailWarnings.textContent=r,a.detailApprehensions.textContent=String(n),a.detailIdBadge.textContent=`${t.id||`--`} / ${t.badge||`--`}`,a.memberDetailsCard.hidden=!1}function m(){i.selectedMemberId=null,a.memberDetailsCard.hidden=!0}function h(e){a.totalMembers.textContent=e.totalMembers??0,a.totalApprehensions.textContent=e.totalApprehensions??0,a.averagePerMember.textContent=e.averagePerMember??0,a.lastUpdate.textContent=e.lastUpdate||`--/--/----`}function g(e){if(!e.length){a.membersTableBody.innerHTML=`
      <tr>
        <td colspan="5">Nenhum membro encontrado.</td>
      </tr>
    `;return}let t=l(e);a.membersTableBody.innerHTML=t.map(e=>`
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
      `).join(``)}function _(e,t,n,r){if(!t.length){e.innerHTML=`
      <div class="ranking-item">
        <div class="ranking-item__avatar">✦</div>
        <div class="ranking-item__info">
          <strong>Nenhum dado</strong>
          <span>${r}</span>
        </div>
        <strong class="ranking-item__score">0</strong>
      </div>
    `;return}e.innerHTML=t.map(e=>`
        <div class="ranking-item">
          <div class="ranking-item__avatar">${s(e.name)}</div>
          <div class="ranking-item__info">
            <strong>${e.name||`-`}</strong>
            <span>${e.rankGRA||e.rankBPM||`-`}</span>
          </div>
          <strong class="ranking-item__score">${e[n]??0}</strong>
        </div>
      `).join(``)}function v(e){a.monthlyReference.textContent=e||`Sem mês`}function y(e){let t=o(e);if(!t){g(i.members);return}g(i.members.filter(e=>{let n=o(e.name),r=o(e.id),i=o(e.badge);return n.includes(t)||r.includes(t)||i.includes(t)}))}async function b(){try{let e=await(await fetch(t,{method:`GET`})).json();if(!e.success)throw Error(e.error||`Falha ao carregar os dados da API.`);i.members=e.members||[],i.ranking=e.ranking||[],i.monthlyRanking=e.monthlyRanking||[],i.monthlyReference=e.monthlyReferenceLabel||e.monthlyReference||``,console.log(`MEMBERS DA API:`,i.members),console.log(`HUGO NA STATE:`,i.members.find(e=>String(e.id||``).trim()===`1186`)),console.log(`RANKING DA API:`,i.ranking),console.log(`MONTHLY RANKING DA API:`,i.monthlyRanking),h(e.stats||{}),f(i.members),g(i.members),_(a.rankingList,i.ranking,`totalApprehensions`,`Aguardando apreensões`),_(a.monthlyRankingList,i.monthlyRanking,`apprehensionsInMonth`,`Aguardando mês atual`),v(i.monthlyReference)}catch(e){console.error(`Erro ao carregar dashboard:`,e),a.membersTableBody.innerHTML=`
      <tr>
        <td colspan="5">Erro ao carregar membros.</td>
      </tr>
    `,a.rankingList.innerHTML=`
      <div class="ranking-item">
        <div class="ranking-item__avatar">!</div>
        <div class="ranking-item__info">
          <strong>Erro ao carregar</strong>
          <span>Verifique a API e tente novamente</span>
        </div>
        <strong class="ranking-item__score">0</strong>
      </div>
    `,a.monthlyRankingList.innerHTML=`
      <div class="ranking-item">
        <div class="ranking-item__avatar">!</div>
        <div class="ranking-item__info">
          <strong>Erro ao carregar</strong>
          <span>Verifique a API e tente novamente</span>
        </div>
        <strong class="ranking-item__score">0</strong>
      </div>
    `}}a.searchInput.addEventListener(`input`,e=>{y(e.target.value)}),a.membersTableBody.addEventListener(`click`,e=>{let t=e.target.closest(`.member-name-button`);if(!t)return;let n=t.dataset.memberId;p(n)}),a.closeDetailsButton.addEventListener(`click`,()=>{m()}),b();