import { FASTElement, html, css } from "@microsoft/fast-element";

const template = html`
  <div class="tab" id=${(x) => x.name}>
    ${(x) => x.name}<slot></slot>
    <span class="underline"></span>
  </div>
`;

const styles = css`
  .tab {
    cursor: pointer;
    max-width: max-content;
    position: relative;
    border-radius: 5px;
    color: var(--secondary-text);
  }
  .tab:hover {
    transition: color 0.3s;
    color: var(--black-text);
  }

  .tab:hover .underline {
    width: 100%;
  }

  .underline {
    width: 0;
    height: 2px;
    background-color: var(--base-color);
    position: absolute;
    bottom: -12px;
    left: 0;
    transition: width 0.3s ease-in-out;
  }
`;

export class Tab extends FASTElement {
    static definition = {
        name: "awc-tab",
        template,
        styles,
        attributes: [
            { attribute: "name", property: "name" },
            { attribute: "id", property: "id" },
        ], 
    };
}

FASTElement.define(Tab);