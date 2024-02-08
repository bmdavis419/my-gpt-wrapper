<script setup lang="ts">
import { useChat } from "ai/vue";

const { messages, input, handleSubmit } = useChat();
</script>

<template>
  <main class="w-full h-screen flex">
    <!-- <div class="flex flex-col w-full max-w-md py-24 mx-auto stretch">
    <div v-for="m in messages" key="m.id" class="whitespace-pre-wrap">
      {{ m.role === "user" ? "User: " : "AI: " }}
      {{ m.content }}
    </div>

    <form @submit="handleSubmit">
      <input
        class="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
        v-model="input"
        placeholder="Say something..."
      />
    </form>
  </div> -->

    <div class="w-[300px] bg-blue-200">side nav</div>
    <div class="grow flex flex-col p-4 gap-y-2">
      <div class="grow px-8">
        <div class="pb-2">
          <h3 class="font-bold text-lg">
            <span class="font-extrabold text-teal-500">Q:</span> What is the
            square root of 64, and what is a square root?
          </h3>
        </div>
        <div class="border-b border-teal-500 pb-4 mb-4">
          <p>
            <span class="font-extrabold text-teal-500">A:</span>
            The square root of 64 is 8. A square root is a mathematical
            operation that, when applied to a number, gives the value that, when
            multiplied by itself, equals the original number. In other words, if
            � = � x ​ =y, then � y is the square root of � x. In the case of 64
            64 ​ , it means finding a number that, when multiplied by itself,
            equals 64. Since 8 × 8 = 64 8×8=64, the square root of 64 is 8. In
            mathematical notation: 64 = 8 64 ​ =8
          </p>
        </div>
      </div>
      <form
        @submit="handleSubmit"
        class="h-[100px] flex items-center justify-center gap-x-3"
      >
        <UTextarea
          color="teal"
          variant="outline"
          placeholder="Search..."
          class="w-2/3"
        >
        </UTextarea>
        <UButton
          icon="i-heroicons-pencil-square"
          size="sm"
          color="teal"
          square
          variant="solid"
        />
      </form>
    </div>
  </main>
</template>
