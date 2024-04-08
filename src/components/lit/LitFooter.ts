import { LitElement, html, css } from 'lit'

export class LitFooter extends LitElement {
	static styles = css`
		footer {
			display: flex;
			justify-content: center;
		}
	`

	today = new Date()

	// Render the UI as a function of component state
	render() {
		return html`<footer>&copy; ${this.today.getFullYear()} yu. All rights reserved.</footer> `
	}
}

customElements.define('lit-footer', LitFooter)

declare global {
	interface HTMLElementTagNameMap {
		'lit-footer': LitFooter
	}
}
