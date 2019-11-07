/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
import MessageView from './MessageView';

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
        const msg = document.createElement('message-view');
        msg.setAttribute('text', this.messagesStorage[i].text);
        msg.setAttribute('time', this.messagesStorage[i].time);
        this.$message.appendChild(msg);
      }
    }
  }

  _onSubmit(event) {
    event.preventDefault();
    if (this.$input.value.match(/\S/)) {
      const today = new Date();
      const time = `${today.getHours()}:${today.getMinutes()}`;
      const msg = document.createElement('message-view');
      msg.setAttribute('text', this.$input.value);
      msg.setAttribute('time', time);
      this.messagesStorage.push({ text: this.$input.value, time });
      localStorage.setItem('messages', JSON.stringify(this.messagesStorage));
      this.$message.appendChild(msg);
      msg.scrollIntoView();
    }
    this.$input.$input.value = '';
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
customElements.define('message-view', MessageView);
