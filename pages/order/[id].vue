<template>
  <div class="w-screen">
    <div class="pages" v-for="(data, order) in orders" :key="order">
      <div class="p-5 rounded-[20px] bg-white w-full h-full">
        <div>
          <h1 class="header pl-2">คำสั่งซื้อ #{{ data.order_id }}</h1>
        </div>
        <hr class="mt-[18px] mb-[15px] border-black/70" />
        <div
          class="flex gap-2 justify-between"
          v-for="(item, i) in products"
          :key="i"
        >
          <div class="w-3/4 bg-black flex justify-between">
            <div class="bg-slate-100 w-full">
              <img
                :src="item.img"
                alt=""
                class="rounded-[26px] object-cover place-content-center w-[360px] h-[250px] border-2 border-black"
              />
            </div>
            <div class="flex flex-col justify-between w-full bg-slate-400">
              <div class="h-full bg-slate-600 ">
                <h1 class="header">ข้อมูลผู้สั่งซื้อ</h1>
              </div>
              <div class="h-full bg-slate-700 ">
                <h1 class="header">ข้อมูลสินค้า</h1>
              </div>
            </div>
          </div>
          <div class="w-1/4 bg-slate-500">2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { data } from "autoprefixer";
import type { Order } from "~/models/order.model";
import type { Product } from "~/models/product.model";

const orders = ref<Order[]>([
  {
    order_id: 12345,
    customer: {
      user_id: 101,
      username: "john_doe",
      email: "john_doe@example.com",
    },
    total_amount: 1250,
    currency: "USD",
    status: "delivered",
    created_at: "2024-12-15T08:30:00Z",
    payment_status: "paid",
    items: [
      {
        product_id: 201,
        product_name: "Smartphone X Pro",
        quantity: 1,
        price: 1000,
      },
      {
        product_id: 202,
        product_name: "Wireless Headphones",
        quantity: 1,
        price: 250,
      },
    ],
  },
]);

const products = ref<Product[]>([
  {
    id: 1,
    name: "AULA",
    detail:
      "Wried Mechanical KEYBOARDbgfnfdgdfsbsdfhsdfhfsdhhdsfhdfdfsfhdfdcxzcxzcf ",
    price: 1000,
    amount: 0,
    img: "https://aulathailand.com/wp-content/uploads/2023/06/1.png",
  },
]);
</script>

<style></style>
