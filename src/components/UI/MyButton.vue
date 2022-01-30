<template lang="pug">
  .button
    <slot></slot>
</template>

<script>
export default {
}
</script>

<style lang="sass">
.btn
  width: 100%
  font-size: 24px
  line-height: 30px
  align-self: flex-start
  padding: 15px 25px
  background: none
  color: teal
  border: 1px solid teal
  margin-right: 10px
  &-small
    width: 110px
    word-break: break-all
</style>
