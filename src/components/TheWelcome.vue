<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template lang="pug">
  WelcomeItem
    template(#icon)
      DocumentationIcon
    template(#heading) Documentation
    | Vue’s
    a(href="https://vuejs.org/" target="_blank" rel="noopener") official documentation
    | provides you with all information you need to get started.
  WelcomeItem
    template(#icon)
      ToolingIcon
    template(#heading) Tooling
    | This project is served and bundled with
    a(href="https://vite.dev/guide/features.html" target="_blank" rel="noopener") Vite
    | . The recommended IDE setup is
    a(href="https://code.visualstudio.com/" target="_blank" rel="noopener") VSCode
    | +
    a(href="https://github.com/vuejs/language-tools" target="_blank" rel="noopener") Vue - Official
    | . If you need to test your components and web pages, check out
    a(href="https://vitest.dev/" target="_blank" rel="noopener") Vitest
    | and
    a(href="https://www.cypress.io/" target="_blank" rel="noopener") Cypress
    | /
    a(href="https://playwright.dev/" target="_blank" rel="noopener") Playwright
    | .

    br

    | More instructions are available in
    a(href="javascript:void(0)" @click="openReadmeInEditor")
      code README.md
    |.

  WelcomeItem
    template(#icon)
      EcosystemIcon
    template(#heading) Ecosystem

    | Get official tools and libraries for your project:
    a(href="https://pinia.vuejs.org/" target="_blank" rel="noopener") Pinia
    | ,
    a(href="https://router.vuejs.org/" target="_blank" rel="noopener") Vue Router
    | ,
    a(href="https://test-utils.vuejs.org/" target="_blank" rel="noopener") Vue Test Utils
    | , and
    a(href="https://github.com/vuejs/devtools" target="_blank" rel="noopener") Vue Dev Tools
    | . If you need more resources, we suggest paying
    a(href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener") Awesome Vue
    | a visit.

  WelcomeItem
    template(#icon)
      CommunityIcon
    template(#heading) Community

    | Got stuck? Ask your question on
    a(href="https://chat.vuejs.org" target="_blank" rel="noopener") Vue Land
    | (our official Discord server), or
    a(href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener") StackOverflow
    | . You should also follow the official
    a(href="https://bsky.app/profile/vuejs.org" target="_blank" rel="noopener") vuejs.org
    | Bluesky account or the
    a(href="https://x.com/vuejs" target="_blank" rel="noopener") @vuejs
    | X account for latest news in the Vue world.
  WelcomeItem
    template(#icon)
      SupportIcon
    template(#heading) Support Vue

    | As an independent project, Vue relies on community backing for its sustainability. You can help us by
    a(href="https://vuejs.org/sponsor/" target="_blank" rel="noopener") becoming a sponsor
    | .

</template>
