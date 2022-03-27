import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { animate, flyBelow, fadeIn } from '@lit-labs/motion';
import { styles } from './stylesa.js';

export class MotionList extends LitElement {
  static properties = {
    list: { state: true },
    row: { state: true },
    count: { state: true },
  };
  static styles = styles;

  constructor() {
    super();
    this.list = this.data;
    this.row = false;
    this.count = 0;
  }

  data = [
    { value: 'Angular' },
    { value: 'Vite' },
    { value: 'Lit' },
    { value: 'React' },
    { value: 'Svelte' },
  ];

  duration = 800;

  render() {
    return html`
      <ul class="tabs ${classMap({ row: this.row })}">
        ${repeat(
          this.list,
          (i) => i,
          (item, i) => html`<li
              ${animate({
                keyframeOptions: {
                  duration: this.duration,
                  delay: (i * this.duration) / this.list.length,
                  fill: 'both',
                },
                in: fadeIn,
                out: flyBelow,
                onComplete:
                  i === this.list.length - 1
                    ? () => this.changeLayout()
                    : undefined,
              })}
            >
              ${item.value}
            </li>`
        )}
      </ul>
    `;
  }

  async changeLayout() {
    await new Promise(requestAnimationFrame);
    this.count++;
    if (this.count % this.data.length === 0) {
      this.list = [];
    } else {
      this.row = !this.row;
      this.list = this.data.slice().sort(() => 0.5 - Math.random());
    }
  }
}
customElements.define('motion-list', MotionList);
