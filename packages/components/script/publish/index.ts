/*
 * @Author: hjd
 * @Date: 2023-05-01 00:14:21
 * @LastEditors: hjd
 * @LastEditTime: 2023-05-01 00:17:04
 * @Description:发布任务
 */
import run from '../utils/run';
import { pkgPath } from '../utils/paths';
import { series } from 'gulp';
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/hz`);
};
export default series(async () => publishComponent());
