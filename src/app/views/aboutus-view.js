import { LitElement, html } from 'lit-element';

class AboutUsView extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
        <link rel="stylesheet" type="text/css" href="./vendor/bulma.css">
        <section class="section">
            <div class="container">
                <h1 class="title">About Us</h1>
                <div class="content">
                    <img src="../img/flag.png">
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('aboutus-view', AboutUsView);
