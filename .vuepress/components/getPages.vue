<template>
  <div>
    <div v-for="page in this.$site.pages">
      <a
        :href="page.path"
        class="text-2xl underline"
      >{{ page.title }}</a>
    </div>
  </div>
</template>
