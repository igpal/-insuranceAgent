<template>
  <v-row class="text-center">
    <v-col cols="12">
      <div class="intro">
        <v-container class="pa-16">
          <div class="intro__text">
            <strong>Оформление полисов</strong>
            <span class="primary-color">
              ОСАГО,КАСКО,
              <br />
              ЗЕЛЕНОЙ КАРТЫ, ВЫЕЗЖАЮЩИХ ЗА РУБЕЖ
              <br />
              ИПОТЕЧНОЕ СТРАХОВАНИЕ
              <br />
              И ДРУГИЕ ВИДЫ
            </span>
          </div>

          <v-btn rounded color="primary" dark x-large>
            <span class="hidden-md-and-down">
              <v-icon large dark class="mx-2">call</v-icon>
              Заказать звонок
            </span>
            <v-icon large dark class="mx-2 hidden-lg-and-up">call</v-icon>
          </v-btn>
        </v-container>
      </div>

      <div class="calc">
        <v-container class="pa-16">
          <h1>Онлайн расчет стоимости полиса ОСАГО</h1>
        </v-container>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'MainContent'
};
</script>

<style></style>
