import { Component, Prop, Event, EventEmitter, Element } from '@stencil/core';

@Component({
    tag: 'carbonic-button',
    styleUrl: 'carbonic-button.css',
    shadow: true
})
export class CarbonicButton {
    /**
     * This HTML element
     */
    @Element() el: HTMLElement;

    /**
     * Event emitted on every click
     */
    @Event() carbonicButtonClicked: EventEmitter;

    /**
     * Text visible on the button
     */
    @Prop({ reflectToAttr: true }) label = 'Click me';

    private onClickHandler = () => {
        this.carbonicButtonClicked.emit();
    }

    render() {
        return (
            <button onClick={this.onClickHandler}>
                {this.label}
            </button>
        );
    }
}
