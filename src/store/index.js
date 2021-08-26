import { init } from "@rematch/core";
import { session } from './session';
import { message } from './message';

function initStore(initialState) {
    return init({
        models: {
            session,
            message,
        },
        redux: {
            initialState,
        }
    });
}
const store = initStore(globalThis.initData);

export default store;
export {
    initStore,
}