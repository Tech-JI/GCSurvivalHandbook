<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import Giscus from '@giscus/vue'
import { computed } from 'vue'

const { frontmatter, lang } = useData()
const route = useRoute()

// Config from https://giscus.app (requires Discussions enabled on the repo)
const GISCUS_REPO_ID = 'R_kgDOPdGPTg'
const GISCUS_CATEGORY_ID = 'DIC_kwDOPdGPTs4DCTrp'
const GISCUS_CATEGORY = 'Q&A'

// Show comments only on doc pages (not home), and allow per-page opt-out
// via `comments: false` in frontmatter.
const showGiscus = computed(() => {
  return frontmatter.value.layout !== 'home' && frontmatter.value.comments !== false
})

// Build a locale-independent term so the Chinese and English versions of
// the same page share one discussion thread: "/en/study" -> "study".
const giscusTerm = computed(() => {
  let path = route.path
  if (path.startsWith('/en/')) path = path.slice(4)
  path = path.replace(/\.html$/, '').replace(/\/$/, '')
  return path || 'index'
})

// giscus locale codes differ from VitePress's: en-US -> en, zh-CN stays.
const giscusLang = computed(() => (lang.value === 'en-US' ? 'en' : 'zh-CN'))
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <div v-if="showGiscus" class="giscus-container">
        <Giscus
          repo="Tech-JI/GCSurvivalHandbook"
          :repo-id="GISCUS_REPO_ID"
          :category="GISCUS_CATEGORY"
          :category-id="GISCUS_CATEGORY_ID"
          mapping="specific"
          :term="giscusTerm"
          strict="0"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="bottom"
          theme="preferred_color_scheme"
          :lang="giscusLang"
          loading="lazy"
        />
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.giscus-container {
  margin-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1.5rem;
}
</style>
