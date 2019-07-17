import { Detail, Userinfo } from '@/services'
import { __await } from 'tslib';

const state = {
    datalist: [],
    userlist: []
}
const actions = {
    async GetDetail({ commit }: { commit: Function }, payload: any): Promise<void> {
        let data = await Detail(payload);
        commit('Detaillist', data)
    },
    async Setserinfo({ commit }: { commit: Function }, payload: any): Promise<void> {
        let data = await Userinfo(payload);
        commit('Userinfolist', data)
    }
}
const mutations = {
    Detaillist(state: any, payload: any) {
        state.datalist = payload.data;
    },
    Userinfolist(state: any, payload: any) {
        console.log('pat', payload)
        state.userlist = payload.data;
    },
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}