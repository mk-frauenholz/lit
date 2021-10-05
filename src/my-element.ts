import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { calculateColor } from "./calculateColor";
import './my-card';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-section')
export class SectionElement extends LitElement {
  static styles = css`
    .section {
      background-color: var(--background);
      color: var(--foreground);
      padding: 1em;
      font-family: 'Roboto', sans-serif;
    }
  `

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World'

  @property({type: 'string'})
  bgColor = '#f3f6e6'

  @property()
  fontColor = 'recalculate';

  @property()
  lightTextColor = '#FFFFFF';

  @property()
  darkTextColor = '#0146e0';

  connectedCallback() {
    super.connectedCallback();

    if(this.fontColor === 'recalculate') {
      this.fontColor = calculateColor(this.bgColor, this.lightTextColor, this.darkTextColor)
    }
  }

  render() {
    return html`
      <div class="section" style="--background: ${this.bgColor}; --foreground: ${this.fontColor}">
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-section': SectionElement
  }
}
