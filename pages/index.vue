<template>
  <div>
    {{ t("message") }}
    <h2>Languages</h2>
    <div>
      <a
        v-for="locale in locales"
        :key="locale.code"
        :href="switchLocalePath(locale.code)"
      >
        {{ locale.name }}
      </a>
    </div>
  </div>
</template>

<i18n>
{
  en: {
    message: "English message"
  },
  ja: {
    message: "Japanese message"
  }
}
</i18n>

<script setup>
const { locales, t } = useI18n();
// console.log(locales.value) // Cannot read properties of undefined (reading 'value')
const switchLocalePath = useSwitchLocalePath();
</script>
