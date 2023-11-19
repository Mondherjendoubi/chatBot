<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="globals.css" />
    <link rel="stylesheet" href="styleguide.css" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="chat-board">
      <div class="div">
        <header class="header">
          <div class="status-bar">
            <div class="right-option">􀐿 􀙇 􀛨</div>
            <div class="left-option">9:41</div>
          </div>
          <img class="line" src="img/line-1.svg" />
          <img class="button-back" src="img/back.png" />
          <div class="text-wrapper">Chatbot AI</div>
        </header>
        <div class="que">
          <div class="overlap-group-wrapper">
            <div class="overlap-group">
              <div class="text-wrapper-2">Hello ! there</div>
            </div>
          </div>
          <img class="icon-save" src="img/save.png" />
        </div>
        <div class="ans">
          <div class="div-wrapper">
            <div class="overlap-group-2">
              <p class="p">Hello there! How may I assist you today?</p>
            </div>
          </div>
          <img class="icon-share" src="img/image.svg" />
          <img class="icon-copy" src="img/copy-2.png" />
        </div>
        <div class="que-2">
          <div class="overlap-group-wrapper">
            <div class="overlap-group">
              <p class="text-wrapper-2">Show me what can you do?</p>
            </div>
          </div>
          <img class="icon-save" src="img/image.png" />
        </div>
        <div class="ans-2">
          <div class="ans-3">
            <div class="as-an-AI-language-wrapper">
              <p class="as-an-AI-language">
                As an AI language model, I can generate text for various
                purposes such as :<br /><br />Writing articles, essays and
                reports on various topics.<br />Generating product descriptions
                and reviews.<br />Tra|
              </p>
            </div>
          </div>
          <img class="img" src="img/share.svg" />
          <img class="icon-copy-2" src="img/copy.png" />
        </div>
        <div class="stop-generating">
          <div class="overlap">
            <div class="text-wrapper-3">Stop generating...</div>
            <div class="rectangle"></div>
          </div>
        </div>
        <div class="type-section">
          <div class="typing-box">
            <img class="vuesax-linear" src="img/microphone-2.png" />
            <div class="text-wrapper-4">Ask me anything...</div>
            <img class="scan" src="img/scan.svg" />
          </div>
          <img class="button-send" src="img/send.svg" />
        </div>
        <div class="navbar">
          <div class="chat">
            <img class="messages" src="img/messages.png" />
            <div class="text-wrapper-5">Chat</div>
          </div>
          <div class="category">
            <img class="element" src="img/element-4.png" />
            <div class="text-wrapper-6">Category</div>
          </div>
          <div class="history">
            <div class="history-2">
              <img class="vuesax-linear-2" src="img/archive-add.png" />
              <div class="text-wrapper-7">Saved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

