<template lang="pug">
  .dialog
    h3 Ви хочете видалити
    .dialog-content
      .my-button(
        class='btn btn-small'
        @click='changeShow'
      ) OK
      .my-button(
        class='btn btn-small'
        @click='closeShow'
      ) NO
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
export default {
  components: {
    MyButton
  },
  props: [
    'сonfirmation_data'
  ],
  methods: {
    changeShow () {
      this.$emit('changeShow', true)
    },
    closeShow () {
      this.$emit('closeShow', false)
    }
  }
}
</script>

<style lang="sass">
.dialog
  &-content
    display: flex
    justify-content: space-between
    padding: 20px
    margin: auto
    min-width: 500px
</style>
