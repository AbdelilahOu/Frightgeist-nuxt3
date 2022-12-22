<script setup lang="ts">
const route = useRoute();
const { data } = await useFetch(`/api/question/${route.params.id}`, {
  method: "GET",
});
</script>
<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>
