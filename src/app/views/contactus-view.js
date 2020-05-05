import { LitElement, html } from 'lit-element';

class ContactUsView extends LitElement {
    static get properties() { return {
        cu_name: { type: String },
        cu_email: { type: String },
        cu_message: { type: String },
        loading: {type: String},
        error: { type: String },
    };}

    constructor() {
        super();

        this.cu_name = "";
        this.cu_email = "";
        this.cu_message = "";
        this.loading = "";
        this.error = "";
    }

    handleInput(event) {
        this[event.target.id] = event.target.value
    }

    onSubmitEvent(event) {
        event.preventDefault()

        if (this.cu_name === "") {
            this.error = "You must enter a name!";
            return
        }

        if (this.cu_email === "") {
            this.error = "You must enter an email address!";
            return
        }

        if (this.cu_message === "") {
            this.error = "You must enter a message to send to us!";
            return
        }

        this.loading = "is-loading"
    }

    render() {
        return html`
        <link rel="stylesheet" type="text/css" href="./vendor/bulma.css">
        <section class="section">
            <div class="container">
                <h1 class="title">Contact Us</h1>
                
                ${this.renderError(this.error)}
                
                <div class="content">
                    <form @submit=${this.onSubmitEvent}>
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input id="cu_name" class="input" .value=${this.cu_name} @input=${this.handleInput}/>
                            </div>
                            <p class="help is-danger">
                                This field is required
                            </p>
                         </div>
                         
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input id="cu_email" class="input" .value=${this.cu_email} @input=${this.handleInput}/>
                            </div>
                            <p class="help is-danger">
                                This field is required
                            </p>
                        </div>
                        
                        <div class="field">
                            <label class="label">Message</label>
                            <div class="control">
                                <textarea id="cu_message" class="textarea" rows="7" .value=${this.cu_message} @input=${this.handleInput}></textarea>
                            </div>
                        </div>
                        
                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-link ${this.loading}">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        `;
    }

    renderError(error) {
        if (!error) {
            return ""
        }

        return html`
        <article class="message is-danger">
            <div class="message-header">
                <p>Error</p>
            </div>
            <div class="message-body">
                ${error}
            </div>
        </article>
        `
    }
}

customElements.define('contactus-view', ContactUsView);
