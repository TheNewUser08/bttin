<template>
  <div class="min-h-screen bg-slate-50 text-slate-800">
    <section class="mx-auto max-w-6xl px-6 pt-10 pb-12">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-slate-800 md:text-4xl">Tài liệu ôn thi</h1>
        <p class="mt-2 text-slate-600">
          Tổng hợp tài liệu, đề thi và các nguồn học liệu hữu ích cho kỳ thi tốt nghiệp.
        </p>
      </div>

      <!-- Resource Cards -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        <a
          v-for="card in resourceCards"
          :key="card.id"
          :href="card.link"
          target="_blank"
          rel="noopener noreferrer"
          class="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 text-center"
        >
          <div class="flex justify-center mb-4">
            <div
              class="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden group-hover:border-blue-200 transition-colors"
            >
              <img
                v-if="card.image"
                :src="card.image"
                :alt="card.title"
                class="w-12 h-12 object-contain"
              />
              <span v-else class="text-3xl">{{ card.icon }}</span>
            </div>
          </div>
          <h3
            class="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors"
          >
            {{ card.title }}
          </h3>
          <p class="text-sm text-slate-500 leading-relaxed">
            {{ card.description }}
          </p>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const resourceCards = ref([
  {
    id: 'hsa',
    title: 'Đánh giá năng lực ĐHQG Hà Nội (HSA)',
    description:
      'Tổng hợp tài liệu học tập, đề minh họa ĐGNL ĐHQG Hà Nội (HSA): toán học, định tính; khoa học; tiếng anh miễn phí.',
    image: '', // Add image path later
    icon: '📘',
    link: 'https://tailieuonthi.org/category/tai-lieu-thi-dgnl-hn/', // Add link later
  },
  {
    id: 'tsa',
    title: 'Đánh giá tư duy Bách Khoa (TSA)',
    description:
      'Tổng hợp tài liệu học tập, đề minh họa Đánh giá tư duy Bách Khoa (TSA): toán học, đọc hiểu; khoa học miễn phí.',
    image: '', // Add image path later
    icon: '📕',
    link: 'https://tailieuonthi.org/category/tai-lieu-dgtd-hust/', // Add link later
  },
  {
    id: 'vact',
    title: 'Đánh giá năng lực ĐHQG TPHCM (V-ACT)',
    description:
      'Tổng hợp tài liệu học tập, đề minh họa ĐGNL ĐHQG TPHCM (HSA): toán học, định tính; khoa học; tiếng anh miễn phí.',
    image: '', // Add image path later
    icon: '📗',
    link: 'https://tailieuonthi.org/category/dgnl-tphcm/', // Add link later
  },
  {
    id: 'hnue',
    title: 'ĐGNL ĐH Sư phạm Hà Nội',
    description:
      'Tổng hợp tài liệu học tập, đề minh họa Đánh giá năng lực - Đại học sư phạm Hà Nội miễn phí.',
    image: '', // Add image path later
    icon: '📙',
    link: 'https://tailieuonthi.org/category/tai-lieu-dgnl-dhsp/', // Add link later
  },
  {
    id: 'thpt',
    title: 'Tài liệu THPT',
    description:
      'Tổng hợp tài liệu THPT lớp 10, lớp 11, lớp 12 các môn: Toán, Lý, Hóa, Sinh, Tiếng Anh, Văn, Sử, Địa, KTPL,... miễn phí.',
    image: '', // Add image path later
    icon: '📚',
    link: 'https://tailieuonthi.org/category/tai-lieu-thpt/', // Add link later
  },
  {
    id: 'de-thi-thu',
    title: 'Đề thi thử tốt nghiệp THPT',
    description:
      'Tổng hợp đề thi thử tốt nghiệp THPT các môn: Toán, Lý, Hóa, Sinh, Tiếng Anh, Văn, Sử, Địa, KTPL,... miễn phí.',
    image: '', // Add image path later
    icon: '📝',
    link: 'https://tailieuonthi.org/category/de-thi-tn-thpt/', // Add link later
  },
])
</script>
