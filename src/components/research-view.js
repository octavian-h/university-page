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

class ResearchView extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <h2>Research</h2>
        <p> My thesis goal is to extract patterns and knowledge from sensor data
         in order to drive improvements in the way customers use a given product.
         In this context, the fields of interest are: </p>
        <ul>
          <li>Time Series Analysis (<a href="https://github.com/octavian-h/time-series-math">code</a>)</li>
          <li>Recommendation Systems</li>
          <li>Sentiment Analysis</li>
         </ul>
        <p>I am part of the <a href="http://keg.utcluj.ro/">Knowledge Engineering Research Group</a>.</p>
        <p>My current focus is on overcoming source signal dependence in time series analysis.</p>
      </section>
    `;
  }
}

window.customElements.define('research-view', ResearchView);
