<template>
  <span class="material-symbols-rounded" :style="`font-size:${size}rem`">{{name}}</span>

</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss">
@import 'material-symbols/rounded.css';

.material-symbols-rounded {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 40;
  transition: transform 0.3s ease, background-color 0.3s ease;
  border-radius: 50%;

  // Increase padding for a larger background area
  padding: 13px; // Adjust this value to suit your needs

  // Optionally, you can also set a specific height and width
  height: 3em; // Adjust as needed
  width: 3em;  // Adjust as needed


  &:hover {
    transform: translateY(-2px); /* Moves the element up on hover */
    cursor: pointer;
    background: black;
    color: white;
  }
}
</style>