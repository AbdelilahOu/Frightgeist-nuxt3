<script setup lang="ts">
const route = useRoute();
const data: any = await useOurFetch(`/api/question/${route.params.id}`, {
  method: "GET",
});
</script>
<template>
  <div class="text-black">
    {{ data?.question }}
  </div>
</template>
