export class CarbonicButton {
    constructor() {
        /**
         * Text visible on the button
         */
        this.label = 'Click me';
        this.onClickHandler = () => {
            this.carbonicButtonClicked.emit();
        };
    }
    render() {
        return (h("button", { onClick: this.onClickHandler }, this.label));
    }
    static get is() { return "carbonic-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "label": {
            "type": String,
            "attr": "label",
            "reflectToAttr": true
        }
    }; }
    static get events() { return [{
            "name": "carbonicButtonClicked",
            "method": "carbonicButtonClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:carbonic-button:**/"; }
}
