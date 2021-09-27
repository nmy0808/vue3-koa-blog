<template>
  <div class="login-container shadow">
    <a-form class="login-form" layout="vertical" :model="formState">
      <a-form-item>
        <a-input v-model:value="formState.username" placeholder="Username">
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="formState.password"
          type="password"
          placeholder="Password"
        >
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          @click="handleSubmit"
          size="large"
          type="primary"
          block
          html-type="submit"
          :disabled="disabled"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { computed, reactive, toRaw } from '@vue/reactivity';
export default {
  setup() {
    const formState = reactive({
      username: '',
      password: '',
    });
    const disabled = computed(
      () => formState.user === '' || formState.password === '',
    );
    const handleSubmit = () => console.log(toRaw(formState));
    return {
      formState,
      disabled,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.login-container {
  width: 400px;
  margin: 0 auto;
  margin-top: 10%;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #cfd8dc;
  padding: 40px;
}
.login {
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>