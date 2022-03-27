import { css } from 'lit';

export const styles = [
  css`
    :host {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      color: white;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
    }

    .row {
      flex-direction: row;
    }

    li {
      text-align: center;
      flex: 1;
      background: black;
      padding: 16px;
      border: 4px solid #b61827;
      border-radius: 20px;
      margin: 8px;
      min-width: 100px;
    }
  `,
];
