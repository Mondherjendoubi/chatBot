<template>
  <div class="chat">
    <div class="div">
      <initialPrompt v-if="showInitialPrompt" />
      <div v-else ref="messagesContainer" class="messages-container">
        <template v-for="(message, index) in messages" :key="index">
          <sentMessage v-if="message.type === 'sent'" :text="message.text" />
          <recievedMessage v-else :text="message.text" />
        </template>
      </div>

      <div class="typing-box">
        <MaterialIcon
          style="color: #16c3ce"
          class="vuesax-linear"
          name="mic"
          size="1.5"
        />
        <textarea
          class="text-input"
          placeholder="Ask me anything..."
          v-model="newMessage"
          @keyup.enter="sendMessage"
        ></textarea>
        <MaterialIcon
          style="color: #16c3ce"
          class="scan"
          name="scan"
          size="1.5"
        />
      </div>
      <customSendButton @click="sendMessage" />
      <div style="color: #16c3ce" class="navbar">
        <div class="div-2">
          <MaterialIcon class="messages" name="message" size="1.4" />
          <div class="text-wrapper-5">Chat</div>
        </div>
        <div class="category">
          <MaterialIcon class="element" name="category" size="1.4" />
          <div class="text-wrapper-5">Category</div>
        </div>
        <div class="history">
          <div class="history-2">
            <MaterialIcon class="img" name="save" size="1.4" />
            <div class="text-wrapper-5">Saved</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const currentThread = ref(true);
const currentMessageId = ref(true);
const currentRunId = ref(true);

// Reactive state
const showInitialPrompt = ref(true);
const newMessage = ref("");
const messages = ref([]);
const response = ref(null);

const threadResponse = ref(null);
const messageResponse = ref(null);
const retrievedMessage = ref(null);
const threadRunResponse = ref(null);
const threadMessages = ref(null);
const runStatus = ref(null);

// Methods
const sendMessage = async () => {
  //createThread();
  //retrieveMessage();
  //createThreadRun();
  //fetchThreadMessages();
  //sendMessageToThread()
  //fetchRunStatus();
  showInitialPrompt.value = false;
  if (newMessage.value.trim() !== "") {
    messages.value.push({ type: "sent", text: newMessage.value });
    await sendMessageToThread(newMessage.value);
    newMessage.value = ""; // Clear the textarea after sending
    scrollToBottom();
    await createThreadRun();
  }

  // Polling for run status
  let isComplete = false;
  while (!isComplete) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds before next poll
    isComplete = await fetchRunStatus();
  }
  await fetchThreadMessages();
};

const callOpenAI = async () => {
  try {
    const url =
      "https://api.openai.com/v1/assistants/asst_uaeDkgQdkRYmbiptDia6cISw";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`, // asst_uaeDkgQdkRYmbiptDia6cISw
      "OpenAI-Beta": "assistants=v1",
    };

    const data = {
      // Your request payload here
    };

    const res = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Error from OpenAI API");
    }

    const result = await res.json();
    response.value = result;
    console.log("call assistant", response.value);
  } catch (error) {
    console.error("API call failed:", error);
    response.value = error.message;
  }
};

const createThread = async () => {
  try {
    const url = "https://api.openai.com/v1/threads";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`, //"thread_6AKZbsvG9B744ZDhRVpmJWlL"
      "OpenAI-Beta": "assistants=v1",
    };

    const data = {
      messages: [
        {
          role: "user",
          content: "Hello, what is AI?",
        },
        {
          role: "user",
          content: "How does AI work? Explain it in simple terms.",
        },
      ],
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error from OpenAI API");
    }

    const result = await response.json();
    threadResponse.value = result;
    currentThread.value = result;
    console.log("threadResponse", currentThread.value);
  } catch (error) {
    console.error("API call failed:", error);
    threadResponse.value = error.message;
  }
};

const fetchRunStatus = async () => {
  try {
    const threadId = currentThread.value.id; // Replace with your actual thread ID
    const runId = threadRunResponse.value.id; // Replace with your actual run ID
    const url = `https://api.openai.com/v1/threads/${threadId}/runs/${runId}`;
    const headers = {
      Authorization: `Bearer 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`,
      "OpenAI-Beta": "assistants=v1",
    };

    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Error from OpenAI API");
    }

    const result = await response.json();
    runStatus.value = result;
    console.log("status", runStatus.value);

    return runStatus.value.completed_at !== null;
  } catch (error) {
    console.error("API call failed:", error);
    runStatus.value = error.message;
    return false;
  }
};

