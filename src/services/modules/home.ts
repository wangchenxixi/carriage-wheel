import request from '@/utils/request';

// 获取品牌列表
export function getBrandList(): Promise<Object> {
    return request.get('/v2-car-getMasterBrandList.html');
}
//获取品牌详情
export function GetList(params: any): Promise<Object> {
    return request({
        url: `v2-car-getMakeListByMasterBrandId.html?MasterID=${params.MasterID}&_17310174561`,
        method: 'GET',
        params
    })
}
//点击车系详情页面
export function Detail(params: any): Promise<Object> {
    return request({
        url: `/v2-car-getInfoAndListById.html?SerialID=${params.SerialID}&_1563353979616`,
        method: 'GET',
        params
    })
}
//填写个人信息
export function Userinfo(params: any): Promise<Object> {
    return request({
        url: `/v2-dealer-alllist.html?carId=${params.carId}&cityId=201&_1563367131499`,
        method: 'GET',
        params
    })
}
//城市列表
export function Citylist(params: any): Promise<Object> {
    return request({
        url: `/v1-city-alllist.html?_1563377370193`,
        method: 'GET',
        params
    })
}
//城市二级列表
export function Citylinkage(params: any): Promise<Object> {
    return request({
        url: `/v1-city-alllist.html?provinceid=${params.cityId}&_1563406727331`,
        method: 'GET',
        params
    })
}
//侧边栏列表
export function slideList(): Promise<Object> {
    return request.get('/v2-car-getMakeListByMasterBrandId.html?MasterID=2');
}
//点击车系详情页面
export function imgdetail(params: any): Promise<Object> {
    return request({
        url: `v2-car-getImageList.html?SerialID=${params.SerialID}&_17310174561`,
        method: 'GET',
        params
    })
}
export function JumpImg(params:any) : Promise<Object> {
    return request({
        url: `v2-car-getCategoryImageList.html?SerialID=${params.SerialID}&ImageID=6&Page=1&PageSize=30&${params.phone}`,
        method: 'GET',
        params
    })
}