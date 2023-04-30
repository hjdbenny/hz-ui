/*
 * @Author: hjd
 * @Date: 2023-04-30 11:39:51
 * @LastEditors: hjd
 * @LastEditTime: 2023-04-30 12:28:14
 * @Description: 执行删除流程
 */
import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { componentPath, pkgPath } from '../utils/paths';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';

//删除dist
export const removeDist = () => {
  return delPath(`${pkgPath}/hz`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/hz/lib/src`))
    .pipe(dest(`${pkgPath}/hz/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
