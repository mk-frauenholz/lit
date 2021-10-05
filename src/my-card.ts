import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { calculateColor } from "./calculateColor";

@customElement('my-card')
export class CardElement extends LitElement {
    static styles = css`
    .card {
      background-color: #FFF;
      color: var(--foreground);
      padding: 2em;
      margin: 1.2em;
      display: inline-block;
      font-family: 'Roboto', sans-serif;
      border: 2px solid #000;
      box-shadow: 10px 10px 0px 0px var(--foreground);
    }
    .round {
      border-radius: 1em;

    }
  `

    @property()
    fontColor = 'recalculate';

    @property()
    lightTextColor = '#FFFFFF';

    @property()
    darkTextColor = '#0146e0';

    @property({type: 'boolean'})
    round = false;

    connectedCallback() {
        super.connectedCallback();

        if(this.fontColor === 'recalculate') {
            this.fontColor = calculateColor('#FFFFFF', this.lightTextColor, this.darkTextColor)
        }
    }

    render() {
        return html`
      <div class="card ${this.round ? 'round' : ''}" style="--foreground: ${this.fontColor}">
        <slot></slot>
      </div>
    `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-card': CardElement
    }
}
