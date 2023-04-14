import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class HelloWorld extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--hello-world-text-color, #000);
    }
    button {
      background-color: red;
      padding: 5px 10px;
      border-style: none;
      border-radius: 5px;
    }
    button:active {
      background-color: red;
    }
  `;

  @property({ type: String }) header = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
