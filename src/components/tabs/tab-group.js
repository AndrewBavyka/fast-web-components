import { FASTElement, html, css } from "@microsoft/fast-element";

const template = html`
  <div class="tab-group ${(x) => x.position}">
        <slot></slot>
  </div>
`;

const styles = css`
  .tab-group {
    max-width: max-content;
    display: flex;
    align-items: center;
    gap: 34px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--secondary-text);
  }
`;

export class TabGroup extends FASTElement {
    static definition = {
        name: "awc-tab-group",
        template,
        styles,
        attributes: [], 
    };
}

FASTElement.define(TabGroup);