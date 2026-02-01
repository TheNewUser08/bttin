<template>
  <div class="min-h-screen bg-slate-50 text-slate-800">
    <!-- Hero Section -->
    <header class="relative w-full overflow-hidden bg-white border-b border-slate-200">
      <div
        class="hero-backdrop pointer-events-none absolute inset-0"
        style="--hero-image: url('/school.jpg')"
        aria-hidden="true"
      ></div>
      <div class="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <!-- Left: Info -->
          <div class="space-y-7 mt-2 lg:mt-0 mb-8 lg:mb-0">
            <span
              class="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600"
            >
              <span class="w-2 h-2 py-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Kỳ thi tốt nghiệp THPT 2026
            </span>
            <h1 class="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Cổng thông tin ôn thi tốt nghiệp
            </h1>
            <p class="text-lg text-slate-600 max-w-xl">
              Theo dõi lịch thi, nắm cấu trúc đề và áp dụng các chiến lược làm bài hiệu quả.
            </p>
            <div class="flex flex-wrap gap-3 pt-2">
              <router-link
                to="/lich-thi"
                class="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              >
                Xem lịch thi
                <span>→</span>
              </router-link>
              <router-link
                to="/meo-on-thi"
                class="group relative inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              >
                Mẹo ôn thi
                <span
                  class="pointer-events-none absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-2 py-1 text-[10px] text-white opacity-0 shadow-sm transition group-hover:opacity-100"
                >
                  mẹo mày bé
                </span>
              </router-link>
            </div>
          </div>

          <!-- Right: Countdown -->
          <div
            class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 lg:p-8 text-white"
          >
            <div class="flex flex-wrap items-center justify-left gap-3 mb-4">
              <p class="text-slate-400 text-sm font-medium">Đếm ngược đến ngày thi</p>
              <label class="text-xs text-slate-400 flex items-center gap-2">
                <select
                  v-model="selectedExamId"
                  class="bg-slate-800/70 border border-slate-600 text-slate-100 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option v-for="option in sortedExamOptions" :key="option.id" :value="option.id">
                    {{ option.label }}
                  </option>
                </select>
              </label>
            </div>
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
                <p class="text-3xl lg:text-5xl font-bold tabular-nums text-blue-400">
                  {{ timeLeft.seconds }}
                </p>
                <p class="text-xs lg:text-sm text-slate-400 mt-1">Giây</p>
              </div>
            </div>
            <div
              class="mt-6 pt-4 border-t border-slate-700 flex flex-wrap items-center justify-between gap-2 text-sm"
            >
              <span class="text-slate-400">{{ statusMessage }}</span>
              <span class="text-slate-500">{{ selectedExamDateLabel }}</span>
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
            <span class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-lg"
              >📅</span
            >
            <span class="text-sm font-medium text-slate-500">Ngày thi</span>
          </div>
          <p class="text-2xl font-bold text-slate-900">11-12/06</p>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span
              class="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-lg"
              >📝</span
            >
            <span class="text-sm font-medium text-slate-500">Số môn thi</span>
          </div>
          <p class="text-2xl font-bold text-slate-900">4 môn</p>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-lg"
              >⏱️</span
            >
            <span class="text-sm font-medium text-slate-500">Thời gian thi</span>
          </div>
          <p class="text-2xl font-bold text-slate-900">2 ngày</p>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-lg"
              >🎯</span
            >
            <span class="text-sm font-medium text-slate-500">Tiến độ ôn tập</span>
          </div>
          <p class="text-2xl font-bold text-slate-900">67%</p>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Schedule -->
        <article
          class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
        >
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
                <p class="text-slate-500">Tổ hợp</p>
              </div>
            </li>
          </ul>
        </article>

        <!-- Exam Structure -->
        <article
          class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
        >
          <h3 class="text-lg font-semibold text-slate-800 mb-4">Cấu trúc đề thi</h3>
          <ul class="space-y-3 text-sm">
            <li class="p-3 rounded-lg bg-slate-50">
              <p class="font-medium text-slate-800">Ngữ văn</p>
              <p class="text-slate-500">Đọc hiểu (3đ) + Làm văn (7đ)</p>
            </li>
            <li class="p-3 rounded-lg bg-slate-50">
              <p class="font-medium text-slate-800">Toán</p>
              <p class="text-slate-500">Trắc nghiệm + đúng sai + trả lời ngắn</p>
            </li>
            <li class="p-3 rounded-lg bg-slate-50">
              <p class="font-medium text-slate-800">Tổ hợp</p>
              <p class="text-slate-500">Trắc nghiệm + đúng sai + trả lời ngắn</p>
            </li>
          </ul>
        </article>

        <!-- Checklist -->
        <article
          class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
        >
          <div class="flex items-center justify-between gap-3 mb-4">
            <h3 class="text-lg font-semibold text-slate-800">Checklist ôn tập</h3>
            <span class="text-xs text-slate-400"
              >{{ checklist.filter((item) => item.done).length }}/{{ checklist.length }}</span
            >
          </div>
          <TransitionGroup name="checklist" tag="ul" class="space-y-3 text-sm">
            <li v-for="item in checklist" :key="item.id" class="group flex items-start gap-3">
              <button
                type="button"
                class="mt-0.5 h-5 w-5 rounded border-2 flex items-center justify-center text-xs"
                :class="
                  item.done
                    ? 'border-emerald-500 bg-emerald-500 text-white'
                    : 'border-slate-300 text-transparent'
                "
                @click="toggleChecklistItem(item.id)"
                aria-label="Đánh dấu hoàn thành"
              >
                ✓
              </button>
              <span
                v-if="!item.editing"
                class="flex-1 text-slate-600"
                :class="item.done ? 'line-through text-slate-400' : ''"
              >
                {{ item.text }}
              </span>
              <input
                v-else
                v-model.trim="item.text"
                type="text"
                class="flex-1 rounded border border-slate-200 px-2 py-1 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                @blur="finishEditing(item)"
                @keydown.enter="finishEditing(item)"
                @keydown.esc="cancelEditing(item)"
                ref="editInput"
                autofocus
              />
              <button
                type="button"
                class="text-slate-400 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition"
                @click="removeChecklistItem(item.id)"
                aria-label="Xóa việc"
              >
                <Icon icon="mdi:close" class="h-4 w-4" />
              </button>
            </li>
          </TransitionGroup>
          <div class="group mt-2 flex justify-center">
            <button
              type="button"
              class="h-7 w-7 rounded-full border border-dashed border-slate-300 text-slate-400 hover:border-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
              @click="addNewTask"
              aria-label="Thêm việc mới"
            >
              <Icon icon="mdi:plus" class="h-4 w-4" />
            </button>
          </div>
        </article>
      </div>

      <!-- Tips Section -->
      <div class="mt-10 bg-white border border-slate-200 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-slate-800 mb-4">Mẹo làm bài nhanh</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div class="flex gap-3 items-start">
            <span
              class="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm"
              >1</span
            >
            <p class="text-slate-600">Chia thời gian theo phần, ưu tiên câu chắc trước.</p>
          </div>
          <div class="flex gap-3 items-start">
            <span
              class="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm"
              >2</span
            >
            <p class="text-slate-600">Gạch chân từ khóa, tránh đọc lướt đề quá nhanh.</p>
          </div>
          <div class="flex gap-3 items-start">
            <span
              class="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm"
              >3</span
            >
            <a class="text-slate-600" href="https://youtu.be/UVFHuVneiPM?si=nasMj2vhtd2Q6izu&t=30"
              >6</a
            >
          </div>
          <div class="flex gap-3 items-start">
            <span
              class="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm"
              >4</span
            >
            <p class="text-slate-600">Luôn để 5-7 phút cuối rà soát đáp án.</p>
          </div>
          <div class="flex gap-3 items-start">
            <span
              class="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm"
              >5</span
            >
            <p class="text-slate-600">Tận dụng đáp án loại trừ để tăng xác suất đúng.</p>
          </div>
          <div class="flex gap-3 items-start">
            <span
              class="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm"
              >6</span
            >
            <p class="text-slate-600">7</p>
          </div>
          <div class="flex gap-3 items-start">
            <span
              class="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm"
              >7</span
            >
            <p class="text-slate-600">Giữ nhịp độ ổn định, không dừng lâu ở một câu.</p>
          </div>
          <div class="flex gap-3 items-start">
            <span
              class="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm"
              >8</span
            >
            <p class="text-slate-600">Kiểm tra lại đáp án đã tô đúng mã đề và số câu.</p>
          </div>
        </div>
      </div>

      <!-- Tài liệu ôn thi Section -->
      <article
        class="mt-10 bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
      >
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div class="flex items-start gap-4">
            <span
              class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl shrink-0"
              >📚</span
            >
            <div>
              <h3 class="text-lg font-semibold text-slate-800 mb-1">Tài liệu ôn thi</h3>
              <p class="text-sm text-slate-600 max-w-xl">
                Tổng hợp đề thi, sách giáo trình, video bài giảng và các nguồn tài liệu hữu ích cho
                kỳ thi tốt nghiệp THPT.
              </p>
            </div>
          </div>
          <router-link
            to="/tai-lieu"
            class="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shrink-0"
          >
            Xem tài liệu
            <span>→</span>
          </router-link>
        </div>
      </article>

      <footer></footer>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch, nextTick } from 'vue'
