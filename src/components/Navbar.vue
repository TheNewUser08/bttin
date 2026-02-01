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

      <nav ref="navRef" class="relative flex items-center gap-1 text-sm font-medium">
        <Motion
          class="absolute inset-y-1 left-0 rounded-full bg-blue-50"
          :initial="{ opacity: 0, x: 0, width: 0 }"
          :animate="{ opacity: indicator.opacity, x: indicator.left, width: indicator.width }"
          :transition="{ type: 'spring', stiffness: 500, damping: 25 }"
        />
        <div v-for="(link, index) in navLinks" :key="link.to" class="relative z-10">
          <router-link
            :ref="(el) => setLinkRef(el, index)"
            :to="link.to"
            class="relative rounded-full px-4 py-2 text-slate-600 transition-colors duration-300 hover:text-slate-900"
            :class="link.to === '/meo-on-thi' ? 'group' : ''"
            active-class="!text-blue-600"
          >
            <span
              v-if="link.to === '/meo-on-thi'"
              class="pointer-events-none absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-2 py-1 text-[10px] text-white opacity-0 shadow-sm transition group-hover:opacity-100"
            >
              mẹo mày bé
            </span>
            {{ link.label }}
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Motion } from 'motion-v'

const navLinks = [
  { to: '/', label: 'Trang chủ' },
  { to: '/lich-thi', label: 'Lịch thi' },
  { to: '/meo-on-thi', label: 'Mẹo ôn thi' },
  { to: '/tai-lieu', label: 'Tài liệu ôn thi' },
]

const route = useRoute()
const navRef = ref(null)
const linkRefs = ref([])
const indicator = ref({ left: 0, width: 0, opacity: 0 })

const setLinkRef = (el, index) => {
  if (el) {
    linkRefs.value[index] = el
  }
}

const getActiveIndex = () => {
  const currentPath = route.path
  const exactIndex = navLinks.findIndex((link) => link.to === currentPath)
  if (exactIndex >= 0) {
    return exactIndex
  }
  const nestedIndex = navLinks.findIndex(
    (link) => link.to !== '/' && currentPath.startsWith(link.to),
  )
  return nestedIndex >= 0 ? nestedIndex : 0
}

const updateIndicator = async () => {
  await nextTick()
  const activeIndex = getActiveIndex()
  const navEl = navRef.value
  const activeEl = linkRefs.value[activeIndex]

  if (!navEl || !activeEl) {
    return
  }

  const navRect = navEl.getBoundingClientRect()
  const activeRect = activeEl.getBoundingClientRect()

  indicator.value = {
    left: activeRect.left - navRect.left,
    width: activeRect.width,
    opacity: 1,
  }
}

onMounted(() => {
  updateIndicator()
  window.addEventListener('resize', updateIndicator)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIndicator)
})

watch(
  () => route.path,
  () => {
    updateIndicator()
  },
)
</script>
