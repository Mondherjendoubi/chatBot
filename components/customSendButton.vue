<template>
  <svg
    class="button-send"
    width="78"
    height="78"
    viewBox="0 0 78 78"
    @click="toggleClick"
    :class="{ clicked: isClicked }"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_102_68)">
      <rect
        x="9"
        y="9"
        class="bruv"
        width="54"
        height="54"
        rx="27"
        fill="#17C3CE"
        shape-rendering="crispEdges"
      />
      <path
        d="M28.603 35.4388L34.9405 35.43M32.6869 26.5649L42.6924 31.5677C47.1826 33.8127 47.1737 37.4809 42.6924 39.7348L32.6869 44.7375C25.9605 48.1051 23.2028 45.3474 26.5704 38.6211L28.0553 35.6512L26.5704 32.6814C23.2028 25.955 25.9517 23.2061 32.6869 26.5649Z"
        stroke="white"
        stroke-width="2.10714"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>
<script setup>
import { ref } from "vue";

const isClicked = ref(false);

const toggleClick = () => {
  isClicked.value = !isClicked.value;
};
</script>

<style>
.button-send {
  position: absolute;
  width: 78px;
  height: 78px;
  top: 758px;
  left: 340px;
  transition: transform 0.3s ease; /* Smooth transition for transform effect */
  cursor: pointer;
}

.button-send rect,
.button-send path {
  transition: transform 0.3s ease; /* Apply transition to rect and path directly */
  cursor: pointer; /* Change cursor to indicate it's interactive */
}

.button-send:hover rect,
.button-send:hover path {
  cursor: pointer; /* Change cursor to indicate it's interactive */
  transform: translateY(-2px); /* Move the rect up on hover */
}
</style>
