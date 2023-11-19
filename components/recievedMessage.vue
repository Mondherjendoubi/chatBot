<template>
  <div class="ans">
    <div class="div-wrapper-ans">
      <div class="overlap-group-2-ans">
        <p class="ans-p">
          {{ text }}
        </p>
      </div>
    </div>
    <MaterialIcon class="icon-share-ans" name="bookmark_add" size="1.5" />
    <MaterialIcon class="icon-copy-ans" name="content_copy" size="1.5" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default:
      "Hello there! How may I assist you today?Hello there! you today?Hell",
  },
});
</script>

<style>
.ans {
  position: relative;
  margin-top: 10px;
  margin-left: 10px;
  width: 343px;
}
.div-wrapper-ans {
  position: relative;
  margin-top: 10px;
  margin-left: 10px;
  width: 343px;
}
.overlap-group-2-ans {
  position: relative;
  width: 100%; /* Take up full width of parent */
  background-color: #f5f5f5;
  border-radius: 19px 19px 19px 0px;
  padding: 10px; /* Add padding for text inside */
  word-wrap: break-word; /* Ensures text wraps within the container */
}
.ans-p {
  /* Removed absolute positioning to allow natural content flow */
  width: 100%; /* Take full width of parent */
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #212121;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
}
.icon-share-ans {
  color: grey;
  top: 36px;
  left: 363px;
  position: absolute;
  width: 20px;
  height: 20px;
}
.icon-copy-ans {
  color: grey;
  top: 3px;
  left: 363px;
  position: absolute;
  width: 20px;
  height: 20px;
}
</style>
