<template>
  <f7-card class="weather">
    <f7-card-content :padding="false">
      <div class="weather--background">
        <f7-card-content>
          <div class="display-flex flex-direction-column justify-content-center">
            <div class="align-self-center">
              <p class="weather__value"> {{ dayVaule }} </p>
            </div>
            <img class="align-self-center" :src="imgUrl" width="100%"/>
          </div>
        </f7-card-content>
      </div>
    </f7-card-content>
    <f7-card-footer class="weather__footer display-flex flex-direction-column justify-content-center">
      <div class="align-self-center">
        <p class="weather__value weather__value--mg-0"> {{ temperature }}°C</p>
      </div>
    </f7-card-footer>
  </f7-card>
</template>
<style lang="scss" scoped>
.weather{
  &--background {
    background-color: #59b3e4ba;
  }
  &__value {
    font-family: monospace;
    font-size: 16px;
    font-weight: bold;
    color: black;

    &--mg-0 {
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
  &__footer {
    background-color: #fff;
  }
}
</style>
<script>
export default {
  name: 'WeatherItem',
  props : {
    icon_url: {
      type: String,
      required: true,
    },
    temp: {
      type: Number,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imgUrl: this.icon_url,
      temperature: (this.temp - 273.15).toFixed(0),
      dayVaule: this.day,
    };
  },
  methods: { },
}
</script>
