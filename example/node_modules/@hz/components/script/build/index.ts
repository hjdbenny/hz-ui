/*
 * @Author: hjd
 * @Date: 2023-04-30 11:39:51
 * @LastEditors: hjd
 * @LastEditTime: 2023-05-02 00:08:20
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
  // .pipe(dest(`${pkgPath}/hz/v3/lib/src`))
  // .pipe(dest(`${pkgPath}/hz/v3/es/src`))
  // .pipe(dest(`${pkgPath}/hz/v2/lib/src`))
  // .pipe(dest(`${pkgPath}/hz/v2/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

//打包组件
export const buildComponentV2 = async () => {
  run('pnpm run build2', componentPath);
};
//打包组件
export const buildComponentV3 = async () => {
  run('pnpm run build3', componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
    // async () => buildComponentV2()
    // async () => buildComponentV3()
  )
);
