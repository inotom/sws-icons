/** @prettier */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sws-cross')
export class SwsCross extends LitElement {
  static styles = css`
    :host {
      --sws-cross-position: relative;
      --sws-cross-size: 24px;
      --sws-cross-color: currentColor;
      --sws-cross-line-weight: 2px;
      --sws-cross-line-border-radius: 0;
      --sws-cross-transition: transform 0.3s;
      --sws-cross-horizontal-line-deg: 0deg;
      --sws-cross-vertical-line-deg: 90deg;
    }
    .sws-cross {
      display: flex;
      justify-content: center;
      align-items: center;
      position: var(--sws-cross-position);
      width: var(--sws-cross-size);
      height: var(--sws-cross-size);
    }
    .sws-cross__line--horizontal,
    .sws-cross__line--vertical {
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: var(--sws-cross-line-weight);
      background-color: var(--sws-cross-color);
      transition: var(--sws-cross-transition);
      border-radius: var(--sws-cross-line-border-radius);
    }
    .sws-cross__line--horizontal {
      transform: rotate(var(--sws-cross-horizontal-line-deg));
    }
    .sws-cross__line--vertical {
      transform: rotate(var(--sws-cross-vertical-line-deg));
    }
  `;

  render() {
    // In Safari, transform animations will not work on pseudo-elements, so ::before and ::after are not used.
    return html`
      <div class="sws-cross" aria-hidden="true">
        <div class="sws-cross__line--horizontal"></div>
        <div class="sws-cross__line--vertical"></div>
      </div>
    `;
  }
}

@customElement('sws-hamburger')
export class SwsHamburger extends LitElement {
  static styles = css`
    :host {
      --sws-hamburger-width: 60px;
      --sws-hamburger-height: var(--sws-hamburger-width);
      --sws-hamburger-padding: 10px;
      --sws-hamburger-fg-color: currentColor;
      --sws-hamburger-bg-color: initial;
      --sws-hamburger-lines-bg-color: initial;
      --sws-hamburger-line-align: center;
      --sws-hamburger-line-weight: 3px;
      --sws-hamburger-line-margin: 10px;
      --sws-hamburger-line-border-radius: 0;
      --sws-hamburger-line-transition: transform 0.3s;
      --sws-hamburger-line-1-opacity: 1;
      --sws-hamburger-line-2-opacity: 1;
      --sws-hamburger-line-3-opacity: 1;
      --sws-hamburger-line-1-width: 100%;
      --sws-hamburger-line-2-width: 100%;
      --sws-hamburger-line-3-width: 100%;
      --sws-hamburger-line-1-color: var(--sws-hamburger-fg-color);
      --sws-hamburger-line-2-color: var(--sws-hamburger-fg-color);
      --sws-hamburger-line-3-color: var(--sws-hamburger-fg-color);
      --sws-hamburger-line-1-transform: translateY(
        calc((var(--sws-hamburger-line-weight) + var(--sws-hamburger-line-margin)) * -1)
      );
      --sws-hamburger-line-2-transform: initial;
      --sws-hamburger-line-3-transform: translateY(
        calc(var(--sws-hamburger-line-weight) + var(--sws-hamburger-line-margin))
      );
      --sws-hamburger-lable-bg-color: initial;
      --sws-hamburger-lable-margin: 3px;
    }
    .sws-hamburger {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: cener;
      gap: var(--sws-hamburger-lable-margin);
      width: var(--sws-hamburger-width);
      height: var(--sws-hamburger-height);
      padding: var(--sws-hamburger-padding);
      color: var(--sws-hamburger-fg-color);
      background: var(--sws-hamburger-bg-color);
    }
    .sws-hamburger__lines {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: var(--sws-hamburger-line-align);
      position: relative;
      background-color: var(--sws-hamburger-lines-bg-color);
    }
    .sws-hamburger__line {
      position: absolute;
      display: block;
      height: var(--sws-hamburger-line-weight);
      border-radius: var(--sws-hamburger-line-border-radius);
      transition: var(--sws-hamburger-line-transition);
    }
    .sws-hamburger__line.mod--1 {
      width: var(--sws-hamburger-line-1-width);
      background: var(--sws-hamburger-line-1-color);
      opacity: var(--sws-hamburger-line-1-opacity);
      transform: var(--sws-hamburger-line-1-transform);
    }
    .sws-hamburger__line.mod--2 {
      width: var(--sws-hamburger-line-2-width);
      background: var(--sws-hamburger-line-2-color);
      opacity: var(--sws-hamburger-line-2-opacity);
      transform: var(--sws-hamburger-line-2-transform);
    }
    .sws-hamburger__line.mod--3 {
      width: var(--sws-hamburger-line-3-width);
      background: var(--sws-hamburger-line-3-color);
      opacity: var(--sws-hamburger-line-3-opacity);
      transform: var(--sws-hamburger-line-3-transform);
    }
    .sws-hamburger__label {
      flex-shrink: 0;
      background-color: var(--sws-hamburger-lable-bg-color);
    }
    .sws-hamburger__label.mod--empty {
      display: none;
    }
  `;

