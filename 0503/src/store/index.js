import { configureStore } from "@reduxjs/toolkit";
//导入子模块
import counterReducer from './modules/counterStore'
import chanleRedu from "./modules/channleStore";
const Store = configureStore({
    reducer: {
        counter: counterReducer,
        channel: chanleRedu
    }
})

export default Store