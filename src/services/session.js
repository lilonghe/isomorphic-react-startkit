
export function fetchUserInfo() {
    return fetch('http://rap2api.taobao.org/app/mock/5313/user/current').then(res=>res.json());
}

export function fetchMessageList() {
    return fetch('http://rap2api.taobao.org/app/mock/262830/home').then(res=>res.json());
}