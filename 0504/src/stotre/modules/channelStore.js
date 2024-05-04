import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const ChannleStore = createSlice({
    name: 'channel',
    initialState: {
        channel: [],
    },
    reducers: {
        setChannle(state, actions) {
            state.channel = actions.payload
        },
    }
})

// const Url = 'http://geek.itheima.net/v1_0/channels'
const { setChannle } = ChannleStore.actions
const fetchData = () => {
    return async (dispatch) => {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        dispatch(setChannle(res.data.data.channels))
    }
}
export { fetchData }
const ChannelRu = ChannleStore.reducer
export default ChannelRu