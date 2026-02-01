<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <router-link to="/" class="flex items-center gap-3 group">
        <img
          src="/logoTruong.png"
          alt="Logo Trường"
          class="h-10 w-10 rounded-full object-contain"
        />
        <div class="leading-tight">
          <p class="text-sm font-semibold text-slate-900">Cổng thông tin</p>
          <p class="text-xs text-slate-500">Ôn thi tốt nghiệp</p>
        </div>
      </router-link>

      <nav class="flex items-center gap-1 text-sm font-medium">
        <router-link
          to="/"
          class="rounded-full px-4 py-2 text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900"
          active-class="!bg-blue-50 !text-blue-600"
          >Trang chủ</router-link
        >
        <router-link
          to="/lich-thi"
          class="rounded-full px-4 py-2 text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900"
          active-class="!bg-blue-50 !text-blue-600"
          >Lịch thi</router-link
        >
        <router-link
          to="/meo-on-thi"
          class="rounded-full px-4 py-2 text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900"
          active-class="!bg-blue-50 !text-blue-600"
          >Mẹo ôn thi</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script setup></script>
