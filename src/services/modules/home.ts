import request from '@/utils/request';

// 获取品牌列表
export function getBrandList(): Promise<Object>{
    return request.get('/v2-car-getMasterBrandList.html');
}
//获取品牌详情
export function GetList(params:any): Promise<Object>{
    return request({
        url:`v2-car-getMakeListByMasterBrandId.html?MasterID=${params.MasterID}&_1563176334484`,
        method:'GET',
        params
    })
}