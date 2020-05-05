import { LitElement, html, css } from "lit-element";
import { navigator } from "lit-element-router";

@navigator
export class Link extends LitElement {
    static get properties() {
        return {
            href: { type: String }
        };
    }

    static get styles() {
        return css`
            a:hover { 
                background-color: #118fe4;
                padding: 1em;     
            }
            a {
                border-bottom-width: 1px;
                padding: 1em;
                margin-bottom: -1px;
                text-decoration: none;
            }
        `;
    }

    constructor() {
        super();
        this.href = "";
    }

    render() {
        return html`
        <!--<link rel="stylesheet" type="text/css" href="./vendor/bulma.css">-->
        <!--class="navbar-item"-->
        <a style="color:white" href="${this.href}" @click="${this.linkClick}">
            <slot></slot>
        </a>
        `;
    }

    linkClick(event) {
        event.preventDefault();
        this.navigate(this.href);
    }
}

customElements.define("app-link", Link);
