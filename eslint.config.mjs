// Copyright 2024, University of Colorado Boulder

/**
 * ESLint configuration for fenster.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

import nodeEslintConfig from '../chipper/eslint/node.eslint.config.mjs';

export default [
  ...nodeEslintConfig,
  {
    ignores: [
      '**/**',
      'platforms/',
      'plugins/'
    ],
    languageOptions: {
      globals: {
        alert: 'readonly',
        cordova: 'readonly',
        navigator: 'readonly',
        TTS: 'readonly'
      }
    },
    rules: {
      'phet/todo-should-have-issue': 'off'
    }
  },
  {
    ignores: [
      '**/**',
      'platforms/',
      'plugins/'
    ]
  }
];