<template>
  <div>
    <h2>Login page</h2>
    <p>
      <button type="button" @click="login">LOGIN</button>
      <nuxt-link to='/'>Back to Top</nuxt-link>
    </p>
  </div>
</template>

<script>
import Cookies from 'universal-cookie'

export default {
  methods: {
    login() {
      const cookies = new Cookies();
      cookies.set('credencial', 'true', { maxAge: 90 });
      this.$router.push('/');
    }
  }
}
</script>
