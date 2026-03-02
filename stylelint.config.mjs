/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    '@stylistic/stylelint-config',
  ],
  plugins: ['@stylistic/stylelint-plugin'],
  overrides: [
    {
      files: ['**/*.scss', '**/*.sass'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.module.css', '**/*.module.scss'],
      rules: {
        'selector-class-pattern': null, // Allow CSS Modules naming
      },
    },
  ],
  rules: {
    // Color formatting
    '@stylistic/color-hex-case': 'upper',

    // Block formatting
    '@stylistic/block-closing-brace-newline-after': 'always',
    '@stylistic/indentation': 2,

    // Allow CSS Modules and Next.js specific patterns
    'selector-class-pattern': null,
    'custom-property-pattern': null,

    // Allow CSS-in-JS patterns (if using styled-components/emotion)
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme', 'screen'],
      },
    ],
  },
}
