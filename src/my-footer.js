import { html, LitElement } from 'lit';

export class MyFooter extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      address: { type: String },
      city: { type: String },
      phone: { type: String },
      wa: { type: String },
      email: { type: String },
      map: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'AXCORA TECH';
    this.address = 'Ruko Pasar Wisata Juanda Q.05-07 , Sidoarjo';
    this.city = 'East Java - Indonesia';
    this.phone = '62895339403223';
    this.wa = '6285646104747';
    this.email = 'axcora@gmail.com';
    this.map = 'https://goo.gl/maps/AgUgbcCXszTNUqsp7';
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="/css/home.css" rel="stylesheet" />
    <div class="row border-top">
    <div class="col-12 col-md-8 p-3 p-md-5">
    <h3 class="display-2"><strong>${this.title}</strong></h3></div>
    <div class="col-12 col-md-4 p-3">
    <p>${this.address}<br/>
    ${this.city}<br/>
    Phone : <a href="tel:+${this.phone}">+${this.phone}</a><br/>
    Whatsapp : <a href="https://wa.me/${this.wa}">+${this.wa}</a><br/>
    Email : <a href="mailto:${this.email}">${this.email}</a><br/>
    <a href="${this.map}" target="_blank">Geo Map Location</a></p>
    </div>
    </div>
      <slot></slot>
    `;
  }
}

window.customElements.define('my-footer', MyFooter);
