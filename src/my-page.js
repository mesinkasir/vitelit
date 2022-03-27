import { LitElement, html } from 'lit';

class MyPage extends LitElement {
  static properties = {
    article: { attribute: false },
  };

  constructor() {
    super();
    this.article = {
      title: 'Template composition',
      text: `Defining partial templates as instance methods
           breaks the template into manageable pieces—and
           allows a subclass to override individual parts of the template.`,
    };
  }

  headerTemplate() {
    return html`<header><h1>${this.article.title}</h1></header>`;
  }

  articleTemplate() {
    return html`<article>${this.article.text}</article>`;
  }

  render() {
    return html`
      ${this.headerTemplate()}
      ${this.articleTemplate()}
    `;
  }
}
customElements.define('my-page', MyPage);
