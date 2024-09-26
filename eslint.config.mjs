// Copyright 2024, University of Colorado Boulder

/**
 * ESlint configuration for fenster.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

import parent from '../chipper/eslint/node.eslint.config.mjs';

export default [
  ...parent,
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