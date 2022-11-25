// store/indxe.js
import { defineStore } from 'pinia'

interface ICounterStoreState{
    counter: number
}
 
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main',{
    state: (): ICounterStoreState  => ({
        counter: 0
    }),
    getters:{},
    actions:{}
})