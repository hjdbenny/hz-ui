/*
 * @Author: hjd
 * @Date: 2023-04-30 11:27:12
 * @LastEditors: hjd
 * @LastEditTime: 2023-04-30 11:36:33
 * @Description: 将前面打包的文件删除
 */
import fs from 'fs';
import { resolve } from 'path';
import { pkgPath } from './paths';
//保留的文件
const stayFile = ['package.json', 'README.md'];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      const curPath = resolve(path, file);

      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file != 'node_modules') await delPath(curPath);
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });

    if (path != `${pkgPath}/hz`) fs.rmdirSync(path);
  }
};
export default delPath;
