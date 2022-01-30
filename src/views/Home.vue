<template>
  <div class="home">
    <Catalog1/>
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog1 from '@/components/Catalog1.vue'

export default {
  name: 'Home',
  components: {
    Catalog1
  }
}
</script>
