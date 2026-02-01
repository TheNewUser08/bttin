<script setup>
import Navbar from './components/Navbar.vue'

const teamMembers = [
  {
    initials: 'ĐH',
    name: 'Đồng Lê Hưng',
    color: 'blue',
    link: 'public/banhchuoi.jpg',
  },
  {
    initials: 'ĐA',
    name: 'Nguyễn Đức Anh',
    color: 'emerald',
    link: 'public/banhchuoi.jpg',
  },
  { initials: 'HĐ', name: 'Nguyễn Hải Đăng', color: 'purple', link: 'public/faker.jpg' },
  {
    initials: 'HP',
    name: 'Nguyễn Hải Phong',
    color: 'amber',
    link: 'public/banhchuoi.jpg',
  },
  {
    initials: 'HA',
    name: 'Lê Hiền Anh',
    color: 'rose',
    link: 'public/banhchuoi.jpg',
  },
  {
    initials: 'QB',
    name: 'Hồ Quốc Bảo',
    color: 'cyan',
    link: 'public/banhchuoi.jpg',
  },
  {
    initials: 'VH',
    name: 'Nguyễn Việt Hoàng',
    color: 'indigo',
    link: 'public/banhchuoi.jpg',
  },
  {
    initials: 'MN',
    name: 'Nguyễn Minh Ngọc',
    color: 'pink',
    link: 'public/banhchuoi.jpg',
  },
  {
    initials: 'MT',
    name: 'Tạ Minh Tú',
    color: 'teal',
    link: 'public/banhchuoi.jpg',
  },
  {
    initials: 'MT',
    name: 'Minh Tuệ',
    color: 'orange',
    link: 'public/banhchuoi.jpg',
  },
  {
    initials: 'MĐ',
    name: 'Nguyễn Quang Minh Đạo',
    color: 'lime',
    link: 'public/banhchuoi.jpg',
  },
  {
    initials: 'MT',
    name: 'Vũ Đức Minh Thành',
    color: 'sky',
    link: 'public/banhchuoi.jpg',
  },
]

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
  emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100',
  purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-100',
  amber: 'bg-amber-50 text-amber-600 group-hover:bg-amber-100',
  rose: 'bg-rose-50 text-rose-600 group-hover:bg-rose-100',
  cyan: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100',
  indigo: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100',
  pink: 'bg-pink-50 text-pink-600 group-hover:bg-pink-100',
  teal: 'bg-teal-50 text-teal-600 group-hover:bg-teal-100',
  orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-100',
  lime: 'bg-lime-50 text-lime-600 group-hover:bg-lime-100',
  sky: 'bg-sky-50 text-sky-600 group-hover:bg-sky-100',
}
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <Navbar />
    <main>
      <router-view />
    </main>
    <footer class="mt-auto border-t border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100">
      <div class="mx-auto max-w-6xl px-6 py-10">
        <div class="text-center mb-8">
          <h3 class="text-xl font-semibold text-slate-800 mb-2">Thành viên tổ</h3>
          <p class="text-sm text-slate-500">Đội ngũ phát triển cổng thông tin ôn thi</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <a
            v-for="member in teamMembers"
            :key="member.name"
            :href="member.link"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm border border-slate-100 transition hover:shadow-md hover:border-blue-200"
          >
            <span
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium"
              :class="colorClasses[member.color]"
            >
              {{ member.initials }}
            </span>
            <span class="text-sm text-slate-700">{{ member.name }}</span>
          </a>
        </div>
        <div class="mt-10 pt-6 border-t border-slate-200 text-center">
          <p class="text-xs text-slate-400">
            © 2026 Cổng thông tin ôn thi tốt nghiệp. Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  background: #f8fafc;
}
</style>
