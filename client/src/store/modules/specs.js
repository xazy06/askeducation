import * as api from '@/services/specs'
import * as mutation from '@/store/types/mutationTypes'
import * as action from '@/store/types/actionTypes'

export default {
  namespaced: true,
  state: {
    static: null,
    tickets: [],
    selectedTicket: {},
    detailData: null,
    comments: null,
    ticketsPage: [],
    statuses: null,
    filters: {
      // @required
      company_id: null,
      // фильтрация по неполному совпадению названия заявки.
      subject: null,
      // фильтрация по виду заявки
      type: null,
      // фильтрация по приоритету: Low, Medium, High или Critical.
      priority: null,
      // фильтрация по номеру запроса в Ростелекоме.
      request_number: null,
      /** @format {YYYY-MM-DD} */
      date_from: null,
      /** @format {YYYY-MM-DD} */
      date_to: null,
      // фильтрация по началу периода даты закрытия. Формат YYYY-MM-DD.
      closed_date_from: null,
      // фильтрация по окончанию периода датызакрытия. Формат YYYY-MM-DD.
      closed_date_to: null,
      // фильтрация по флагу, сигнализирующему о том, была ли заявка создана автоматически или вручную.
      is_automatic: null,
      // фильтрация по статусу:
      status: 'active',
      // фильтрация по нескольким статусам при помощи массива.
      statuses: [],
      // фильтрация по идентификатору хоста.
      device_id: null,
      // фильтрация по массиву идентификаторов хоста.
      device_ids: [],
      // фильтрация по массиву идентификаторов групп хостов.
      device_group_ids: [],
      pager: {
        // поле, содержащее индекс текущей страницы. Индексация страниц начинается с единицы.
        cp: 1,
        // поле, указывающее строк данных нужно выводить на каждой странице.
        rpp: 1000
      }
    }
  },
  getters: {
    selectedDevice (state, getters, rootState) {
      return rootState.companies.selectedDevice
    },
    companyId (state, getters, rootState) {
      if (rootState.companies.currentCompany === null) {
        return null
      }

      return rootState.companies.currentCompany.id
    },
    filters (state, getters, rootState) {
      let filter = {
        filters: state.filters
      }

      filter.filters.company_id = rootState.companies.currentCompany && rootState.companies.currentCompany.id || null

      return filter
    }
  },
  mutations: {
    [mutation.TICKETS] (state, data) {
      data.target.hostTickets = [...data.target.hostTickets, ...data.tickets]

      data.target.hostTicketsLength = data.target.hostTickets.length
    },
    [mutation.TICKETS_PAGE] (state, tickets) {
      state.ticketsPage = tickets
    },
    [mutation.STATUSES] (state, statuses) {
      state.statuses = statuses
    },
    [mutation.SET_STATIC] (state, staticData) {
      state.static = staticData
    },
    [mutation.SET_DETAILS] (state, detailData) {
      state.detailData = detailData

      console.log('SET_DETAILS', state.detailData)
    },
    [mutation.SET_COMMENTS] (state, commentsData) {
      state.comments = commentsData

      console.log('SET_COMMENTS', state.comments)
    },
    [mutation.SET_FILTERS] (state, data) {
      state.filters = {...state.filters, ...data}

      console.log('SET_FILTERS', state.filters)
    }
  },
  actions: {
    // HOME TICKETS TABS
    async [action.GET_TICKETS] ({ commit, getters }, params) {
      let response = await api.getTickets({
        filters: {
          company_id: params.currentCompanyId,
          device_id: params.selectedDeviceId
          // TODO узнать какие статусы заявок должны показываться на вкладке заявки
          // status: ['']
        }
      })

      commit(mutation.TICKETS, {
        target: getters.selectedDevice,
        tickets: response.tickets
      })
    },

    // PAGE TICKETS
    async [action.GET_TICKETS_PAGE] ({ commit, getters }) {
      let response, filter = getters.filters

      if (filter.company_id === null) {
        console.log('filter.company_id === null')

        return
      }

      response = await api.getTickets(filter)

      commit(mutation.TICKETS_PAGE, response.tickets)
    },

    async [action.GET_TICKET_STATUSES] ({ commit, getters}, companyId) {
      companyId = companyId || getters.companyId

      let statuses = await api.getTicketsStatuses({
        companyId: Number(companyId)
      })

      console.log('statuses', statuses)

      commit(mutation.STATUSES, statuses)
    },

    async [action.NEW_TICKET] ({ commit }, ticket) {
      let response = await api.saveTicket(ticket)

      console.log('NEW_TICKET', response)

      // commit(mutation.STATUSES, statuses);

      // commit(mutation.TICKETS, response.tickets);
    },

    async [action.GET_STATIC] ({ commit, state }) {
      let response = await api.getStatic()

      console.log('GET_STATIC', response)

      commit(mutation.SET_STATIC, response.ticket_static_lists)
    },

    async [action.GET_DETAILS] ({ commit, state }, ticket) {
      let response

      state.selectedTicket = ticket

      response = await api.getDetails({id: Number(ticket.id)})

      console.log('GET_DETAILS', response)

      commit(mutation.SET_DETAILS, response)
    },
    async [action.GET_COMMENTS] ({ commit, state }) {
      let response

      response = await api.getComments({id: Number(state.selectedTicket.id)})

      console.log('GET_COMMENTS', response)

      commit(mutation.SET_COMMENTS, response)
    },
    async [action.ADD_COMMENT] ({ commit, dispatch, state }, data) {
      let response

      response = await api.addComment({
        id: Number(state.selectedTicket.id),
        comment: data
      })

      await dispatch(action.GET_COMMENTS)
    }

  }
}
