<template>
  <v-form ref="userForm" v-model="validForm" lazy-validation>
    <v-text-field
      type="email"
      v-model="email"
      :rules="emailRules"
      label="Email Address"
      placeholder="yourname@gmail.com"
      clearable
      required
    ></v-text-field>
    <v-text-field
      type="password"
      v-model="password"
      :rules="passwordRules"
      label="Password"
      clearable
      required
    ></v-text-field>
    <v-btn
      color="success"
      class="mr-4"
      @click="validate"
    >
      Login
    </v-btn>
    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Clear Form
    </v-btn>
  </v-form>
</template>

<script setup>
const emit = defineEmits(['login-user', 'register-user'])
const userForm = ref(null)
const validForm = ref(true)
const formType = ref('login')
const email = ref('')
const emailRules = reactive([
  v => !!v || 'E-mail is required',
  v => /.+@.+\..+/.test(v) || 'Input valid email address'
])
const password = ref('')
const passwordRules = reactive([
  v => !!v || 'Password Required',
  v => (v && v.length >= 8) || 'Password must be longer than 8 characters',
  v => (v && v.length <= 32) || 'Password can\'t be more than 32 characters'
])
const reset = () => {
  userForm.value.reset()
}
const validate = async () => {
  const { valid } = await userForm.value.validate()
  if (valid && formType === 'login') {
    await $fetch
  } else if (valid && formType === 'register') {

  }
}
</script>

<style lang="css" scoped>
</style>
