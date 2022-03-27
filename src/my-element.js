import { html, LitElement } from 'lit';

export class MyElement extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      title: { type: String },
      desc: { type: String },
      class: { type: String },
      btn: { type: String },
      btnurl: { type: String },
    };
  }

  constructor() {
    super();
    this.url = 'home.html';
    this.title = 'Axcora Technology';
    this.class = 'border p-1 rounded';
    this.desc =
      'Creative website design with modern technology ,  Web App cloud POS and digital art solutions.';
    this.btn = 'Visit My Profile →';
    this.btnurl = 'https://start.axcora.com';
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="/css/home.css" rel="stylesheet" />
      <h1><strong><a href="${this.url}">${this.title}</a></strong></h1>
     <h2><strong>${this.desc}</strong></h2>
     <p><a href="${this.btnurl}" class="${this.class}">${this.btn}</a></p>
      <slot></slot>
    `;
  }
}

window.customElements.define('my-element', MyElement);
