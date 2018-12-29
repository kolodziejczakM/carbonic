import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class CarbonicButton {
    /**
     * This HTML element
     */
    el: HTMLElement;
    /**
     * Event emitted on every click
     */
    carbonicButtonClicked: EventEmitter;
    /**
     * Text visible on the button
     */
    label: string;
    private onClickHandler;
    render(): JSX.Element;
}
