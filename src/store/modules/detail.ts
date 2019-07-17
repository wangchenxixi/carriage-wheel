import { Detail } from '@/services'
import { __await } from 'tslib';

const state = {
    datalist: []
}
const actions = {
    async GetDetail({ commit }: { commit: Function }, payload: any): Promise<void> {
        let data = await Detail(payload);
        commit('Detaillist', data)
    }
}
const mutations = {
    Detaillist(state: any, payload: any) {
        console.log('pat', payload)
        state.datalist = payload.data;
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}