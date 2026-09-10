<script setup>
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  content: { type: String, default: '' },
  source: { type: String, default: '' },
  context: { type: String, required: true },
  recipient: { type: String, default: '' },
  language: { type: String, default: 'bash' },
  row: { type: Boolean, default: false },
})

const { locale, t } = useI18n()
const displayed = ref(props.content)
const copied = ref(false)

async function loadLocalizedSource() {
  if (!props.source) {
    displayed.value = props.content
    return
  }

  const lang = locale.value?.startsWith('fr') ? 'fr' : 'en'
  const response = await fetch(`${import.meta.env.BASE_URL}prompts/${props.source}.${lang}.txt`)
  if (!response.ok)
    throw new Error(`Workshop content fetch failed: ${response.status}`)

  displayed.value = (await response.text()).trim()
}

async function copyContent() {
  if (!displayed.value)
    await loadLocalizedSource()

  await navigator.clipboard.writeText(displayed.value)
  copied.value = true
  window.setTimeout(() => copied.value = false, 1600)
}

function copyRow(event) {
  event.currentTarget.blur()
  return copyContent()
}

onMounted(loadLocalizedSource)
watch(locale, loadLocalizedSource)
watch(() => props.content, loadLocalizedSource)
</script>

<template>
  <button
    v-if="row"
    type="button"
    class="copy-command-row"
    tabindex="-1"
    :aria-label="`${t('workshop_common.copy')} — ${displayed}`"
    @click="copyRow"
  >
    <code>{{ displayed }}</code>
    <span class="copy-command-row__action" :class="{ 'is-copied': copied }" aria-live="polite">{{ copied ? t('workshop_common.copied') : t('workshop_common.copy') }}</span>
  </button>
  <div v-else class="copy-code-block" :class="{ 'copy-code-block--prompt': language === 'prompt' }">
    <div class="copy-code-block__bar">
      <div class="copy-code-block__heading">
        <span v-if="recipient" class="copy-code-block__recipient">{{ recipient }}</span>
        <span>{{ context }}</span>
      </div>
      <button type="button" :aria-label="t('workshop_common.copy')" @click="copyContent">
        {{ copied ? t('workshop_common.copied') : t('workshop_common.copy') }}
      </button>
    </div>
    <pre><code>{{ displayed }}</code></pre>
  </div>
</template>
