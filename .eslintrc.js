/**
 * Règles communes pour Vue et JS
 */
const commonRules = {
  // Force des espaces consistants dans les parenthèses
  'space-in-parens': ['error', 'never'],
  // pas de dernière virgule
  'comma-dangle': ['error', 'never'],
  // Force un espace avant et après un mot clé, if, else etc
  'keyword-spacing': ['error'],
  // Force un espace dans les objets
  'object-curly-spacing': ['error', 'always'],
  // imbrication des {} (if/else/try/catch/etc...) unique
  'brace-style': 'error',
  // triple = obligatoire
  eqeqeq: 'error',
  // espaces entre opérateurs
  'space-infix-ops': ['error'],
  // Force les propriétés à être espacées Ex: { hello: 'World' } -> espace après le double point
  'key-spacing': ['error', { afterColon: true }],
  // Préfère les template string que les concaténations
  'prefer-template': 'error'
}

/**
 * Pour Vue, on prefix par `vue/`
 *
 * @example `vue/space-in-parens`
 */
const commonVueRules = Object.fromEntries(
  Object.entries(commonRules)
    .map(([key, value]) => [`vue/${key}`, value])
)

/**
 * JS natif
 */
const jsRules = {
  indent: ['error', 2, { SwitchCase: 1 }],
  // Force les commentaires multi-lignes du type starred-block
  'multiline-comment-style': ['error', 'starred-block'],
  curly: ['error', 'all'], // {} toujours requises
  'quote-props': 'off', // controle des quotes autour des propriétés des objets
  'no-trailing-spaces': 'error', // pas d'espaces vides
  semi: ['error', 'never'], // pas de ";" à la fin des lignes
  'object-shorthand': ['error', 'always'],
  // les const, c'est la vie
  'prefer-const': [
    'error',
    {
      destructuring: 'all',
      ignoreReadBeforeAssign: false
    }
  ],
  // pas d'espaces avant les () d'une fonction
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }
  ]
}

/**
 * Vue uniquement
 */
const vueRules = {
  'vue/no-spaces-around-equal-signs-in-attribute': 'error',
  'vue/this-in-template': ['error', 'never'],
  'vue/v-on-style': ['error', 'longform'],
  'vue/v-bind-style': ['error', 'shorthand'],
  'vue/custom-event-name-casing': 'error',
  'vue/require-name-property': 'error',
  'vue/prop-name-casing': ['error', 'camelCase'],
  'vue/v-slot-style': [
    'error',
    {
      atComponent: 'longform',
      default: 'longform',
      named: 'longform'
    }
  ],
  'vue/attribute-hyphenation': ['error', 'never'],
  'vue/component-definition-name-casing': 'error',
  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'never',
        normal: 'never',
        component: 'never'
      }
    }
  ],
  'vue/html-indent': [
    'error',
    2,
    {
      attribute: 1,
      baseIndent: 1,
      alignAttributesVertically: false
    }
  ],
  'vue/max-attributes-per-line': [
    'error',
    {
      singleline: { max: 1 },
      multiline: { max: 1 }
    }
  ],
  'vue/attributes-order': [
    'error',
    {
      order: [
        'CONDITIONALS',
        'LIST_RENDERING',
        'OTHER_DIRECTIVES',
        'GLOBAL',
        'UNIQUE',
        'DEFINITION',
        'TWO_WAY_BINDING',
        'OTHER_ATTR',
        'CONTENT',
        'RENDER_MODIFIERS',
        'EVENTS'
      ],
      alphabetical: false
    }
  ],
  'vue/mustache-interpolation-spacing': ['error', 'always'],
  'vue/no-multi-spaces': ['error']
}

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    ...commonRules,
    ...commonVueRules,
    ...jsRules,
    ...vueRules,
    '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
    /*
     * Per the docs, the root no-unused-vars should be disabled:
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
     */
    'no-unused-vars': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/1cf9243/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    'no-undef': 'off'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    }
  }
}
