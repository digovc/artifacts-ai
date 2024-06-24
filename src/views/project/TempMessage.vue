<template>
  <div class="text-sm animate-pulse space-y-4" v-if="isReceiving">
    <div class="text-center">
      Receiving message from parent component
    </div>
    <div>
      <Markdown :src="content"/>
    </div>
  </div>
</template>
<script setup>
import Markdown from "@/components/Markdown.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { Subject, takeUntil } from "rxjs";
import streamProvider from "@/services/stream-provider.js";

const content = ref("");
const onDestroy$ = new Subject();
const isReceiving = ref(false);

onMounted(() => {
  streamProvider.onStart$
      .pipe(takeUntil(onDestroy$))
      .subscribe(() => {
        content.value = ''
        isReceiving.value = true
      });

  streamProvider.onEnd$
      .pipe(takeUntil(onDestroy$))
      .subscribe(() => isReceiving.value = false);

  streamProvider.onData$
      .pipe(takeUntil(onDestroy$))
      .subscribe(x => content.value += x);
});

onUnmounted(() => {
  onDestroy$.next();
  onDestroy$.complete();
});
</script>
