import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
// const initialState = []
const ChannelStore = createSlice({
    name: 'channel',
    initialState: {
        channel: []
    },
    reducers: {
        setChannels(state, actions) {
            state.channel = actions.payload
        }
    }
})
const { setChannels } = ChannelStore.actions

//异步调用
const fetchData = () => {
    return async (dispatch) => {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        // console.log(res)
        dispatch(setChannels(res.data.data.channels))
    }
}
export { fetchData }
const chanleRedu = ChannelStore.reducer
export default chanleRedu