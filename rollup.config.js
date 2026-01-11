import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: 'src/react/index.ts',
    output: [
      { dir: 'dist/esm', format: 'esm', preserveModules: true },
      { dir: 'dist/cjs', format: 'cjs', preserveModules: true }
    ],
    external: ['react'],
    plugins: [resolve(), commonjs(), typescript()]
  },
  {
    input: 'src/react/index.ts',
    output: { file: 'dist/types/index.d.ts', format: 'esm' },
    plugins: [dts()]
  }
]
