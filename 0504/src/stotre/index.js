import { configureStore } from "@reduxjs/toolkit";
import ChannelRu from './modules/channelStore'

const Store = configureStore({
    reducer: {
        channel: ChannelRu,
    }
}
)
export default Store