<style>
.chat-board {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
.chat-board .div {
  background-color: #ffffff;
  overflow: hidden;
  width: 428px;
  height: 926px;
  position: relative;
}
.chat-board .header {
  position: absolute;
  width: 430px;
  height: 120px;
  top: 0;
  left: 0;
  background-color: transparent;
}
.chat-board .status-bar {
  position: absolute;
  width: 428px;
  height: 40px;
  top: 0;
  left: 0;
}
.chat-board .right-option {
  position: absolute;
  height: 18px;
  top: 10px;
  left: 321px;
  font-family: var(--subhead-font-family);
  font-weight: var(--subhead-font-weight);
  color: #0c0c0c;
  font-size: var(--subhead-font-size);
  text-align: right;
  letter-spacing: var(--subhead-letter-spacing);
  line-height: var(--subhead-line-height);
  white-space: nowrap;
  font-style: var(--subhead-font-style);
}
.chat-board .left-option {
  position: absolute;
  height: 18px;
  top: 10px;
  left: 24px;
  font-family: var(--subhead-font-family);
  font-weight: var(--subhead-font-weight);
  color: #0c0c0c;
  font-size: var(--subhead-font-size);
  letter-spacing: var(--subhead-letter-spacing);
  line-height: var(--subhead-line-height);
  white-space: nowrap;
  font-style: var(--subhead-font-style);
}
.chat-board .line {
  position: absolute;
  width: 428px;
  height: 1px;
  top: 119px;
  left: 0;
  object-fit: cover;
}
.chat-board .button-back {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 72px;
  left: 18px;
}
.chat-board .text-wrapper {
  position: absolute;
  height: 29px;
  top: 70px;
  left: 155px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #212121;
  font-size: 24px;
  letter-spacing: 0;
  line-height: normal;
}
.chat-board .que {
  width: 305px;
  top: 145px;
  left: 98px;
  position: absolute;
  height: 59px;
}
.chat-board .overlap-group-wrapper {
  width: 281px;
  top: 0;
  left: 26px;
  position: absolute;
  height: 59px;
}
.chat-board .overlap-group {
  position: relative;
  width: 279px;
  height: 59px;
  background-color: var(--primarycolor);
  border-radius: 19px 19px 0px 19px;
}
.chat-board .text-wrapper-2 {
  position: absolute;
  width: 224px;
  height: 19px;
  top: 20px;
  left: 20px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
}
.chat-board .icon-save {
  top: 0;
  left: 0;
  position: absolute;
  width: 20px;
  height: 20px;
}
.chat-board .ans {
  position: absolute;
  width: 343px;
  height: 78px;
  top: 229px;
  left: 25px;
}
.chat-board .div-wrapper {
  position: absolute;
  width: 310px;
  height: 78px;
  top: 0;
  left: 0;
}
.chat-board .overlap-group-2 {
  height: 78px;
  position: relative;
  width: 308px;
  background-color: #f5f5f5;
  border-radius: 19px 19px 19px 0px;
}
.chat-board .p {
  position: absolute;
  width: 224px;
  height: 38px;
  top: 20px;
  left: 20px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #212121;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
}
.chat-board .icon-share {
  top: 36px;
  left: 323px;
  position: absolute;
  width: 20px;
  height: 20px;
}
.chat-board .icon-copy {
  top: 3px;
  left: 323px;
  position: absolute;
  width: 20px;
  height: 20px;
}
.chat-board .que-2 {
  width: 305px;
  top: 332px;
  left: 98px;
  position: absolute;
  height: 59px;
}
.chat-board .ans-2 {
  position: absolute;
  width: 343px;
  height: 211px;
  top: 416px;
  left: 25px;
}
.chat-board .ans-3 {
  position: absolute;
  width: 310px;
  height: 211px;
  top: 0;
  left: 0;
}
.chat-board .as-an-AI-language-wrapper {
  height: 211px;
  position: relative;
  width: 308px;
  background-color: #f5f5f5;
  border-radius: 19px 19px 19px 0px;
}
.chat-board .as-an-AI-language {
  position: absolute;
  width: 268px;
  height: 191px;
  top: 20px;
  left: 20px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #212121;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 20px;
}
.chat-board .img {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 42px;
  left: 323px;
}
.chat-board .icon-copy-2 {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 9px;
  left: 323px;
}
.chat-board .stop-generating {
  position: absolute;
  width: 212px;
  height: 55px;
  top: 667px;
  left: 99px;
}
.chat-board .overlap {
  position: relative;
  width: 210px;
  height: 55px;
  border-radius: 9px;
  border: 1px solid;
  border-color: #e3e3e3;
}
.chat-board .text-wrapper-3 {
  position: absolute;
  height: 20px;
  top: 17px;
  left: 51px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #000000;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}
.chat-board .rectangle {
  position: absolute;
  width: 18px;
  height: 18px;
  top: 18px;
  left: 18px;
  background-color: #16c3ce;
  border-radius: 2px;
}
.chat-board .type-section {
  position: absolute;
  width: 378px;
  height: 60px;
  top: 764px;
  left: 25px;
}
.chat-board .typing-box {
  position: absolute;
  width: 306px;
  height: 60px;
  top: 0;
  left: 0;
  background-color: #f9f9f9;
  border-radius: 17px;
  overflow: hidden;
  box-shadow: 3.77px 3.77px 7.53px #d4c0c040;
}
.chat-board .vuesax-linear {
  position: absolute;
  width: 28px;
  height: 28px;
  top: 16px;
  left: 262px;
}
.chat-board .text-wrapper-4 {
  position: absolute;
  height: 12px;
  top: 21px;
  left: 16px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: var(--textcolor);
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}
.chat-board .scan {
  position: absolute;
  width: 28px;
  height: 28px;
  top: 16px;
  left: 218px;
}
.chat-board .button-send {
  position: absolute;
  width: 78px;
  height: 78px;
  top: -6px;
  left: 315px;
}
.chat-board .navbar {
  position: absolute;
  width: 428px;
  height: 80px;
  top: 846px;
  left: 0;
  background-color: #f4f4f4;
  box-shadow: 34px 21px 16px 8px #16c3ce38;
}
.chat-board .chat {
  position: absolute;
  width: 26px;
  height: 37px;
  top: 21px;
  left: 66px;
}
.chat-board .messages {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  left: 0;
}
.chat-board .text-wrapper-5 {
  position: absolute;
  height: 7px;
  top: 30px;
  left: 1px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: var(--primarycolor);
  font-size: 10px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}
.chat-board .category {
  position: absolute;
  width: 47px;
  height: 36px;
  top: 22px;
  left: 190px;
}
.chat-board .element {
  position: absolute;
  width: 22px;
  height: 22px;
  top: 0;
  left: 10px;
}
.chat-board .text-wrapper-6 {
  position: absolute;
  height: 7px;
  top: 29px;
  left: 0;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #bbbbbb;
  font-size: 10px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}
.chat-board .history {
  position: absolute;
  width: 30px;
  height: 38px;
  top: 21px;
  left: 332px;
}
.chat-board .history-2 {
  position: relative;
  width: 32px;
  height: 38px;
}
.chat-board .vuesax-linear-2 {
  position: absolute;
  width: 26px;
  height: 26px;
  top: 0;
  left: 2px;
}
.chat-board .text-wrapper-7 {
  position: absolute;
  height: 7px;
  top: 31px;
  left: 0;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #bbbbbb;
  font-size: 10px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}
</style>
