import ajax from './ajax'

export const getCateNavList = () => ajax({
    url: '/getCateNavList'
})

export const getCateList = () => ajax({
    url:'/getCateList'
})