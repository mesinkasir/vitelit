import { html, LitElement } from 'lit';

export class MyNav extends LitElement {
  static get properties() {
    return {
      class: { type: String },
      product: { type: String },
      order: { type: String },
      home: { type: String },
      urlproduct: { type: String },
      urlorder: { type: String },
      urlhome: { type: String },
    };
  }

  constructor() {
    super();
    this.class = 'nav-link';
    this.product = 'Blog';
    this.order = 'Game';
    this.home = 'Home';
    this.urlproduct = 'product.html';
    this.urlorder = 'order.html';
    this.urlhome = 'home.html';
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="/css/home.css" rel="stylesheet" />

    <nav class="nav justify-content-center">
    <a class="${this.class}" href="${this.urlhome}">${this.home}</a>
    <a class="${this.class}" href="${this.urlproduct}">${this.product}</a>
    <a class="${this.class}" href="${this.urlorder}">${this.order}</a>
  </nav>
      <slot></slot>
    `;
  }
}

window.customElements.define('my-nav', MyNav);
