module.exports = {
  env: { browser: true, jest: true },
  extends: ['react'],
  plugins: ['babel'],
  rules: {
    'no-use-before-define': 'off',
    'indent': ['warn', 2],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'quotes': ['warn', 'single'],
    'babel/semi': 1,
    'object-shorthand': ['warn', 'always'],
    'no-alert': 'off',
  },
};
