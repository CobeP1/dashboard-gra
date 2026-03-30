import './style.css'
import logoGRA from './assets/logo-gra.png'

const API_URL = 'https://script.google.com/macros/s/AKfycbyWd4Bbl2hJHUXYbhzJ17ObdJk_puDYywwplCnxdJcsoNxZNOhbIDxo0pRKNtZAO1hglA/exec'

const RANK_ORDER = [
  'Comando',
  'Sub.Comando',
  'Operador Sentinel',
  'Operador Raven',
  'Operador Hawk',
  'Operador Classe I',
  'Operador Classe II',
  'Operador Classe III',
  'Aspirante a Operador',
]

document.querySelector('#app').innerHTML = `
  <div class="app-shell">
    <header class="hero">
      <div class="hero__overlay"></div>

      <div class="hero__content">
        <div class="hero__logo">
          <img
            src="${logoGRA}"
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
`

const state = {
  members: [],
  ranking: [],
  apprehensions: [],
  selectedMemberId: null,
}

const elements = {
  totalMembers: document.querySelector('#total-members'),
  totalApprehensions: document.querySelector('#total-apprehensions'),
  averagePerMember: document.querySelector('#average-per-member'),
  lastUpdate: document.querySelector('#last-update'),
  activeMembersCount: document.querySelector('#active-members-count'),
  awayMembersCount: document.querySelector('#away-members-count'),
  inactiveMembersCount: document.querySelector('#inactive-members-count'),
  membersTableBody: document.querySelector('#members-table-body'),
  rankingList: document.querySelector('#ranking-list'),
  searchInput: document.querySelector('#search-input'),
  memberDetailsCard: document.querySelector('#member-details-card'),
  detailName: document.querySelector('#detail-name'),
  detailStatus: document.querySelector('#detail-status'),
  detailWarnings: document.querySelector('#detail-warnings'),
  detailApprehensions: document.querySelector('#detail-apprehensions'),
  detailIdBadge: document.querySelector('#detail-id-badge'),
  closeDetailsButton: document.querySelector('#close-details-button'),
}

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

function createAvatarLabel(name) {
  const clean = String(name || '').trim()
  return clean ? clean.charAt(0).toUpperCase() : '✦'
}

function getRankOrderIndex(rank) {
  const normalizedRank = normalizeText(rank)
  const index = RANK_ORDER.findIndex(
    (item) => normalizeText(item) === normalizedRank
  )

  return index === -1 ? Number.MAX_SAFE_INTEGER : index
}

function sortMembersByRank(members) {
  return [...members].sort((a, b) => {
    const rankComparison = getRankOrderIndex(a.rankGRA) - getRankOrderIndex(b.rankGRA)

    if (rankComparison !== 0) {
      return rankComparison
    }

    return String(a.name || '').localeCompare(String(b.name || ''), 'pt-BR', {
      sensitivity: 'base',
    })
  })
}

function getStatusClass(status) {
  const normalized = normalizeText(status)

  if (normalized === 'ativo') return 'status-badge status-badge--active'
  if (normalized === 'inativo') return 'status-badge status-badge--inactive'
  if (normalized === 'ausente') return 'status-badge status-badge--away'

  return 'status-badge'
}

function getMemberApprehensionData(memberId) {
  return state.apprehensions.find(
    (item) => String(item.id || '').trim() === String(memberId || '').trim()
  )
}

function getStatusCounts(members) {
  return members.reduce(
    (acc, member) => {
      const status = normalizeText(member.status)

      if (status === 'ativo') acc.active += 1
      else if (status === 'ausente') acc.away += 1
      else if (status === 'inativo') acc.inactive += 1

      return acc
    },
    { active: 0, away: 0, inactive: 0 }
  )
}

function renderStatusCounters(members) {
  const counts = getStatusCounts(members)

  elements.activeMembersCount.textContent = counts.active
  elements.awayMembersCount.textContent = counts.away
  elements.inactiveMembersCount.textContent = counts.inactive
}

function openMemberDetails(memberId) {
  const member = state.members.find(
    (item) => String(item.id || '').trim() === String(memberId || '').trim()
  )

  if (!member) return

  const apprehensionData = getMemberApprehensionData(member.id)
  const totalApprehensions = apprehensionData?.totalApprehensions ?? 0
  const warnings = member.warnings || '0'
  const status = member.status || 'Não informado'

  state.selectedMemberId = member.id

  elements.detailName.textContent = member.name || '--'
  elements.detailStatus.innerHTML = `<span class="${getStatusClass(status)}">${status}</span>`
  elements.detailWarnings.textContent = warnings
  elements.detailApprehensions.textContent = totalApprehensions
  elements.detailIdBadge.textContent = `${member.id || '--'} / ${member.badge || '--'}`
  elements.memberDetailsCard.hidden = false
}

