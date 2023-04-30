/*
 * @Author: hjd
 * @Date: 2023-04-30 11:19:27
 * @LastEditors: hjd
 * @LastEditTime: 2023-04-30 11:37:19
 * @Description: 维护组件库路径
 */
import { resolve } from 'path';

//组件库根目录
export const componentPath = resolve(__dirname, '../../');

//pkg根目录
export const pkgPath = resolve(__dirname, '../../../');
