<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
#app {
  background: #f8fafc;
}
</style>
