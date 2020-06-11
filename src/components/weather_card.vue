<template>
  <f7-card class="weather weather--bg">
    <f7-card-content :padding="false">
      <div>
        <f7-card-content>
          <div class="display-flex flex-direction-column justify-content-center">
            <div class="align-self-center">
              <p class="weather__text weather__text--large weather--mg-0 animate__animated animate__bounceInLeft"> {{ localName }} </p> 
            </div>
            <p class="align-self-center weather__text weather__text--small weather--mg-0 animate__animated animate__zoomIn"> {{ dateTime }} </p> 
            <img class="align-self-center animate__animated animate__slideInDown" :src="iconUrl" width="50%" />
            <div class="align-self-center">
              <p class="weather__text weather__text--large animate__animated animate__bounceInRight"> {{ temperature }}°C </p> 
            </div>
            <div class="align-self-center">
              <p class="weather__text weather__text--small animate__animated animate__bounceInUp"> {{ description }} </p> 
            </div>
          </div>
        </f7-card-content>
      </div>
    </f7-card-content>
  </f7-card>
</template>
<style lang="scss" scoped>
.weather{
  color: #fff;

  &--bg {
    background: #fff0;
    box-shadow: none;
  }

  &__text {
    font-family: monospace;
    margin: 0;

    &--large {
      font-size: 40px;
      font-weight: bold;
    }
    &--small {
      font-size: 25px;
    }
  }
}
</style>
<script>
export default { 
  name: 'WeatherCard',
  props : { 
    icon_url: {
      type: String,
      required: true,
    },
    temp: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    dateTime: {
      type: String,
      required: true,
    },
  },
  data() {
    return { 
      iconUrl: this.icon_url,
      temperature: this.temp - 273.15,
      description: this.desc,
      localName: this.location,
    };
  },
  methods: { },
}  
</script>