import { Icon } from '@iconify/vue'
import { countdownDates } from '@/data/countdownDates'

const checklistStorageKey = 'study-checklist'
const defaultChecklist = [
  { id: 'weekly-outline', text: 'Hoàn thành đề cương theo tuần', done: true, editing: false },
  { id: 'two-mock-tests', text: 'Luyện ít nhất 2 đề/tuần', done: true, editing: false },
  { id: 'common-mistakes', text: 'Ghi chú lỗi sai thường gặp', done: false, editing: false },
  { id: 'review-72h', text: 'Ôn lại trước kỳ thi 72 giờ', done: false, editing: false },
]

const checklist = ref([...defaultChecklist])

const sortedExamOptions = computed(() =>
  [...countdownDates].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
)

const selectedExamId = ref(sortedExamOptions.value[0]?.id || '')

const selectedExam = computed(
  () =>
    sortedExamOptions.value.find((option) => option.id === selectedExamId.value) ||
    sortedExamOptions.value[0],
)

const examDate = computed(() => new Date(selectedExam.value?.date || Date.now()))
const now = ref(Date.now())
let timerId

const updateNow = () => {
  now.value = Date.now()
}

onMounted(() => {
  const savedChecklist = window.localStorage.getItem(checklistStorageKey)
  if (savedChecklist) {
    try {
      const parsed = JSON.parse(savedChecklist)
      if (Array.isArray(parsed)) {
        checklist.value = parsed
          .filter((item) => item && typeof item.text === 'string')
          .map((item) => ({
            id: item.id || crypto.randomUUID(),
            text: item.text,
            done: Boolean(item.done),
            editing: false,
          }))
      }
    } catch (error) {
      checklist.value = [...defaultChecklist]
    }
  }
  updateNow()
  timerId = window.setInterval(updateNow, 1000)
})

