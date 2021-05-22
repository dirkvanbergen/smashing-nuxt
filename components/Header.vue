<template>
  <div class="container-fluid header pt-2 d-none d-md-block">
    <div class="container">
      <div class="row">
        <div class="col">
          <nuxt-link
            class="text-white"
            :to="{ name: 'index' }"
            ><h3>
              <img
                src="@/static/images/LogSma.svg"
                alt="smashing logo"
                width="75"
                height="75"
                style="float: left; margin-right: 20px"
              />
              Smashing'72
            </h3>
            <span>De leukste volleybalvereniging van Diemen!</span
            >
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #b00;
}
</style>

