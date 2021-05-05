/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface VtmnButton {
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size": 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant": | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
    }
    interface VtmnLink {
        /**
          * The hypertext link
          * @default '#'
         */
        "href": string;
        /**
          * Is the link standalone or not
          * @default null
         */
        "isStandalone": boolean;
        /**
          * The size of the link.
          * @default null
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * The target of the link
          * @default null
         */
        "target": string;
    }
    interface VtmnToggle {
        /**
          * The id of the toggle and its label.
         */
        "id": string;
        /**
          * The checked state of the toggle.
          * @default false
         */
        "isChecked": boolean;
        /**
          * The disabled state of the toggle.
          * @default false
         */
        "isDisabled": boolean;
        /**
          * The text of the toggle.
         */
        "labelText": string;
        /**
          * The size of the toggle.
         */
        "size": 'small' | 'medium';
    }
}
declare global {
    interface HTMLVtmnButtonElement extends Components.VtmnButton, HTMLStencilElement {
    }
    var HTMLVtmnButtonElement: {
        prototype: HTMLVtmnButtonElement;
        new (): HTMLVtmnButtonElement;
    };
    interface HTMLVtmnLinkElement extends Components.VtmnLink, HTMLStencilElement {
    }
    var HTMLVtmnLinkElement: {
        prototype: HTMLVtmnLinkElement;
        new (): HTMLVtmnLinkElement;
    };
    interface HTMLVtmnToggleElement extends Components.VtmnToggle, HTMLStencilElement {
    }
    var HTMLVtmnToggleElement: {
        prototype: HTMLVtmnToggleElement;
        new (): HTMLVtmnToggleElement;
    };
    interface HTMLElementTagNameMap {
        "vtmn-button": HTMLVtmnButtonElement;
        "vtmn-link": HTMLVtmnLinkElement;
        "vtmn-toggle": HTMLVtmnToggleElement;
    }
}
declare namespace LocalJSX {
    interface VtmnButton {
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size"?: 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant"?: | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
    }
    interface VtmnLink {
        /**
          * The hypertext link
          * @default '#'
         */
        "href"?: string;
        /**
          * Is the link standalone or not
          * @default null
         */
        "isStandalone"?: boolean;
        /**
          * The size of the link.
          * @default null
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * The target of the link
          * @default null
         */
        "target"?: string;
    }
    interface VtmnToggle {
        /**
          * The id of the toggle and its label.
         */
        "id": string;
        /**
          * The checked state of the toggle.
          * @default false
         */
        "isChecked"?: boolean;
        /**
          * The disabled state of the toggle.
          * @default false
         */
        "isDisabled"?: boolean;
        /**
          * The text of the toggle.
         */
        "labelText"?: string;
        /**
          * The size of the toggle.
         */
        "size"?: 'small' | 'medium';
    }
    interface IntrinsicElements {
        "vtmn-button": VtmnButton;
        "vtmn-link": VtmnLink;
        "vtmn-toggle": VtmnToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vtmn-button": LocalJSX.VtmnButton & JSXBase.HTMLAttributes<HTMLVtmnButtonElement>;
            "vtmn-link": LocalJSX.VtmnLink & JSXBase.HTMLAttributes<HTMLVtmnLinkElement>;
            "vtmn-toggle": LocalJSX.VtmnToggle & JSXBase.HTMLAttributes<HTMLVtmnToggleElement>;
        }
    }
}
