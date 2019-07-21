import { Detail, Userinfo, Citylist, Citylinkage, submit } from '@/services'
import { __await } from 'tslib';

const state = {
    datalist: [],
    userlist: [],
    citylist: [],
    linkagelist: [],
    submitlist: []
}
const actions = {
    async GetDetail({ commit }: { commit: Function }, payload: any): Promise<void> {
        let data = await Detail(payload);
        commit('Detaillist', data)
    },
    async Setserinfo({ commit }: { commit: Function }, payload: any): Promise<void> {
        let data = await Userinfo(payload);
        commit('Userinfolist', data)
    },
    async City({ commit }: { commit: Function }, payload: any): Promise<void> {
        let data = await Citylist(payload);
        commit('citylists', data)
    },
    async linkage({ commit }: { commit: Function }, payload: any): Promise<void> {
        let data = await Citylinkage(payload);
        commit('Citylinkagelist', data)
    },
    async submitinfo({ commit }: { commit: Function }, payload: any): Promise<void> {
        let data = await submit(payload);
        commit('submitlists', data)
    }
}
const mutations = {
    Detaillist(state: any, payload: any) {
        console.log('datalist...', payload.data)
        state.datalist = payload.data;
    },
    Userinfolist(state: any, payload: any) {
        state.userlist = payload.data;
    },
    citylists(state: any, payload: any) {
        state.citylist = payload.data;
    },
    Citylinkagelist(state: any, payload: any) {
        state.linkagelist = payload.data;
    },
    submitlists(state: any, payload: any) {
        state.submitlist = payload.data;
    },
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}