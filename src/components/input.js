import { FASTElement, html, css } from "@microsoft/fast-element";

const template = html`
  <input 
  class="awc-input ${(x) => x.color}" 
  type="text" 
  name="${(x) => x.name}"
  id="${(x) => x.id}"
  placeholder="${(x) => x.placeholder}" 
  />
`;

const styles = css`
  .awc-input {
    padding: 13px 0 13px 16px;
    border-radius: 5px;
    border: none;
    color: var(--secondary-text);
    background: var(--input-background);
  }
  .awc-input:focus-visible {
    outline: 1px solid var(--secondary-text);
  }
  .red {
    background: red;
    color: white;
  }

  .purple {
    background: purple;
    color: white;
  }
`;

export class Input extends FASTElement {
  static definition = {
    name: "awc-input",
    template,
    styles,
    attributes: 
    ["name", 
    { attribute: "placeholder", property: "placeholder" },
    { attribute: "color", property: "color" },
    { attribute: "id", property: "id" }
    ],
  };
}

FASTElement.define(Input);
