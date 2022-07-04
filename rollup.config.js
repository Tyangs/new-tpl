import json from '@rollup/plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const { name, version, author, license } = pkg;

const banner = `/**
* ${name} v${version}
* (c) ${new Date().getFullYear()} ${author.name}
* @license ${license}
*/
`;

export default {
  input: 'src/index.ts',
  external: ['lodash'],
  output: [
    {
      banner,
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
    {
      banner,
      file: 'dist/esm/index.js',
      format: 'es',
    },
  ],
  plugins: [
    commonjs(),
    typescript(),
    json(),
    copy({
      targets: [{ src: 'src/template/*', dest: ['dist/cjs/template', 'dist/esm/template'] }],
    }),
  ],
};
