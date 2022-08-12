const pp = 'plugin:prettier/recommended';
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      extends: [pp],
    },
    {
      files: ['*.js', '*.cjs'],
      extends: [pp],
      rules: {
        'no-plusplus': 'off',
        'unicorn/prefer-module': 'off',
        'no-use-before-define': 'off',
        'no-console': 'off',
        'sonarjs/cognitive-complexity': 'off',
        'camelcase': 'off',
      },
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    {
      files: ['*.html', '*.json'],
      extends: [pp],
      rules: {
        'no-plusplus': 'off',
      },
      parserOptions: {
        ecmaVersion: 2017,
      },

      env: {
        es6: true,
      },
    },
    {
      plugins: ['actions'],
      files: ['.github/workflows/*.{yml,yaml}'],
      processor: 'actions/actions',
    },
    {
      files: ['*.ts'],
      plugins: [
        'simple-import-sort',
        'import',
        'jest',
        '@typescript-eslint',
        'security',
        'optimize-regex',
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:security/recommended',
        'airbnb-base',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:sonarjs/recommended',
        'plugin:unicorn/recommended',
        'plugin:optimize-regex/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'es2021',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      rules: {
        'operator-linebreak': ['error', 'after'],
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error'],
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'no-public' },
        ],
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        '@typescript-eslint/lines-between-class-members': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unbound-method': 'error',
        'quote-props': 'off',
        'camelcase': 'off',
        'consistent-return': 'off',
        'eslint-comments/no-use': 'off',
        'github/no-then': 'off',
        'import/extensions': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/no-namespace': 'off',
        'import/prefer-default-export': 'off',
        'import/prefer-default-import': 'off',
        'lines-between-class-members': 'off',
        'no-console': 'off',
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-restricted-syntax': 'off',
        'one-var': 'off',
        'security/detect-non-literal-fs-filename': 'off',
        'security/detect-object-injection': 'off',
        'semi': 'off',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
        'sort-imports': 'off',
        'sonarjs/cognitive-complexity': 'off',
        'space-before-function-paren': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/import': 'off',
        'unicorn/import-style': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prevent-abbreviations': 'off',

        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
      },
      env: {
        'node': true,
        'es6': true,
        'es2021': true,
        'jest/globals': true,
      },
    },
  ],
};
