<script setup lang="ts">
// feilds
const userName = ref<string>("");
const passWord = ref<string>("");
// for ui alert
const IsUserName = ref<boolean>(false);
const IsPassWord = ref<boolean>(false);
// update feilds
const updateUserName = (name: string) => (userName.value = name);
const updatePassWord = (word: string) => (passWord.value = word);
// main action
const logIn = async (): Promise<void> => {
  if (!areFeildsEmpty()) {
    const { data } = await useFetch("/api/login", {
      method: "POST",
      body: {
        userName: userName.value,
        passWord: passWord.value,
      },
    });
    navigateTo("/");
    return;
  }
  IsUserName.value = userName.value === "";
  IsPassWord.value = passWord.value === "";
  await updateVisualAlert();
};
// checking
const areFeildsEmpty = (): boolean => {
  if (userName.value == "") {
    return true;
  }
  if (passWord.value == "") {
    return true;
  }
  return false;
};
// return to initiale
const updateVisualAlert = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      IsUserName.value = false;
      IsPassWord.value = false;
    }, 2000);
  });
};
</script>

<template>
  <main
    class="w-screen h-screen items-center justify-center lg:grid grid-cols-[1fr_30px_1fr]"
  >
    <section class="w-full hidden lg:flex h-full bg-white">sdjskd</section>
    <div class="hidden lg:flex">lkjlksdjfkd</div>
    <section class="w-full h-full flex items-center justify-center text-black">
      <div class="w-full h-full flex items-center justify-center">
        <div class="w-5/6 md:w-3/5 lg:w-3/6 flex flex-col gap-4">
          <UiInput
            :IsEmpty="IsUserName"
            @onChange="updateUserName"
            PlaceHolder="User Name"
          />
          <UiInput
            :IsEmpty="IsPassWord"
            @onChange="updatePassWord"
            Type="password"
            PlaceHolder="Pass Word"
          />
          <UiButton @onClick="logIn"> Click </UiButton>
        </div>
      </div>
    </section>
  </main>
</template>