function closeMemberDetails() {
  state.selectedMemberId = null
  elements.memberDetailsCard.hidden = true
}

function renderStats(stats) {
  elements.totalMembers.textContent = stats.totalMembers ?? 0
  elements.totalApprehensions.textContent = stats.totalApprehensions ?? 0
  elements.averagePerMember.textContent = stats.averagePerMember ?? 0
  elements.lastUpdate.textContent = stats.lastUpdate || '--/--/----'
}

function renderMembers(members) {
  if (!members.length) {
    elements.membersTableBody.innerHTML = `
      <tr>
        <td colspan="5">Nenhum membro encontrado.</td>
      </tr>
    `
    return
  }

  const sortedMembers = sortMembersByRank(members)

  elements.membersTableBody.innerHTML = sortedMembers
    .map(
      (member) => `
        <tr>
          <td>${member.id || '-'}</td>
          <td>
            <button
              class="member-name-button"
              type="button"
              data-member-id="${member.id || ''}"
            >
              ${member.name || '-'}
            </button>
          </td>
          <td>${member.badge || '-'}</td>
          <td>${member.rankGRA || '-'}</td>
          <td>${member.rankBPM || '-'}</td>
        </tr>
      `
    )
    .join('')
}

function renderRanking(ranking) {
  if (!ranking.length) {
    elements.rankingList.innerHTML = `
      <div class="ranking-item">
        <div class="ranking-item__avatar">✦</div>
        <div class="ranking-item__info">
          <strong>Nenhum dado</strong>
          <span>Aguardando apreensões</span>
        </div>
        <strong class="ranking-item__score">0</strong>
      </div>
    `
    return
  }

  elements.rankingList.innerHTML = ranking
    .map(
      (member) => `
        <div class="ranking-item">
          <div class="ranking-item__avatar">${createAvatarLabel(member.name)}</div>
          <div class="ranking-item__info">
            <strong>${member.name || '-'}</strong>
            <span>${member.rankGRA || '-'}</span>
          </div>
          <strong class="ranking-item__score">${member.totalApprehensions ?? 0}</strong>
        </div>
      `
    )
    .join('')
}

function filterMembers(searchTerm) {
  const normalizedSearch = normalizeText(searchTerm)

  if (!normalizedSearch) {
    renderMembers(state.members)
    return
  }

  const filteredMembers = state.members.filter((member) => {
    const name = normalizeText(member.name)
    const id = normalizeText(member.id)
    const badge = normalizeText(member.badge)

    return (
      name.includes(normalizedSearch) ||
      id.includes(normalizedSearch) ||
      badge.includes(normalizedSearch)
    )
  })

  renderMembers(filteredMembers)
}

async function loadDashboardData() {
  try {
    const cacheBustedUrl = `${API_URL}?t=${Date.now()}`
    const response = await fetch(cacheBustedUrl, {
      method: 'GET',
      cache: 'no-store',
    })

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.error || 'Falha ao carregar os dados da API.')
    }

    state.members = data.members || []
    state.ranking = data.ranking || []
    state.apprehensions = data.apprehensions || []

    renderStats(data.stats || {})
    renderStatusCounters(state.members)
    renderMembers(state.members)
    renderRanking(state.ranking)
  } catch (error) {
    console.error('Erro ao carregar dashboard:', error)

    elements.membersTableBody.innerHTML = `
      <tr>
        <td colspan="5">Erro ao carregar membros.</td>
      </tr>
    `

    elements.rankingList.innerHTML = `
      <div class="ranking-item">
        <div class="ranking-item__avatar">!</div>
        <div class="ranking-item__info">
          <strong>Erro ao carregar</strong>
          <span>Verifique a API e tente novamente</span>
        </div>
        <strong class="ranking-item__score">0</strong>
      </div>
    `
  }
}

elements.searchInput.addEventListener('input', (event) => {
  filterMembers(event.target.value)
})

elements.membersTableBody.addEventListener('click', (event) => {
  const button = event.target.closest('.member-name-button')
  if (!button) return

  const memberId = button.dataset.memberId
  openMemberDetails(memberId)
})

elements.closeDetailsButton.addEventListener('click', () => {
  closeMemberDetails()
})

loadDashboardData()