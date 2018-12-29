/*! Built with http://stenciljs.com */
const { h } = window.CarbonicButton;

class CarbonicButton {
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
    static get style() { return ":host,\n:host * {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\nbutton {\n    cursor: pointer;\n    color: black;\n    font-size: 12px;\n    border: 1px solid black;\n    background: transparent;\n    outline: none;\n    padding: 10px;\n}\n\nbutton:hover {\n    background: gray;\n}"; }
}

export { CarbonicButton };
