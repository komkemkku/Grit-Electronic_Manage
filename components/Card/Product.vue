<template>
  <!-- Caedproduct desktop -->
  <div
    class="flex flex-col w-[200px] h-[270px] object-fill rounded-[20px] bg-white drop-shadow-lg"
  >
    <div class="p-1">
      <!-- HeaderCard -->
      <div class="flex justify-between">
        <div class="flex gap-2 px-2">
          <h1 class="textmain text-[12px] font-bold">{{ product.id }}</h1>
          <h1 class="textmain text-[12px] font-bold">|</h1>
          <div
            class="flex justify-center items-center gap-1 w-[45px] rounded-[10px] text-[#D78D33] bg-[#FFE7CA]"
          >
            <i class="fa-solid fa-star text-[12px]"></i>
            <p
              class="flex items-center mt-[2px] text-[13px] font-bold h-[10px]"
            >
              0
            </p>
          </div>
        </div>
        <i
          class="fa-solid fa-trash-can text-[#EC5B3D] hover:text-[#642b1f] flex items-center text-[12px] mt-[2px] pr-[5px] hover:-translate-x-1 hover:scale-110 transition ease-in-out delay-300"
        ></i>
      </div>
      <hr class="my-[3px] mx-[4px] border-[#2B1E28] rounded-full" />
      <!-- Photo -->

      <NuxtLink
        to="/product/[id]"
        class="flex items-center place-content-center h-[157px] pt-[8px]"
      >
        <img
          class="border-black border-[1px] drop-shadow-lg w-[130px] object-cover hover:-translate-y-1 hover:scale-125 transition ease-in-out delay-200"
          src="https://media-cdn.bnn.in.th/425404/asus-tuf-gaming-a16-fa608wv-qt069wf-jaeger-gray-1-square_medium.jpg"
          alt=""
        />
      </NuxtLink>
    </div>
    <div
      class="flex flex-col items-center gap-[3px] h-[80px] rounded-[20px] p-1 px-1 bg-[#EAA04B]"
    >
      <h1
        class="text-center h-[25px] textmain font-bold text-[7px] text-wrap px-2 w-[200px] bg"
      >
        {{ product.name }}
      </h1>
      <div
        class="text-center rounded-[50px] text-[10px] font-bold w-[80px] text-[#EAA04B] bg-[#2B1E28]"
      >
        ยอดคงเหลือ
      </div>
      <div class="pl-3">
        <span class="textmain font-bold text-[22px]">{{ product.amount }}</span>
        <span class="textmain font-bold text-center text-[7px] text-gray-400">
          ชิ้น
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/models/product.model";

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});
</script>

<style scoped></style>
