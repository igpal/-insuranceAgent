<template>
  <div id="home">
    <main-content />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    MainContent: () => import('@/components/MainContent')
  }
};
</script>
