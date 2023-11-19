<template>
  <div class="que">
    <div class="overlap-group-wrapper">
      <div class="overlap-group">
        <div class="text-wrapper-sent-message">{{ text }}</div>
      </div>
    </div>
    <MaterialIcon class="icon-save" name="save" size="1.5" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<style>
.que {
  width: 305px;
  position: relative;
  margin-top: 10px;
  margin-left: 100px;
}
.overlap-group-wrapper {
  width: 281px;
  top: 0;
  left: 26px;
  position: relative;
  height: 100%; /* Height based on content */
}
.overlap-group {
  position: relative;
  width: 279px;
  margin-right: 20px; /* Adjust spacing as needed */
  min-height: 50px; /* Minimum height */
  background-color: #16c3ce;
  border-radius: 19px 19px 0px 19px;
  line-height: normal;
  word-wrap: break-word; /* To ensure long words do not overflow */
}
.text-wrapper-sent-message {
  width: 100%; /* Take full width of parent */
  padding: 10px;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
}
.icon-save {
  top: 0;
  right: 285px;
  position: absolute;
  width: 20px;
  height: 20px;
  color: grey;
}
</style>
<script setup lang="ts"></script>
