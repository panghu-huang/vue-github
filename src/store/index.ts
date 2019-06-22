import Vue from 'vue'
import Vuex from 'vuex'
import { SET_LOGIN_NAME } from './mutationTypes'
import {
  DEFAULT_LOGIN_NAME,
  SAVED_LOGIN_KEY,
} from '@/config'
import { IStore } from '@/types'

Vue.use(Vuex)

const loginName = localStorage.getItem(SAVED_LOGIN_KEY) || DEFAULT_LOGIN_NAME

export default new Vuex.Store({
  state: {
    loginName,
  } as IStore,
  mutations: {
    [SET_LOGIN_NAME](state: IStore, loginName: string) {
      state.loginName = loginName
    },
  },
  getters: {
    loginName(state: IStore) {
      return state.loginName
    },
  }
})
