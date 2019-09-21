import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/architecture/pagination',
    method: 'get',
    params: params
  })
}
