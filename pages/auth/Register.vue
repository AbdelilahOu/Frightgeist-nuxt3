<script setup lang="ts">
import { useUser } from "~~/stores/UserStore";

definePageMeta({
  title: "Register",
});
// feilds
const userName = ref<string>("");
const passWord = ref<string>("");
const email = ref<string>("");
// for ui alert
const IsUserName = ref<boolean>(false);
const IsPassWord = ref<boolean>(false);
const IsEmail = ref<boolean>(false);
// update feilds
const updateUserName = ([Name]: string) => (userName.value = Name);
const updatePassWord = ([Word]: string) => (passWord.value = Word);
const updateEmail = ([Email]: string) => (email.value = Email);
// main action
const Register = async (): Promise<void> => {
  if (!areFeildsEmpty()) {
    useUser().Register({
      userName: userName.value,
      passWord: passWord.value,
      email: email.value,
    });
    return;
  }
  IsUserName.value = userName.value === "";
  IsPassWord.value = passWord.value === "";
  IsEmail.value = email.value === "";
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
  if (email.value == "") {
    return true;
  }
  return false;
};
// return to initiale
const updateVisualAlert = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      IsUserName.value = false;
      IsPassWord.value = false;
      IsEmail.value = false;
      resolve();
    }, 2000);
  });
};
</script>

<template>
  <main
    class="w-full h-full items-center justify-center lg:grid grid-cols-[1fr_30px_1fr]"
  >
    <section class="w-full hidden lg:flex h-full bg-white">sdjskd</section>
    <div class="hidden lg:flex"></div>
    <section class="w-full h-full flex items-center justify-center text-black">
      <div class="w-full h-full flex items-center justify-center">
        <div
          class="w-5/6 md:w-3/5 lg:w-3/6 h-full justify-center flex flex-col gap-4"
        >
          <UiInput
            :IsEmpty="IsUserName"
            @onChange="updateUserName"
            PlaceHolder="User Name"
          />
          <UiInput
            :IsEmpty="IsEmail"
            @onChange="updateEmail"
            PlaceHolder="Email"
          />
          <UiInput
            :IsEmpty="IsPassWord"
            @onChange="updatePassWord"
            Type="password"
            PlaceHolder="Pass Word"
          />
          <UiButton @onClick="Register"> Register </UiButton>
          <h1 class="text-gray-500">
            You dont have an account ?
            <nuxt-link class="text-gray-900" to="/auth/LogIn"
              >Click here</nuxt-link
            >
          </h1>
        </div>
      </div>
    </section>
  </main>
</template>
