
// CarbonicButton: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './carbonic-button.core.js';
import {
  CarbonicButton
} from './carbonic-button.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    CarbonicButton
  ], opts);
}
