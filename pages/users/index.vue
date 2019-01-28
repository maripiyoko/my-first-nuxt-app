<template>
  <div>
    <h3>Qiita Nuxt.js tag entries</h3>
    <ul>
      <li v-for="item in items" :key="item.id">
        <h4>
          <span>{{ item.title }}</span>
          <small>by 
            <nuxt-link :to="`/users/${item.user.id}`">{{ item.user.id }}</nuxt-link>
          </small>
        </h4>
        <div>{{ item.body.slice(0, 130) }}</div>
        <p><a :href="item.url">{{ item.url }}</a></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async asyncData({ store }) {
    if (store.getters['items'].length) {
      return;
    }
    await store.dispatch('fetchItems');
  },
  computed: {
    ...mapGetters(['items'])
  }
};
</script>