onUnmounted(() => {
  if (timerId) {
    window.clearInterval(timerId)
  }
})

const remainingMs = computed(() => Math.max(0, examDate.value.getTime() - now.value))

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

const selectedExamDateLabel = computed(() => selectedExam.value?.display || '')

const toggleChecklistItem = (id) => {
  checklist.value = checklist.value.map((item) =>
    item.id === id ? { ...item, done: !item.done } : item,
  )
}

const removeChecklistItem = (id) => {
  checklist.value = checklist.value.filter((item) => item.id !== id)
}

const addNewTask = () => {
  const newItem = {
    id: crypto.randomUUID(),
    text: '',
    done: false,
    editing: true,
  }
  checklist.value = [...checklist.value, newItem]
}

const finishEditing = (item) => {
  item.editing = false
  if (!item.text) {
    checklist.value = checklist.value.filter((i) => i.id !== item.id)
  }
}

const cancelEditing = (item) => {
  checklist.value = checklist.value.filter((i) => i.id !== item.id)
}

watch(
  checklist,
  (value) => {
    window.localStorage.setItem(checklistStorageKey, JSON.stringify(value))
  },
  { deep: true },
)
</script>

<style scoped>
.tabular-nums {
  font-variant-numeric: tabular-nums;
}

.checklist-enter-active {
  animation: bounce-in 0.4s ease-out;
}

.checklist-leave-active {
  animation: bounce-out 0.25s ease-in forwards;
}

.checklist-move {
  transition: transform 0.3s ease;
}

.hero-backdrop {
  background-image: var(--hero-image);
  background-size: cover;
  background-position: center;
  opacity: 0.16;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(-10px);
  }
  50% {
    transform: scale(1.03) translateY(2px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes bounce-out {
  0% {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.9) translateX(-15px);
  }
}
</style>
