<script setup lang="ts">

const state = reactive({
  userId: '',
  fullname: '',
  email: '',
})



const onSubmit = async () => {
  await useFetch('http://localhost:3000/users', {
    method: 'POST',
    body: {
      userId: state.userId,
      fullname: state.fullname,
      email: state.email
    }
  }).then((response) => {
    console.log(response);
  });
  alert("تمت الاضافة بنجاح")
  navigateTo({ path: '/listusers' })
 
}
</script>

<template>
  <h1>اضافة مستخدم جديد</h1>
  <br>
  
  <UForm :state="state" @submit="onSubmit">
    <UFormGroup label=" رقم الهوية" name="userId">
      <UInput v-model="state.userId" />
    </UFormGroup>
    <UFormGroup label="الاسم" name="fullname">
      <UInput v-model="state.fullname" />
    </UFormGroup>

    <UFormGroup label="البريد الالكتروني" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <br>
    <UButton type="submit">
      اضافة
    </UButton>
    |
    <NuxtLink to="/listusers">
      الرجوع للصفحة الرئيسية
    </NuxtLink>
  </UForm>
</template>
