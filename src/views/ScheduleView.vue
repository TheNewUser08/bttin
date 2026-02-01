<template>
  <div class="min-h-screen bg-slate-50 text-slate-800">
    <section class="mx-auto max-w-6xl px-6 pt-10 pb-12">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-slate-800 md:text-4xl">Lịch thi tốt nghiệp</h1>
        <p class="mt-2 text-slate-600">
          Cập nhật lịch thi dự kiến để bạn chủ động sắp xếp thời gian ôn tập và nghỉ ngơi.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <article class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 class="text-xl font-semibold text-slate-800 flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg">📅</span>
            Ngày 11/6
          </h2>
          <ul class="mt-4 space-y-3 text-sm">
            <li class="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
              <span class="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
              <div>
                <p class="font-semibold text-slate-800">Buổi sáng</p>
                <p class="text-slate-500">Ngữ văn (thi tự luận)</p>
              </div>
            </li>
            <li class="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
              <span class="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
              <div>
                <p class="font-semibold text-slate-800">Buổi chiều</p>
                <p class="text-slate-500">Toán (thi trắc nghiệm)</p>
              </div>
            </li>
          </ul>
        </article>

        <article class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 class="text-xl font-semibold text-slate-800 flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-lg">📅</span>
            Ngày 12/6
          </h2>
          <ul class="mt-4 space-y-3 text-sm">
            <li class="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
              <span class="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
              <div>
                <p class="font-semibold text-slate-800">Buổi sáng</p>
                <p class="text-slate-500">KHTN hoặc KHXH (3 môn thành phần)</p>
              </div>
            </li>
            <li class="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
              <span class="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
              <div>
                <p class="font-semibold text-slate-800">Buổi chiều</p>
                <p class="text-slate-500">Ngoại ngữ (thi trắc nghiệm)</p>
              </div>
            </li>
          </ul>
        </article>
      </div>

      <div class="mt-8 rounded-2xl bg-amber-50 border border-amber-200 p-6 text-sm text-amber-800">
        <span class="font-semibold">⚠️ Lưu ý:</span> Lịch thi có thể điều chỉnh theo thông báo chính thức của Bộ GD&ĐT. Hãy cập nhật thường xuyên.
      </div>
    </section>
  </div>
</template>

<script setup></script>
