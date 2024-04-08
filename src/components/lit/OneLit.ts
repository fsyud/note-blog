import { LitElement, html } from 'lit'

export class OneElement extends LitElement {
	render() {
		return html`<slot></slot>`
	}
}

customElements.define('oen-element', OneElement)

declare global {
	interface HTMLElementTagNameMap {
		'one-element': OneElement
	}
}
