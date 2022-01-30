<template lang="pug">
  .catalog
    h1 Catalog
    .catalog-lists
      CatalogItems1(
        v-for='product in PRODUCTS'
        :key='product._id'
        :product_data='product'
        )
    AddFormButton
</template>

<script>
import CatalogItems1 from '@/components/CatalogItems1.vue'
import AddFormButton from '@/components/AddFormButton.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Catalog1',
  components: {
    CatalogItems1,
    AddFormButton
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GetProductsFromApi'
    ])
  },
  mounted () {
    this.GetProductsFromApi()
  }
}
</script>

<style lang="sass">
.catalog
  &-lists
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: center
</style>
