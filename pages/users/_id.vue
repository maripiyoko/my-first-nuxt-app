<template>
  <div>
    <h3>{{user.id}}</h3>
    <img :src="user.profile_image_url" width="120" alt="">
    <p>{{ user.description }}</p>
    <p>
      <nuxt-link to="/users">Back to users</nuxt-link>
    </p>
    <h4>{{user.id}}さんの投稿一覧</h4>
    <ul>
      <li v-for="item in items" :key="item.id">
        <h5>{{ item.title }}</h5>
        <div>{{ item.body.slice(0, 130) }}</div>
        <p><a target="_blank" :href="item.url">{{item.url}}</a></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  head() {
    return {
      title: this.user.id
    }
  },
  async asyncData({ route, store, redirect }) {
    if (store.getters['users'][route.params.id]) {
      return;
    }
    try {
      await store.dispatch('fetchUserInfo', { id: route.params.id });
    } catch (e) {
      redirect('/')
    }
  },
  computed: {
    user() {
      return this.users[this.$route.params.id];
    },
    items() {
      return this.userItems[this.$route.params.id] || [];
    },
    ...mapGetters(['users', 'userItems'])
  }
}
</script>
