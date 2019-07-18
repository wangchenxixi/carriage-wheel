import request from '@/utils/request';

// 获取品牌列表
export function getBrandList(): Promise<Object> {
    return request.get('/v2-car-getMasterBrandList.html');
}
//获取品牌详情
export function GetList(params:any): Promise<Object>{
    return request({
        url:`v2-car-getMakeListByMasterBrandId.html?MasterID=${params.MasterID}&_17310174561`,
        method:'GET',
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
        url: `v2-car-getImageList.html?SerialID=3824&_17310174561`,
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