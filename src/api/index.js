import request from '@/utils/request'

export function fetchList(params) {
    return request({
        url: '/api/list_artcle',
        method: 'get',
        params: params
    })
}

export function fetchFocus() {
    return request({
        url: '/api/focus/list',
        method: 'get',
        params: {}
    })
}

export function fetchCategory() {
    return request({
        url: '/api/classify',
        method: 'get',
        params: {}
    })
}

export function fetchFriend() {
    return request({
        url: '/friend',
        method: 'get',
        params: {}
    })
}

export function fetchSocial() {
    return request({
        url: '/api/social',
        method: 'get',
        params: {}
    });
}

export function fetchSiteInfo() {
    return request({
        url: '/site',
        method: 'get',
        params: {}
    })
}

export function fetchComment() {
    return request({
        url: '/comment',
        method: 'get',
        params: {}
    })
}
// node 后端
export function baseInfo(){
   return request({
       url:'/api/baseInfo',
       method:'get',
   })
}
export function artcleDetail(params) {
    return request({
        url:'/api/artcle_detail',
        method:'get',
        params
    })
}
// export function creatMessage(data) {
//     return request({
//         url:'/api/creat_message',
//         method:'post',
//         data
//     })
// }
export function creatMessage(data) {
    return request({
        url:'/admin/Hello',
        method:'post',
        data:{
            name2:'张三',
            age1:12,
            sex11:'男'
        }
    })
}
