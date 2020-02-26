import ajax from './ajax'

export const getCateNavList = () => ajax({
    url: '/getCateNavList'
})

export const getCateList = () => ajax({
    url:'/getCateList'
})
//自己尝试
export const getNavData = () => ajax({
    url:'/getNavData'
})