const createThreadRun = async () => {
  try {
    const threadId = currentThread.value.id; // Replace with the actual thread ID
    const assistantId = "asst_uaeDkgQdkRYmbiptDia6cISw"; // Replace with the actual assistant ID
    const url = `https://api.openai.com/v1/threads/${threadId}/runs`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`, //"thread_6AKZbsvG9B744ZDhRVpmJWlL"
      "OpenAI-Beta": "assistants=v1",
    };

    const data = {
      assistant_id: assistantId,
      instructions:
        "Please address the user as amine club, he is a fun of dj, so every answer make fun of him, that he is not a real dj but trying to be one <3 .",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error from OpenAI API");
    }

    const result = await response.json();
    threadRunResponse.value = result;
    currentRunId.value = threadRunResponse.value.id;
    console.log(threadRunResponse.value);
  } catch (error) {
    console.error("API call failed:", error);
    threadRunResponse.value = error.message;
  }
};

const scrollToBottom = () => {
  nextTick(() => {
    const container = document.getElementById("messagesContainer"); // assuming you have an element with this ID
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  });
};

const sendMessageToThread = async (msg) => {
  try {
    console.log(currentThread.value.id);
    const threadId = currentThread.value.id; // Replace with your actual thread ID
    const url = `https://api.openai.com/v1/threads/${threadId}/messages`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
      "OpenAI-Beta": "assistants=v1",
    };

    const data = {
      role: "user",
      content: msg, // Use the passed argument here
    };

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error from OpenAI API");
    }

    const result = await response.json();
    messageResponse.value = result;
    currentMessageId.value = result.id;
    console.log("messageResponse", messageResponse.value);
  } catch (error) {
    console.error("API call failed:", error);
    messageResponse.value = error.message;
  }
};

const retrieveMessage = async () => {
  try {
    const threadId = "thread_6AKZbsvG9B744ZDhRVpmJWlL"; // Replace with your actual thread ID
    const messageId = "msg_g7l8r5rNBoCH2Vp3QkmrnOBM"; // Replace with your actual message ID
    const url = `https://api.openai.com/v1/threads/${threadId}/messages/${messageId}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`, //"thread_6AKZbsvG9B744ZDhRVpmJWlL"
      "OpenAI-Beta": "assistants=v1",
    };

    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Error from OpenAI API");
    }

    const result = await response.json();
    retrievedMessage.value = result;
    console.log("retreieved Message", retrievedMessage.value);
  } catch (error) {
    console.error("API call failed:", error);
    retrievedMessage.value = error.message;
  }
};

