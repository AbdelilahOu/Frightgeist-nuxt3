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
            FocusClass="focus:border-primary focus:outline-0 focus:shadow-md focus:TheShadow"
            DisabledClass="disabled:text-gray-400"
            MoreClass=""
            PlaceHolder="User Name"
          />
          <UiInput
            FocusClass="focus:border-primary focus:outline-0 focus:shadow-md focus:TheShadow"
            DisabledClass="disabled:text-gray-400"
            MoreClass=""
            PlaceHolder="Pass Word"
          />
          <UiButton
            Class="hover:TheShadow px-2 py-2 text-gray-400 transition-all duration-200 border-2"
          >
            Click
          </UiButton>
        </div>
        <!-- Class=" shadow-sm shadow-black  transition  duration-300 mt-1 block h-10 w-full rounded-sm border-2 border-black px-2 sm:text-sm" -->
      </div>
    </section>
  </main>
</template>
