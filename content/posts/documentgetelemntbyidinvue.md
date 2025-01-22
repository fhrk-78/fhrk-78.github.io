---
date: '2025-01-22T18:00:00+09:00'
draft: false
title: 'document#getElementById()みたいなことをVue.jsでやる'
ShowToc: true
categories: ["備忘録"]
tags: ["vue.js"]
---

Vue.js3です。

```vue
<script type="ts" setup>
import { ref, onMounted } from 'vue'

const test = ref<HTMLCanvasElement|null>(null)

onMounted(async () => {
    if (!test) return

    const ctx = test.getContext('2d')
})
</script>

<template>
    <canvas ref="test"></canvas>
</template>
```
