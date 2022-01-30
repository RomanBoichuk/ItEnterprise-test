<template lang="pug">
  .catalogitems
    .catalogitem
      <img class='catalogitems-image' :src='product_data.photoUrl' alt="item">
      .catalogitems-description
        p(
          class='catalogitems-description--name'
          :contenteditable = 'editTable'
          ref='observer'
          v-model = 'productArticle'
        ) {{product_data.name}}
        p(
          class='catalogitems-description--pricelist'
        ) Ціна:
          span {{product_data.price}}
        p(
          class='catalogitems-description--pricelist'
        ) Кількість:
          span 5 шт.
        p(
          class='catalogitems-description--pricelist'
        ) Сума:
          span $1500
      .catalogitems-buttons(
        v-if='showButton'
        )
        .my-button(
          class='btn'
        ) Підтвердити
        .my-button(
          class='btn btn-small'
          @click='changeButtons'
        ) Змінити
        .my-button(
          class='btn btn-small'
          @click="remove(product_data.id)"
        ) Видалити
      .catalogitems-buttons(v-else)
        .my-button(
          class='btn btn-small'
          @click='changeItem(product_data.id)'
        ) ПІДТВЕРДИТИ
        .my-button(
          class='btn btn-small'
          @click="changeButtons"
        ) ВІДМІНИТИ
    .confirmation(v-show="show")
      Confirmation(
        @closeShow='closeShow'
        @changeShow='changeShow'
        )
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
import MyConfirmation from '@/components/UI/MyConfirmation.vue'
import Confirmation from '@/components/Confirmation.vue'
import Axios from 'axios'

export default {
  components: {
    MyButton,
    MyConfirmation,
    Confirmation
  },
  data () {
    return {
      productArticle: '',
      show: false,
      delete: false,
      сonfirmation_data: '',
      editTable: false,
      showButton: true
    }
  },
  props: {
    product_data: Object
  },
  methods: {
    remove (id) {
      const dataId = 300
      Axios.post('https://webtest.it.ua/testApp/api/orders/delete/' + dataId)
        .then((response) => {
          this.$store.dispatch('deleteORDER', response.data)
        })
      if (!this.show) {
        this.show = true
        this.сonfirmation_data = id
      }
      // this.$store.dispatch('removePRODUCT', id)
    },
    changeShow (data) {
      this.delete = data
    },
    closeShow (data) {
      this.delete = data
      this.show = false
    },
    changeButtons () {
      if (this.editTable === false && this.showButton === true) {
        this.editTable = true
        this.showButton = false
      } else {
        this.editTable = false
        this.showButton = true
      }
    },
    changeItem (id) {
      const data = {
        name: this.$refs.observer.innerText,
        id: id
      }
      this.$store.dispatch('updateProduct', data)
      this.showButton = true
    }
  },
  watch: {
    delete (newValue) {
      if (this.delete) {
        this.$store.dispatch('removePRODUCT', this.сonfirmation_data)
        this.delete = false
        this.show = false
      }
    }
  }
}
</script>

<style lang="sass">
.catalogitems
  position:relative
  flex-basis: 50%
  display: flex
  flex-wrap: wrap
  border: 1px solid grey
  box-shadow: 0 0 12px #e0e0e0
  padding: 16px
  margin-left: auto
  margin-right: auto
  margin-bottom: 16px
  &-description
    margin-left: 40px
    text-align: left
    &--name
      width: 250px
      text-align: center
      font-size: 28px
      line-height: 34px
      font-weight: bold
      background: #DCDCDC
      padding: 10px 40px
      border-radius: 5px
    &--pricelist
      position: relative
      max-width: 70%
      font-size: 18px
      line-height: 24px
      padding: 5px 0px
  &-image
    width: 150px
  &-buttons
    margin-left: 30px
    padding-top: 28px
    display: flex
    justify-content: space-between
    flex-wrap: wrap
span
  position: absolute
  left: 50%
  font-size: 22px
  font-weight: bold
  color: black
.catalogitem
  display: flex
  border: 1px solid grey
  box-shadow: 0 0 12px #e0e0e0
  padding: 16px
  margin-left: auto
  margin-right: auto
  margin-bottom: 16px
.confirmation
  position: absolute
  background: grey
  border-radius: 12px
  margin: auto
  left: 50%
  top: 50%
  transform: translateX(-50%) translateY(-50%)
</style>
