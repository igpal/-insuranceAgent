<template>
  <v-app-bar app flat>
    <v-container class="mx-auto py-0">
      <v-row align="center">
        <div style=" text-align:center;" class="hidden-sm-and-down">
          СТРАХОВОЙ
          <br />
          АГЕНТ
        </div>
        <v-spacer />
        <div style=" text-align:center;">
          Оформление полисов страхования
          <br />
          8(999)217-73-44
        </div>

        <v-spacer />

        <v-btn
          v-for="(link, i) in links"
          :key="i"
          v-bind="link"
          class="hidden-md-and-down"
          text
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>
      </v-row>
    </v-container>

    <v-app-bar-nav-icon class="hidden-lg-and-up" @click="toggleDrawer" />
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CoreAppBar',

  computed: {
    ...mapGetters(['links'])
  },

  methods: {
    ...mapMutations(['toggleDrawer']),
    onClick(e, item) {
      e.stopPropagation();

      if (item.to || !item.href) return;

      this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href);
    }
  }
};
</script>
