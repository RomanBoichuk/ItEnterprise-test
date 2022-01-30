<template lang="pug">
  .div(
    class='dialog'
    )
    .dialog-content
      <slot></slot>
</template>

<script>
export default {
  name: 'my-confirmation'
}
</script>

<style lang="sass">
</style>
