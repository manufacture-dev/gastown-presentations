<script setup>
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const talkConfig = inject('talkConfig', {})

async function copyDemoPrompt() {
  const lang = locale.value?.startsWith('fr') ? 'fr' : 'en'
  const promptName = `gastown-demo-prompt.${talkConfig.prompt}.${lang}`
  const response = await fetch(`${import.meta.env.BASE_URL}prompts/${promptName}.txt`)
  if (!response.ok)
    throw new Error(`Prompt fetch failed: ${response.status}`)

  await navigator.clipboard.writeText(await response.text())
}
</script>

<template>
  <button class="app-open-link" type="button" :aria-label="t('demo.copy_prompt')" @click="copyDemoPrompt">
    {{ t('demo.copy_prompt') }}
  </button>
</template>
