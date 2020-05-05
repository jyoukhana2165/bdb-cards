import { LitElement, html } from 'lit-element';

class ProductsView extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
        <link rel="stylesheet" type="text/css" href="./vendor/bulma.css">
        <section class="section">
            <div class="container">
                <h1 class="title">Products</h1>
                <div class="content">
                    <p>TODO</p>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('products-view', ProductsView);