const fetchThreadMessages = async () => {
  try {
    const threadId = currentThread.value.id; // Replace with your actual thread ID
    const url = `https://api.openai.com/v1/threads/${threadId}/messages`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`, //"thread_6AKZbsvG9B744ZDhRVpmJWlL"
      "OpenAI-Beta": "assistants=v1",
    };

    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Error from OpenAI API");
    }

    const result = await response.json();
    threadMessages.value = result;
    console.log("threadMessages", threadMessages.value);

    // Extract the latest message content
    if (result && result.data && result.data.length > 0) {
      const latestMessageContent = result.data[0].content[0].text.value;
      console.log(latestMessageContent);
      messages.value.push({ type: "received", text: latestMessageContent });
    }
  } catch (error) {
    console.error("API call failed:", error);
    threadMessages.value = error.message;
  }
};

// Lifecycle hook
onMounted(() => {
  //callOpenAI();
  createThread();
});
</script>

<style>
.chat {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
.chat .div {
  background-color: #ffffff;
  overflow: hidden;
  width: 428px;
  height: 926px;
  position: relative;
  box-shadow: 0px 0px 16px -8px #00185a;
}
.chat .header {
  position: absolute;
  width: 430px;
  height: 120px;
  top: 0;
  left: 0;
  background-color: transparent;
}
.chat .text-wrapper {
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

.messages-container {
  margin-top: 50px;
  margin-left: 10px;
  position: relative;
  height: 700px;
  overflow-y: auto;
}

.chat .status-bar {
  position: absolute;
  width: 428px;
  height: 40px;
  top: 0;
  left: 0;
}
.chat .right-option {
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
.chat .left-option {
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
.chat .line {
  position: absolute;
  width: 428px;
  height: 1px;
  top: 119px;
  left: 0;
  object-fit: cover;
}
.chat .group {
  position: absolute;
  width: 148px;
  height: 190px;
  top: 148px;
  left: 140px;
}
.chat .image {
  position: absolute;
  width: 110px;
  height: 37px;
  top: 153px;
  left: 18px;
  background-blend-mode: darken;
  object-fit: cover;
}
.chat .asset {
  position: absolute;
  width: 148px;
  height: 144px;
  top: 0;
  left: 0;
}
.chat .box {
  top: 376px;
  left: 25px;
  position: absolute;
  width: 378px;
  height: 88px;
  background-color: #f5f5f5;
  border-radius: 16px;
  overflow: hidden;
}
.chat .p {
  position: absolute;
  width: 317px;
  height: 32px;
  top: 27px;
  left: 31px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: var(--textcolor);
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
}
.chat .div-wrapper {
  top: 484px;
  left: 25px;
  position: absolute;
  width: 378px;
  height: 88px;
  background-color: #f5f5f5;
  border-radius: 16px;
  overflow: hidden;
}
.chat .text-wrapper-2 {
  position: absolute;
  width: 317px;
  height: 12px;
  top: 37px;
  left: 30px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: var(--textcolor);
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
}
.chat .box-2 {
  top: 585px;
  left: 28px;
  position: absolute;
  width: 378px;
  height: 88px;
  background-color: #f5f5f5;
  border-radius: 16px;
  overflow: hidden;
}
.chat .text-wrapper-3 {
  position: absolute;
  width: 317px;
  height: 32px;
  top: 27px;
  left: 30px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: var(--textcolor);
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
}
.chat .text {
  position: absolute;
  width: 323px;
  height: 12px;
  top: 694px;
  left: 52px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: var(--textcolor);
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
}
.chat .typing-box {
  position: absolute;
  width: 306px;
  height: 60px;
  top: 764px;
  left: 25px;
  background-color: #f9f9f9;
  border-radius: 17px;
  overflow: hidden;
  box-shadow: 3.77px 3.77px 7.53px #d4c0c040;
}
.chat .vuesax-linear {
  position: absolute;
  width: 28px;
  height: 28px;
  top: 16px;
  left: 262px;
}
.chat .text-wrapper-4 {
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
.chat .scan {
  position: absolute;
  width: 28px;
  height: 28px;
  top: 16px;
  left: 218px;
}
.chat .button-send {
  position: absolute;
  width: 78px;
  height: 78px;
  top: 758px;
  left: 340px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.chat .navbar {
  position: absolute;
  width: 428px;
  height: 80px;
  top: 846px;
  left: 0;
  background-color: #f4f4f4;
  box-shadow: 34px 21px 16px 8px #16c3ce38;
}
.chat .div-2 {
  position: absolute;
  width: 26px;
  height: 37px;
  top: 21px;
  left: 66px;
}
.chat .messages {
  position: relative;
  width: 24px;
  height: 24px;
  top: 0;
  left: 0;
}
.chat .text-wrapper-5 {
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
.chat .category {
  position: absolute;
  width: 47px;
  height: 36px;
  top: 22px;
  left: 190px;
}
.chat .element {
  position: absolute;
  width: 22px;
  height: 22px;
  top: 0;
  left: 10px;
}

.chat .history {
  position: absolute;
  width: 30px;
  height: 38px;
  top: 21px;
  left: 332px;
}
.chat .history-2 {
  position: relative;
  width: 32px;
  height: 38px;
}
.chat .img {
  position: absolute;
  width: 26px;
  height: 26px;
  top: 0;
  left: 2px;
}

.chat .text-input {
  position: absolute;
  width: 200px;
  height: 50px; /* Adjust height as needed */
  margin-top: 10px;
  left: 0px;
  border: none;
  border-radius: 17px;
  padding: 10px;
  font-size: 12px;
  outline: none;
  resize: none; /* Disable resizing */
  overflow: auto; /* Enable scrolling for overflow text */
  background-color: #f9f9f9; /* Background color */
}
</style>
