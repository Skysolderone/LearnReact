import { createSlice } from '@reduxjs/toolkit'

const counterStotre = createSlice({
    name: 'counter',
    //初始化state
    initialState: { count: 0 },
    //实现方法 同步方法  支持直接修改
    reducers: {
        increment(state) {
            state.count++
        },
        descrement(state) {
            state.count--
        },
        addToNum(state, actions) {
            state.count = state.count + actions.payload
        }
    }
})
//解析出来的actionCreate函数
const { increment, descrement } = counterStotre.actions
const atn = counterStotre.actions.addToNum
//获取reducer
const counterReducer = counterStotre.reducer
//按需导出actioncreater
export { increment, descrement, atn }

//以默认方式导出recucer
export default counterReducer