module.exports = {
  root: true,
  extends: '@daotl/eslint-config/typescript',
  env: {
    jest: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
}
