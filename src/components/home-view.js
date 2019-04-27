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

class HomeView extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <p>I am a Ph.D. student at the <a href="http://www.utcluj.ro">Technical University of Cluj-Napoca</a>.</p>
      </section>
      <section>
        <h2>Short Bio</h2>
        <ul>
          <li><b>October 2014 - Present</b>: Ph.D. Student in Computer Science at the Technical University of Cluj-Napoca (under the supervision of <a href="http://users.utcluj.ro/~potolea/">Rodica Potolea</a>)</li>
          <li><b>October 2012 - June 2014</b>: M.Sc. in Software Engineering at the Technical University of Cluj-Napoca</li>
          <li><b>October 2008 - June 2012</b>: B.Sc. in Computer Science at the Technical University of Cluj-Napoca</li>
          <li><b>October 2004 - June 2008</b>: <a href="http://www.balcescucj.ro/">Nicolae Bălcescu High School</a>, Cluj-Napoca</li>
        </ul>
      </section>
    `;
  }
}

window.customElements.define('home-view', HomeView);
