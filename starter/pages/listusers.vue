<script setup lang="ts">

const { data: users, refresh } = await useFetch<any>('http://localhost:3000/users');
refresh();





const deleteUser = (item: any) => {
  fetch(`http://localhost:3000/users/${item}`, { method: 'DELETE' })
    .then((res) => res.json());
  alert("هل انت متأكد من حذف المستخدم؟")
  refresh();

}
</script>


<template>
  <dev class="bg-white relative border rounded-lg">
    <NuxtLink to="/adduser" active-class="text-primary"
      class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"> اضافة مستخدم جديد
    </NuxtLink>
    <br>
    <br>

    <table class="w-full text-sm text-left text-gray-500 ">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th class="px-4 py-3">رقم الهوية</th>
          <th class="px-4 py-3">الاسم</th>
          <th class="px-4 py-3">البريد الالكتروني</th>
          <th class="px-4 py-3">الاجرائات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users" :key="item.id" class="border-b">
          <td class="px-4 py-3 font-medume text-gray-900">{{ item.userId }}</td>
          <td class="px-4 py-3 font-medume text-gray-900">{{ item.fullname }}</td>
          <td class="px-4 py-3 font-medume text-gray-900">{{ item.email }}</td>
          <NuxtLink :to="`/${item.id}`" active-class="text-primary"
            class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"> تعديل
          </NuxtLink>|
          <button @click="deleteUser(item.id)" type="button"  class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">حذف </button>

        </tr>
      </tbody>
    </table>

  </dev>
</template>
