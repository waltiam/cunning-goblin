<script setup></script>

<template>
  <h1>You <em>almost</em> did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <nav>
    <RouterLink to="/">Home </RouterLink>
    <RouterLink to="/Secret">Secret Place</RouterLink>
  </nav>
  <main><RouterView /></main>
</template>

<style scoped></style>
