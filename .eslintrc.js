module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
    requireConfigFile: false,
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  globals: {},
  extends: ['prettier'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 2,
    semi: 2,
    'comma-dangle': ['error', 'only-multiline'],
    'react/jsx-uses-vars': 1,
    'no-unused-vars': 1,
    'no-undef': 0,
    'no-unexpected-multiline': 1,
    'no-debugger': 2,
    'no-alert': 1,
    'no-console': 1,
    'no-await-in-loop': 1,
    'no-return-assign': ['error', 'except-parens'],
    'no-unused-expressions': [2, { allowTaggedTemplates: true }],
    'import/prefer-default-export': 0,
    import: 0,
    'react/require-default-props': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    eqeqeq: 1,
    'array-bracket-spacing': 1,
    'object-curly-spacing': [1, 'always'],
    'object-curly-newline': [
      1,
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 3,
          consistent: false,
        },
      },
    ],
    camelcase: 1,
    'template-curly-spacing': 'off',
    indent: ['error', 2, { ignoredNodes: ['TemplateLiteral'] }],
    'max-len': [
      2,
      {
        code: 120,
        tabWidth: 2,
        ignoreTemplateLiterals: true,
      },
    ],
  },
  settings: {
    'import/resolver': 'webpack',
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.53',
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
  },
};
