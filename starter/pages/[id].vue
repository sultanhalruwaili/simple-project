
<script>
import axios from 'axios';

export default {
  data() {
    return {
      userNum: '',
      user: {}
    }
  },
  mounted() {
    this.userNum = this.$route.params.id;
    this.getUser(this.userNum);
  },
  methods: {
    getUser(userNum) {
      axios
        .get(`http://localhost:3000/users/${userNum}`)
        .then((response) => {
          this.user = response.data;
          console.log(response);
        });
    },

    onUpdate(userNum) {
      axios
        .put(
          `http://localhost:3000/users/${this.userNum}`,
          this.user
        )
        .then((response) => {
          console.log(response);
        })
        alert("تم التعديل بنجاح")
     
      navigateTo({ path: '/listusers' })
    }
  }
}
</script>

<template>
  <UForm @submit="onUpdate">
    <UFormGroup label="رقم الهويه" name="userId">
      <UInput v-model="user.userId" />
    </UFormGroup>
    <UFormGroup label="اسم المستخدم" name="fullname">
      <UInput v-model="user.fullname" />
    </UFormGroup>

    <UFormGroup label="البريد الالكتروني" name="email">
      <UInput v-model="user.email" />
    </UFormGroup>

    <br>
    <UButton type="submit">
      تعديل
    </UButton>
    |
    <NuxtLink to="/listusers">
      الرجوع للصفحة الرئيسية
    </NuxtLink>
  </UForm>
</template>
