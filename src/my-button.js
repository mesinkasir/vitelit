import { html, LitElement } from 'lit';

export class MyButton extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      title: { type: String },
      class: { type: String },
    };
  }

  constructor() {
    super();
    this.url = 'home.html';
    this.title = 'ENTER NOW';
    this.class = 'btn btn-btns border btn-lg';
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <a href="${this.url}" class="${this.class}">${this.title}</a>
      <slot></slot>
    `;
  }
}

window.customElements.define('my-button', MyButton);
