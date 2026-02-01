<template>
  <div class="min-h-screen bg-slate-50 text-slate-800">
    <!-- Hero Section -->
    <header class="w-full bg-white border-b border-slate-200">
      <div class="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <!-- Left: Info -->
          <div class="space-y-6">
            <span
              class="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600"
            >
              <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Kỳ thi tốt nghiệp THPT 2026
            </span>
            <h1 class="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Cổng thông tin ôn thi tốt nghiệp
            </h1>
            <p class="text-lg text-slate-600 max-w-xl">
              Theo dõi lịch thi, nắm cấu trúc đề và áp dụng các chiến lược làm bài hiệu quả.
            </p>
            <div class="flex flex-wrap gap-3 pt-2">
              <router-link to="/lich-thi" class="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all">
                Xem lịch thi
                <span>→</span>
              </router-link>
              <router-link to="/meo-on-thi" class="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all">
                Mẹo ôn thi
              </router-link>
            </div>
          </div>

          <!-- Right: Countdown -->
          <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 lg:p-8 text-white">
            <p class="text-slate-400 text-sm font-medium mb-4">Đếm ngược đến ngày thi</p>
            <div class="grid grid-cols-4 gap-3 lg:gap-4">
              <div class="text-center">
                <p class="text-3xl lg:text-5xl font-bold tabular-nums">{{ timeLeft.days }}</p>
                <p class="text-xs lg:text-sm text-slate-400 mt-1">Ngày</p>
              </div>
              <div class="text-center">
                <p class="text-3xl lg:text-5xl font-bold tabular-nums">{{ timeLeft.hours }}</p>
                <p class="text-xs lg:text-sm text-slate-400 mt-1">Giờ</p>
              </div>
              <div class="text-center">
                <p class="text-3xl lg:text-5xl font-bold tabular-nums">{{ timeLeft.minutes }}</p>
                <p class="text-xs lg:text-sm text-slate-400 mt-1">Phút</p>
              </div>
              <div class="text-center">
                <p class="text-3xl lg:text-5xl font-bold tabular-nums text-blue-400">{{ timeLeft.seconds }}</p>
                <p class="text-xs lg:text-sm text-slate-400 mt-1">Giây</p>
              </div>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between text-sm">
              <span class="text-slate-400">{{ statusMessage }}</span>
              <span class="text-slate-500">11/06/2026</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="mx-auto max-w-7xl px-6 py-10">
      <!-- Quick Stats -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div class="bg-white border border-slate-200 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-lg">📅</span>
            <span class="text-sm font-medium text-slate-500">Ngày thi</span>
          </div>
          <p class="text-2xl font-bold text-slate-900">11-12/06</p>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-lg">📝</span>
            <span class="text-sm font-medium text-slate-500">Số môn thi</span>
          </div>
          <p class="text-2xl font-bold text-slate-900">4 môn</p>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-lg">⏱️</span>
            <span class="text-sm font-medium text-slate-500">Thời gian thi</span>
          </div>
          <p class="text-2xl font-bold text-slate-900">2 ngày</p>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-lg">🎯</span>
            <span class="text-sm font-medium text-slate-500">Tiến độ ôn tập</span>
          </div>
          <p class="text-2xl font-bold text-slate-900">66%</p>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Schedule -->
        <article class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <h3 class="text-lg font-semibold text-slate-800 mb-4">Lịch thi dự kiến</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
              <div class="flex-1">
                <p class="font-medium text-slate-800">11/6 - Sáng</p>
                <p class="text-slate-500">Ngữ văn</p>
              </div>
            </li>
            <li class="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
              <div class="flex-1">
                <p class="font-medium text-slate-800">11/6 - Chiều</p>
                <p class="text-slate-500">Toán</p>
              </div>
            </li>
            <li class="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
              <div class="flex-1">
                <p class="font-medium text-slate-800">12/6</p>
                <p class="text-slate-500">Tổ hợp + Ngoại ngữ</p>
              </div>
            </li>
          </ul>
        </article>

        <!-- Exam Structure -->
        <article class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <h3 class="text-lg font-semibold text-slate-800 mb-4">Cấu trúc đề thi</h3>
          <ul class="space-y-3 text-sm">
            <li class="p-3 rounded-lg bg-slate-50">
              <p class="font-medium text-slate-800">Ngữ văn</p>
              <p class="text-slate-500">Đọc hiểu (3đ) + Làm văn (7đ)</p>
            </li>
            <li class="p-3 rounded-lg bg-slate-50">
              <p class="font-medium text-slate-800">Toán</p>
              <p class="text-slate-500">50 câu trắc nghiệm, 90 phút</p>
            </li>
            <li class="p-3 rounded-lg bg-slate-50">
              <p class="font-medium text-slate-800">Tổ hợp</p>
              <p class="text-slate-500">40 câu/môn, 50 phút</p>
            </li>
          </ul>
        </article>

        <!-- Checklist -->
        <article class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <h3 class="text-lg font-semibold text-slate-800 mb-4">Checklist ôn tập</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-center gap-3">
              <span class="w-5 h-5 rounded border-2 border-emerald-500 bg-emerald-500 flex items-center justify-center text-white text-xs">✓</span>
              <span class="text-slate-600">Hoàn thành đề cương theo tuần</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-5 h-5 rounded border-2 border-emerald-500 bg-emerald-500 flex items-center justify-center text-white text-xs">✓</span>
              <span class="text-slate-600">Luyện ít nhất 2 đề/tuần</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-5 h-5 rounded border-2 border-slate-300 flex items-center justify-center"></span>
              <span class="text-slate-600">Ghi chú lỗi sai thường gặp</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-5 h-5 rounded border-2 border-slate-300 flex items-center justify-center"></span>
              <span class="text-slate-600">Ôn lại trước kỳ thi 72 giờ</span>
            </li>
          </ul>
        </article>
      </div>

      <!-- Tips Section -->
      <div class="mt-10 bg-white border border-slate-200 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-slate-800 mb-4">Mẹo làm bài nhanh</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div class="flex gap-3 items-start">
            <span class="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">1</span>
            <p class="text-slate-600">Chia thời gian theo phần, ưu tiên câu chắc trước.</p>
          </div>
          <div class="flex gap-3 items-start">
            <span class="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">2</span>
            <p class="text-slate-600">Gạch chân từ khóa, tránh đọc lướt đề quá nhanh.</p>
          </div>
          <div class="flex gap-3 items-start">
            <span class="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">3</span>
            <p class="text-slate-600">Ghi nhớ công thức trọng tâm bằng flashcard.</p>
          </div>
          <div class="flex gap-3 items-start">
            <span class="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">4</span>
            <p class="text-slate-600">Luôn để 5-7 phút cuối rà soát đáp án.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const examDate = new Date('2026-06-11T07:30:00+07:00')
const now = ref(Date.now())
let timerId

const updateNow = () => {
  now.value = Date.now()
}

onMounted(() => {
  updateNow()
  timerId = window.setInterval(updateNow, 1000)
})

onUnmounted(() => {
  if (timerId) {
    window.clearInterval(timerId)
  }
})

const remainingMs = computed(() => Math.max(0, examDate.getTime() - now.value))

const timeLeft = computed(() => {
  const totalSeconds = Math.floor(remainingMs.value / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const pad = (value) => String(value).padStart(2, '0')

  return {
    days: String(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  }
})

const statusMessage = computed(() =>
  remainingMs.value === 0
    ? 'Kỳ thi đã bắt đầu. Chúc bạn làm bài thật tốt!'
    : 'Đếm ngược theo giờ Việt Nam (GMT+7).',
)
</script>

<style scoped>
.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style>
