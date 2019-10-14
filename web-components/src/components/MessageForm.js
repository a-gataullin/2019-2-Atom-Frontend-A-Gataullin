/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `
    <style>
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        form-input {
            margin-top: 10px;
            width: 100%;
            position: fixed;
            bottom: 0;
        }
         
        .result {
            margin-top: 5vw;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: flex-end;
        }

        input[type=submit] {
            visibility: collapse;
        }

        #head {
            left: 0px;
            top: 0px;
            width: 100vw;
            position: fixed;
            height: 7vh;
            color: white;
            background-color: #9365A8;
            text-align: center;
            font-size: 20px;
            padding-top: 3vh;
        }
        
    </style>
    <form>
        <div id="head">Arthur</div>
        <div class="result"></div>
        <form-input name="message-text" placeholder="Введите сообщение"></form-input>
    </form>
`;
class MessageForm extends HTMLElement {
  constructor() {
    super();
    this.messagesStorage = [];
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this._shadowRoot.querySelector('form');
    this.$input = this._shadowRoot.querySelector('form-input');
    this.$message = this._shadowRoot.querySelector('.result');

    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));

    if (localStorage.getItem('messages') !== null) {
      this.messagesStorage = JSON.parse(localStorage.getItem('messages'));
      for (let i = 0; i < this.messagesStorage.length; i += 1) {
        this.$message.appendChild(new MessageView(this.messagesStorage[i].messageAuthor,
          this.messagesStorage[i].messageTime, this.messagesStorage[i].messageText));
      }
    }
  }

  _onSubmit(event) {
    event.preventDefault();
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}`;
    const msg = new MessageView('localhost', time, this.$input.value);
    this.$input.$input.value = '';
    this.messagesStorage.push(msg);
    localStorage.setItem('messages', JSON.stringify(this.messagesStorage));
    this.$message.appendChild(msg);
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

class MessageView extends HTMLElement {
  constructor(author, time, text) {
    super();
    this.messageText = text;
    this.messageAuthor = author;
    this.messageTime = time;
  }

  connectedCallback() {
    const template1 = document.createElement('template');
    template1.innerHTML = `
        <style>
            div {
                min-width: 10vw;
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
            <!-- <span id='author'>${this.messageAuthor}</span> -->
            <p id='text'>${this.messageText}</p>
            <p id='time'>${this.messageTime}</p>
        </div>
    `;
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template1.content.cloneNode(true));
    this.scrollIntoView();
  }
}

customElements.define('message-view', MessageView);
customElements.define('message-form', MessageForm);
