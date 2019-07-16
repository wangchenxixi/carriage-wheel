import request from '@/utils/request';

// 获取品牌列表
export function getBrandList(): Promise<Object> {
    return request.get('/v2-car-getMasterBrandList.html');
}
//侧边栏列表
export function slideList(): Promise<Object> {
    return request.get('/v2-car-getMakeListByMasterBrandId.html?MasterID=2');
}