  // prettier-ignore
  @property({ type: Boolean, attribute: 'is-double-line' })
    isDoubleLine = false;

  firstUpdated() {
    const slot = this.shadowRoot?.querySelector('slot');
    const elLabel = this.shadowRoot?.querySelector('.sws-hamburger__label');
    if (elLabel && slot) {
      if (slot.assignedNodes().length === 0) {
        elLabel.classList.add('mod--empty');
        elLabel.setAttribute('aria-hidden', 'true');
      }
    }
  }

  render() {
    const lines = [];
    const lineCount = this.isDoubleLine ? 2 : 3;

    for (let i = 0; i < lineCount; i++) {
      lines.push(html`<div class="sws-hamburger__line mod--${i + 1}"></div>`);
    }

    return html`<div class="sws-hamburger">
      <div class="sws-hamburger__lines" aria-hidden="true">${lines}</div>
      <div class="sws-hamburger__label"><slot></slot></div>
    </div>`;
  }
}

@customElement('sws-angle')
export class SwsAngle extends LitElement {
  static styles = css`
    :host {
      --sws-angle-position: relative;
      --sws-angle-size: 30px;
      --sws-angle-color: currentColor;
      --sws-angle-triangle-color: none;
      --sws-angle-line-weight: 2px;
      --sws-angle-transform: none;
      --sws-angle-transform-origin: 50% 50% 0;
      --sws-angle-transition: transform 0.3s;
    }
    .sws-angle {
      display: flex;
      justify-content: center;
      align-items: center;
      position: var(--sws-angle-position);
      width: var(--sws-angle-size);
      height: var(--sws-angle-size);
    }
    .sws-angle svg {
      width: var(--sws-angle-size);
      height: var(--sws-angle-size);
      transform: var(--sws-angle-transform);
      transform-origin: var(--sws-angle-transform-origin);
      transition: var(--sws-angle-transition);
    }
    .sws-angle polyline {
      fill: var(--sws-angle-triangle-color);
      stroke: var(--sws-angle-color);
      stroke-width: var(--sws-angle-line-weight);
    }
  `;

  // prettier-ignore
  @property({ type: String, attribute: 'linejoin' })
    linejoin = 'miter';

  // prettier-ignore
  @property({ type: String, attribute: 'linecap' })
    linecap = 'butt';

  private size = 30;

  render() {
    return html`
      <div class="sws-angle" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="${this.size}"
          height="${this.size}"
          viewBox="0 0 ${this.size} ${this.size}"
        >
          <polyline
            xpoints="${(35 / 100) * this.size} ${(20 / 100) * this.size} ${(65 / 100) *
            this.size} ${(50 / 100) * this.size} ${(35 / 100) * this.size} ${(80 / 100) *
            this.size}"
            points="${(30 / 100) * this.size} ${(10 / 100) * this.size} ${(70 / 100) *
            this.size} ${(50 / 100) * this.size} ${(30 / 100) * this.size} ${(90 / 100) *
            this.size}"
            fill="none"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="${this.linecap}"
            stroke-linejoin="${this.linejoin}"
          />
        </svg>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sws-cross': SwsCross;
    'sws-hamburger': SwsHamburger;
    'sws-angle': SwsAngle;
  }
}
