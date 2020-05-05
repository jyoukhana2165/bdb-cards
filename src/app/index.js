import './app.scss';

import './views/main-view.js';
import './views/products-view.js';
import './views/aboutus-view.js';
import './views/contactus-view.js';
import './app-main.js';
import './app-link.js';

import {} from "@webcomponents/webcomponentsjs/webcomponents-loader.js";

import { LitElement, html } from "lit-element";
import { router } from "lit-element-router";

@router
class App extends LitElement {
    static get properties() {
        return {
            route: { type: String },
            params: { type: Object },
            query: { type: Object },
            data: { type: Object }
        };
    }

    static get routes() {
        return [
            {
                name: "home",
                pattern: "",
                data: { title: "Home" }
            },
            {
                name: "products",
                pattern: "products"
            },
            {
                name: "aboutus",
                pattern: "aboutus"
            },
            {
                name: "contactus",
                pattern: "contactus"
            },
            {
                name: "not-found",
                pattern: "*"
            }
        ];
    }

    constructor() {
        super();
        this.route = "";
        this.params = {};
        this.query = {};
        this.data = {};
    }

    router(route, params, query, data) {
        this.route = route;
        this.params = params;
        this.query = query;
        this.data = data;
    }

    render() {
        return html`
      <app-main active-route=${this.route}>
        <main-view route="home"></main-view>
        <products-view route="products"></products-view>
        <aboutus-view route="aboutus"></aboutus-view>
        <contactus-view route="contactus"></contactus-view>
        <h1 route="not-found">Not Found</h1>
      </app-main>
    `;
    }
}

customElements.define("my-app", App);

