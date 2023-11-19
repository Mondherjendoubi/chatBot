<template>
  <div class="home">
    <div class="div">
      <div class="group">
        <img
            class="image"
            src="https://img.freepik.com/premium-vector/robot-icon-bot-sign-design-chatbot-symbol-concept-voice-support-service-bot-online-support-bot-vector-stock-illustration_100456-34.jpg"
        />
      </div>

      <div class="flexcontainer">
        <p class="text">
          <span class="text-wrapper">Amine Club<br /></span>
        </p>
        <p class="text"><span class="text-wrapper">Chatbot AI</span></p>
      </div>
      <div class="overlap-group-wrapper"  @click="this.$router.push('/chatPage')">
        <div class="overlap-group">
          <div class="text-wrapper-2" >Start Chat</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Your component's JavaScript goes here
};
</script>

<style scoped>
.home {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.home .div {
  background-color: #ffffff;
  overflow: hidden;
  width: 428px;
  height: 926px;
  position: relative;
  box-shadow: 0px 0px 16px -8px #00185a;
}

.home .group {
  position: absolute;
  top: 239px;
  left: 107px;
  width: 50%; /* Example of using percentage */
  height: 30vh; /* Example of using viewport height */

}
.home .image {
  position: absolute;
  width: 259px;
  height: 204px;
  top: 20px;
  left: -30px;
  background-blend-mode: darken;
  object-fit: cover;
}

.home .status-bar {
  position: absolute;
  width: 428px;
  height: 40px;
  top: 0;
  left: 0;
}
.home .right-option {
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
.home .left-option {
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
.home .flexcontainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  position: absolute;
  width: 259px;
  height: 78px;
  top: 101px;
  left: 84px;
}
.home .text {
  position: relative;
  align-self: stretch;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: var(--primarycolor);
  font-size: 36px;
  text-align: center;
  letter-spacing: 0.36px;
  line-height: 22px;
}
.home .text-wrapper {
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #16c3ce;
  font-size: 36px;
  letter-spacing: 0.36px;
  line-height: 22px;
}
.home .overlap-group-wrapper {
  position: absolute;
  width: 341px;
  height: 68px;
  top: 527px;
  left: 45px;
}

.home .overlap-group-wrapper {
  position: absolute;
  width: 341px;
  height: 68px;
  top: 700px;
  left: 45px;
}

.home .overlap-group {
  position: relative;
  width: 339px;
  height: 68px;
  background-color: #17ccd7;
  border-radius: 17px;
  box-shadow: 4px 4px 10px -1px #17c3ce59;
  transition: transform 0.3s ease, background-color 0.3s ease;
}


.home .overlap-group:hover {
  transform: translateY(-1.02px);
  cursor: pointer;
  position: relative;
  width: 339px;
  height: 68px;
  background-color: #111818;
  border-radius: 17px;
  box-shadow: 4px 4px 10px -1px #17c3ce59;
}


.home .text-wrapper-2 {
  position: absolute;
  width: 142px;
  height: 31px;
  top: 18px;
  left: 98px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #ffffff;
  font-size: 26px;
  letter-spacing: 0.52px;
  line-height: normal;
}
</style>
