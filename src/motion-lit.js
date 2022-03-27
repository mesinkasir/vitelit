import { LitElement, html } from 'lit';
import { animate, AnimateController, flyBelow, fade } from '@lit-labs/motion';
import { styles } from './style.js';

export class MotionLit extends LitElement {
  static properties = {
    letters: { type: Array },
  };
  static styles = styles;

  lit = ['A', 'X', 'C', 'O', 'R', 'A'];

  duration = 1000;
  controller = new AnimateController(this, {
    defaultOptions: {
      keyframeOptions: {
        duration: this.duration,
        fill: 'backwards',
      },
    },
    onComplete: () => this.changeLayout(),
  });
  constructor() {
    super();
    this.addEventListener('click', () => this.clickHandler());
    this.letters = this.lit;
  }

  render() {
    const delayTime = this.duration / (this.letters.length * 2.5);
    return html`
      ${this.letters?.map(
        (letter, i) => html`<span
            class="letter"
            ${animate({
              keyframeOptions: {
                delay: i * delayTime,
              },
              in: fade,
              out: flyBelow,
            })}
            >${letter}</span
          >`
      )}
    `;
  }

  clickHandler() {
    if (this.controller.isAnimating) {
      this.controller.togglePlay();
    } else {
      this.changeLayout();
    }
  }

  changeLayout() {
    this.letters = this.letters.length ? [] : this.lit;
  }
}
customElements.define('motion-lit', MotionLit);
