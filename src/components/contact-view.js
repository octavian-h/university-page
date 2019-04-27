/**
 @license
 Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {html} from 'lit-element';
import {PageViewElement} from './page-view-element.js';
// These are the shared styles needed by this element.
import {SharedStyles} from './shared-styles.js';

class ContactView extends PageViewElement {
  static get properties() {
    return {
      localPart: { type: String }
    };
  }

  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <h2>Contact</h2>
        <div class="h-card">
          <span class="p-name">Octavian Hasna</span> <br/>
          <a class="u-email" href="mailto:${this.localPart}@cs.utcluj.ro">${this.localPart}@cs.utcluj.ro</a> <br/> <br/>
          <span class="p-org">Technical University of Cluj-Napoca</span>
          <div class="p-adr">
            <span class="p-street-address">26-28, Barițiu St., room M03</span> <br/>
            <span class="p-locality">Cluj-Napoca</span>,
            <span class="p-region">Cluj</span>,
            <span class="p-postal-code">400027</span>,
            <span class="p-country-name">România</span>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('contact-view', ContactView);
