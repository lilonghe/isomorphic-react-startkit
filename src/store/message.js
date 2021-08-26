import { fetchMessageList } from '../services/session';

export const message = {
    state: {
        messageList: [],
    },
  
    effects: dispatch => ({
        async loadMessageList(payload) {
            const res = await fetchMessageList(payload);
            if (res) {
                dispatch.message.onLoadMessageList(res.data.nodes);
            }
        },
    }),
  
    reducers: {
        onLoadMessageList(state, payload) {
            return {...state, messageList: payload};
        },
    },
    
}