import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import {
  animate,
  AnimateController,
  fadeInSlow,
  fadeOut,
} from '@lit-labs/motion';
import { onFrames, data } from './support.js';
import { styles } from './styles.js';

export class MotionHero extends LitElement {
  static properties = {
    data: { type: Array },
    detail: { state: true },
  };
  static styles = styles;

  constructor() {
    super();
    this.data = data;
  }

  controller = new AnimateController(this, {
    defaultOptions: {
      keyframeOptions: {
        duration: 750,
        fill: 'both',
      },
      onFrames,
    },
  });

  render() {
    return html`<div class="container">
      <ul class="cards fit">
        ${repeat(
          this.detail ? [] : this.data,
          (i) => i,
          (i, x) => html`<li
              @click=${(e) => this.clickHandler(e, i)}
              ${animate({
                out: fadeOut,
                id: `${i.id}:card`,
                inId: `${i.id}:detail`,
              })}
            >
              <div
                class="card-background fit"
                ${animate({
                  in: fadeInSlow,
                  skipInitial: true,
                })}
              ></div>
              <div class="card-content">
                <div
                  class="icon card-icon"
                  ${animate({
                    id: `${i.id}:card-icon`,
                    inId: `${i.id}:detail-icon`,
                    skipInitial: true,
                  })}
                >
                shopping_cart
                </div>
              </div>
              <div
                class="divider"
                ${animate({
                  in: fadeInSlow,
                  skipInitial: true,
                })}
              ></div>
              <div class="card-header hero-text">
                <div
                  ${animate({
                    id: `${i.id}:card-header`,
                    inId: `${i.id}:detail-header`,
                    skipInitial: true,
                  })}
                >
                  <div class="card-header-title">${i.value}</div>
                  <div>${i.summary}</div>
                </div>
              </div>
            </li>`
        )}
      </ul>
      ${
        this.detail
          ? html`<div
            class="detail fit"
            @click=${this.clickHandler}
            ${animate({
              id: `${this.detail.id}:detail`,
              inId: `${this.detail.id}:card`,
            })}
          >
            <div class="detail-header">
              <div
                class="icon detail-header-icon"
                ${animate({
                  id: `${this.detail.id}:detail-icon`,
                  inId: `${this.detail.id}:card-icon`,
                })}
              >
              shopping_cart
              </div>
              <div
                class="detail-header-text hero-text"
                ${animate({
                  id: `${this.detail.id}:detail-header`,
                  inId: `${this.detail.id}:card-header`,
                })}
              >
                <div class="detail-header-title">${this.detail.value}</div>
                <div>${this.detail.summary}</div>
              </div>
            </div>
            <div
              class="detail-content divider-top"
              ${animate({
                in: fadeInSlow,
              })}
            >
            <img class="img-fluid" src="${this.detail.image}" width="320"/><br/>
            ${this.detail.content}
            </div>
          </div>`
          : ''
      }
    </div>`;
  }

  clickHandler(e, item) {
    if (this.controller.isAnimating) {
      this.controller.togglePlay();
    } else {
      this.detail = item;
    }
  }
}
customElements.define('motion-hero', MotionHero);
