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

class PublicationsView extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <h2>Publications</h2>

        <h3>2018</h3>
        <p>
          Octavian Lucian Hasna &amp; Rodica Potolea.
          <b>Analysing a Periodical and Multi-dimensional Time Series</b>.
          In proceedings of the <i>International Conference on Mining Intelligence and Knowledge Exploration
          (MIKE)</i> (pp. 268-278). Cluj-Napoca, Romania.
          <a href="https://link.springer.com/chapter/10.1007/978-3-030-05918-7_24">(link)</a>
        </p>
        
        <h3>2017</h3>
        <p>
          Octavian Lucian Hasna &amp; Rodica Potolea.
          <b>Robust feature extraction from noisy ECG for atrial fibrillation detection</b>.
          <i>Computing in Cardiology (CinC)</i>. Rennes, France.
          <a href="https://ieeexplore.ieee.org/abstract/document/8331573/">(link)</a>
        </p>
        <p>
          Octavian Lucian Hasna &amp; Rodica Potolea.
          <b>Time series - A taxonomy based survey</b>.
          In proceedings of the <i>Intelligent Computer Communication and Processing
          (ICCP)</i> (pp. 231-238). Cluj-Napoca, Romania.
          <a href="https://ieeexplore.ieee.org/abstract/document/8117009/">(link)</a>
        </p>
  
        <h3>2016</h3>
        <p>
          Octavian Lucian Hasna &amp; Rodica Potolea.
          <b>The Longest Common Subsequence Distance using a Complexity Factor</b>.
          In proceedings of the <i>International Conference of Knowledge Discovery and Information Retrieval
          (KDIR)</i> (pp. 336-343). Porto, Portugal.
          <a href="http://www.scitepress.org/DigitalLibrary/PublicationsDetail.aspx?ID=C2qMVMex8qE=&t=1">(link)</a>
        </p>
  
        <h3>2014</h3>
        <p>
          Octavian Lucian Hasna, Florin Cristian Măcicăşan, Mihaela Dînşoreanu &amp; Rodica Potolea.
          <b>Modeling Sentiment Polarity with Meta-features to Achieve Domain-Independence</b>.
          In <i>Knowledge Discovery, Knowledge Engineering and Knowledge Management</i> (pp. 212-227). Springer
          International Publishing.
          <a href="http://link.springer.com/chapter/10.1007%2F978-3-319-25840-9_14">(link)</a>
        </p>
        <p>
          Octavian Lucian Hasna, Florin Cristian Măcicăşan, Mihaela Dînşoreanu &amp; Rodica Potolea.
          <b>Sentiment Polarity Extension for Context-Sensitive Recommender Systems</b>.
          In proceedings of the <i>International Conference of Knowledge Discovery and Information Retrieval
          (KDIR)</i> (pp. 126-137). Rome, Italy.
          <i>(nominated for the "best student paper" award)</i>
          <a href="http://bit.ly/kdir2014art">(pdf)</a> <a href="http://bit.ly/kdir2014prez">(prez)</a>
        </p>
  
        <h3>2012</h3>
        <p>
          Florin Cristian Măcicăşan &amp; Octavian Lucian Hasna.
          <b>Context-Behavioral Advertisement Recommendation – A Unified Approach</b>.
          In the <i>3rd Computer Science Student Conference</i> Cluj-Napoca, Romania.
          <i>won the 3rd prize (from TUCN students)</i>
          <a href="http://bit.ly/cssc2012art">(pdf)</a> <a href="http://bit.ly/cssc2012prez">(prez)</a>
        </p>
        <p>
          Mihaela Dînşoreanu, Florin Cristian Măcicăşan, Octavian Lucian Hasna &amp; Rodica Potolea.
          <b>A Unified Approach for Context-sensitive Recommendations</b>.
          In proceedings of the <i>International Conference of Knowledge Discovery and Information Retrieval
          (KDIR)</i> (pp. 85-94). Barcelona, Spain.
          <i>(nominated for the "best student paper" award)</i>
          <a href="http://bit.ly/kdir2012art">(pdf)</a> <a href="http://bit.ly/kdir2012prez">(prez)</a>
        </p>
      </section>
    `;
  }
}

window.customElements.define('publications-view', PublicationsView);
