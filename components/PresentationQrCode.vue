<script setup>
import { computed, inject } from 'vue'
import { useI18n } from 'vue-i18n'

import {
  buildPresentationUrl,
  presentationQrCodeFilename,
} from '../lib/presentation-links.mjs'

const { t } = useI18n()
const talkConfig = inject('talkConfig', {})

const presentationUrl = computed(() =>
  buildPresentationUrl(talkConfig.route),
)

const qrCodeSource = computed(() => {
  const filename = presentationQrCodeFilename(talkConfig.route)
  return `${import.meta.env.BASE_URL}images/talk-qrs/${filename}`
})

const accessibleLabel = computed(() => t('title.qr_accessible_label'))
</script>

<template>
  <a
    class="presentation-qr-code"
    :href="presentationUrl"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="accessibleLabel"
  >
    <span class="presentation-qr-code__image">
      <img :src="qrCodeSource" alt="" />
    </span>
    <span class="presentation-qr-code__label">
      {{ t('title.qr_label') }}
    </span>
  </a>
</template>

<style scoped>
.presentation-qr-code {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  color: var(--gt-card-muted);
  font-size: 0.65rem;
  line-height: 1.15;
  text-align: center;
  border: 0;
  box-shadow: none;
  text-decoration: none;
}

.presentation-qr-code__image {
  display: block;
  width: 8.25rem;
  padding: 0.4rem;
  border-radius: 0.45rem;
  background: #fff;
}

.presentation-qr-code__image img {
  display: block;
  width: 100%;
  height: auto;
}

.presentation-qr-code__label {
  max-width: 11rem;
}
</style>
