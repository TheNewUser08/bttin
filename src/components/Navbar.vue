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

      <!-- Mobile menu button -->
      <button
        type="button"
        class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:bg-slate-100 transition"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!mobileMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Desktop nav -->
      <nav ref="navRef" class="relative hidden md:flex items-center gap-1 text-sm font-medium">
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

    <!-- Mobile nav menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl"
      >
        <div class="px-4 py-3 space-y-1">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
            :class="route.path === link.to ? 'bg-blue-50 !text-blue-600' : ''"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </router-link>
        </div>
      </nav>
    </Transition>
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
const mobileMenuOpen = ref(false)

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
