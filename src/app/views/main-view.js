import { LitElement, html } from 'lit-element';

class MainView extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
          <link rel="stylesheet" type="text/css" href="./vendor/bulma.css">
          <section class="section">
            <div class="container">
                <h1 class="title">Rebel Clash Out Now</h1>
                <img src="../img/rc.png">
            </div>
          </section>
        `;
    }
}

customElements.define('main-view', MainView);
