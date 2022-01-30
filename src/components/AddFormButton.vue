<template lang="pug">
  .orderform
    h1 Button
    .div
      button(
        @click='addOrder'
      ) Добавити заказ
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Orderform',
  methods: {
    addOrder () {
      const data = {
        productId: 3,
        count: 300
      }
      Axios.post('https://webtest.it.ua/testApp/api/orders/add', data)
        .then(response => {
          this.$store.dispatch('addORDER', response.data)
        })
        .catch(err => {
          console.log(this.$logErr(err))
        })
    }
  }
}
</script>

<style lang="sass">
.orderform
  border: 1px solid grey
  box-shadow: 0 0 12px #e0e0e0
  padding: 16px
  margin-left: 24%
  margin-right: 24%
  margin-bottom: 16px
.div
  display: flex
  align-items: center
  justify-content: flex-end
button
  align-self: flex-end
  font-size: 24px
  line-height: 30px
  padding: 45px 25px
  background: none
  border-radius: 7px
  color: teal
  border: 1px solid teal
</style>
