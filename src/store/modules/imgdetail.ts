import {imgdetail,JumpImg} from '@/services'
import { __await } from 'tslib';

const state = {
    imglist: [],
    urllist:[]
}
const actions = {
    async GetImgDetail({ commit }: { commit: Function }, payload: any): Promise<void> {
        let data = await imgdetail(payload);
        commit('Imglist', data)
        commit('urls',data)
    },
    async JumpImgs({ commit }: { commit: Function }, payload: any) {
        console.log('JumpImgList', payload)
        let data = await JumpImg(payload);
        commit('JumpImgList', data)
    }
}
const mutations = {
    Imglist(state: any, payload: any) {
        console.log('img.....', payload)
        state.imglist = payload.data;
    },
    JumpImgList(state: any, payload: any) {
        //   console.log('pat', payload)
        // state.imgList = payload.data.List;
        let string=''
        payload.data.List.map(i=>{
            let num = i.Url.length - 7;
            string=i.Url.slice(0, num) + `${i.LowSize}.jpg`;
            i.Url=string
            state.urllist.push(i.Url)
        })
        console.log("urllist.", state.urllist)
    },
    urls(state: any, payload: any) {
      let string=''
      payload.data.map(item => {
        item.List.map(i=>{
          let num = i.Url.length - 7;
          string=i.Url.slice(0, num) + `${i.LowSize}.jpg`;
          i.Url=string
        })
      });
      // console.log("img...", state.url)
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}