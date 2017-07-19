/**
 * Created by wqy on 2017/7/19.
 */
import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

export function getTopList() {
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
	const data = Object.assign({}, commonParams, {
		platform: 'h5',
		uin: 0,
		needNewCode: 1
	})
	return jsonp(url, data, options)
}