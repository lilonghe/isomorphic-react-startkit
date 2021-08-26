import { fetchUserInfo } from '@services/session';

export const session = {
    state: {
        userinfo: null,
    },
  
    effects: dispatch => ({
        async loadUserinfo(payload) {
            const res = await fetchUserInfo(payload);
            if (res) {
                dispatch.session.onLoadUserInfo(res);
            }
        },
    }),
  
    reducers: {
        onLoadUserInfo(state, payload) {
            return {...state, userinfo: payload};
        },
    },
    
}