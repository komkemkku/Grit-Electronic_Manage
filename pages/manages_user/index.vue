<template>
  <div class="defaultpages">
    <div class="pages">
      <!-- Header -->
      <hr class="hrpages" />
      <div class="flex flex-col gap-2 p-1 h-[100%] w-full ">
        <div
          class="h-[20%] w-[100%] flex gap-2 items-center roundedmain bg-[#FFFAE9]"
        >
          <div
            class="h-full w-[15%] rounded-[20px] p-2 text-center bg-gradient-to-t from-green-600 to-green-100  dropshadowbottomsub"
          >
            <h1 class="textmain ">ผู้สมัครใช้งานล่าสุด</h1>
            <div
              class=" w-[100%] h-[80%] flex items-center justify-center"
            >
              <span class="textmain text-[50px]">000000</span>
            </div>
          </div>
          <div class="w-[50%] h-[100%] ">
            <div
              class="h-full w-[40%] rounded-[20px] p-2 text-center bg-gradient-to-t from-yellow-600 to-orange-200  dropshadowbottomsub"
            >
              <h1 class="textmain">ผู้ใช้งานทั้งหมด</h1>
              <div
                class=" w-[100%] h-[80%] flex items-center justify-center"
              >
              <span class="textmain text-[50px]">000000</span>
              </div>
            </div>
          </div>
        </div>
        <!-- รายการคำสั่งซื้อ -->
        <div class="p-2 h-full w-[100%] roundedmain bg-[#FFFAE9]">
          <div class="flex justify-between gap-2">
            <h1 class="flex items-center textmain font-bold text-[25px]">
              รายการผู้ใช้งาน
            </h1>
            <div class="w-[50%]">
              <Search />
            </div>
            <div class="flex gap-2">
              <SelectorUser />
              <SelectorDate />
            </div>
          </div>
          <div class="h-[89%] mt-2">
            <table class="w-full">
              <thead class="border-b-2 border-[#7A4711]">
                <tr class="flex gap-2 w-full">
                  <th class="flex justify-start w-[20%]">หมายเลขผู้ใช้งาน</th>
                  <th class="w-[20%]">ชื่อ</th>
                  <th class="w-[20%]">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                  <tr class="flex gap-2 hover:bg-[#F68D44]/50 mt-[11px]">
                    <td class="w-[20%] truncate">1</td>
                    <td class="w-[20%] text-center truncate">2</td>
                    <td class="w-[20%] text-center truncate">3</td>
                  </tr>
              </tbody>
            </table>
          </div>
          <!-- paginate -->
          <div class="mt-[8px]">
            <Paginate />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
