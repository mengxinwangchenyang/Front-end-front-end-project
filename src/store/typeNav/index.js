
import { reqfirst,reqvalues } from "@/api";
const state = {
    fathername: [],
    values: []
};
const mutations = {
    GETFIRST(state,fathername){
        state.fathername=fathername
    },
    GETVALUES(state,values){
        state.values=values
    }
};
const actions = {
    async getfirst({commit}){
        let result=await reqfirst();
        commit("GETFIRST",result);
    },

    async getvalues({commit},form){
        let result=await reqvalues(form);
        commit("GETVALUES",result)
    }
  
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}