/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `
        <style>
            div {
                max-width: 45vw;
                min-width: 8vw;
                border-width: 50px;
                box-sizing: border-box;
                width: auto;
                background-color: #f3e6f5;
                padding: 5%;
                margin: 3vh;
                margin-right: 2vw;
                border-radius: 10px;
                border-bottom-right-radius: 0px;
                word-wrap:break-word;
                align-self: flex-end;
            }

            #text {
                min-width: 20wh;
                box-sizing: border-box;
                width: auto;
                margin: 1%;
                padding: 1%;
            }

            #time {
                min-width: 20wh;
                margin: 1%;
                margin-top: -5%;
                padding: 1%;
                text-align: end;
                font-size: 50%;
            }

            #author {
                padding: 5%;
                color: pink
            }
        </style>
        <div class="msg">
            <!-- <span id='author'></span> -->
            <p id='text'>asdasd</p>
            <p id='time'></p>
        </div> 
`;
export default class MessageView extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['author', 'text', 'time'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (['author', 'text', 'time'].includes(name)) {
      this._shadowRoot.getElementById(name).innerText = newValue;
    }
    this.setAttribute(name, newValue);
  }
}
