
// CarbonicDropdown: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './carbonic-dropdown.core.js';
import {
  CarbonicDropdown
} from './carbonic-dropdown.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    CarbonicDropdown
  ], opts);
}
