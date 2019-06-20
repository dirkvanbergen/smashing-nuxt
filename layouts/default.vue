<template>
  <div class="page min-h-screen flex flex-col">
    <Header />
    <div class="container mx-auto flex-grow">
      <nuxt/>
    </div>
    <div class="footer w-full p-4 pin-b border-t">
      This is the footer
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
components: { Header }
}
</script>

<style>
</style>

