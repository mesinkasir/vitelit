import { html, LitElement } from 'lit';

export class MySection extends LitElement {
  static get properties() {
    return {
      class: { type: String },
      image1: { type: String },
      title1: { type: String },
      desc1: { type: String },
      image2: { type: String },
      title2: { type: String },
      desc2: { type: String },
      image3: { type: String },
      title3: { type: String },
      desc3: { type: String },
    };
  }

  constructor() {
    super();
    this.class = 'img-fluid rounded';
    this.title1 = 'Modern Web Design';
    this.title2 = 'Cloud POS Web App';
    this.title3 = 'Develope Android App';
    this.image1 =
      'https://blogger.googleusercontent.com/img/a/AVvXsEhDOK7kRw2j0-zv7wXCcEzQnmioBla_0uYNGhNwyYkcsX6SdY37yh4bIZMCNBW3wcP_asF2UsrFcWrmoOGv241678TnYdJFpBHwE0V8c_4Kfk0DxFvoo6TCNmX7TQGnf1GM__EmdmB03yJCFs4JpwyPBu0C8Uagu3GhgJwu2rocEcgVk4FjRM9FW40NWA=s1920';
    this.image2 =
      'https://1.bp.blogspot.com/-H42dYAX8K7o/XzpTSWl9kZI/AAAAAAAALG0/q201upeuQq00VNG_M2gDIRPVswz26Sg7wCLcBGAsYHQ/s910/aplikasi%2Btoko%2Bonline%2Bweb%2Bapp.jpg';
    this.image3 =
      'https://axcora.com/img/android/themes/pembuatan%20aplikasi%20android%20(24).jpg';
    this.desc1 =
      'Build modern website with new technology, jekyll , asto,eleventy, gatsby, angular, svelte, react,phyton django pelician flask ,laravel,symfony and flatfile cms MODX , pico , get axcora cms and more...';
    this.desc2 =
      'Develope modern cloud point of sale app integration with website.';
    this.desc3 = 'Create android app bundle for upload to google playstore';
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="/css/home.css" rel="stylesheet" />
    <div class="row">
    <div class="col-md-4 p-3">
    <img
      class="${this.class}"
      width="100%"
      src="${this.image1}"
      alt="${this.title1}"
    />
    <div class="p-1">
     <h3><strong><a href="/">${this.title1}</strong></a></h3>
     <p>${this.desc1}</p>
    </div>
  </div>
  <div class="col-md-4 p-3">
  <img
    class="${this.class}"
    width="100%"
    src="${this.image2}"
    alt="${this.title2}"
  />
  <div class="p-1">
   <h3><strong><a href="/">${this.title2}</a></strong></h3>
   <p>${this.desc2}</p>
  </div>
</div>
<div class="col-md-4 p-3">
<img
  class="${this.class}"
  width="100%"
  src="${this.image3}"
  alt="${this.title3}"
/>
<div class="p-1">
 <h3><strong><a href="/">${this.title3}</a></strong></h3>
 <p>${this.desc3}</p>
</div>
</div>
</div>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('my-section', MySection);
