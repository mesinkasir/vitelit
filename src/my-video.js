import { html, LitElement } from 'lit';

export class MyVideo extends LitElement {
  static get properties() {
    return {
      video: { type: String },
      videotitle: { type: String },
    };
  }

  constructor() {
    super();
    this.video = 'https://www.youtube.com/embed/FeqTiQHiDw0';
    this.videotitle = 'creative by dre';
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <div class="ratio ratio-16x9">
        <iframe src="${this.video}" title="${this.videotitle}" class="rounded" allowfullscreen></iframe>
      </div>
      <slot></slot>
    `;
  }
}

window.customElements.define('my-video', MyVideo);
