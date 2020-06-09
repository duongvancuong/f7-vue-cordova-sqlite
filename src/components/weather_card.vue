<template>
  <f7-card class="weather">
    <f7-card-content :padding="false">
      <div>
        <f7-card-content>
          <div class="display-flex flex-direction-column justify-content-center">
            <img class="align-self-center" :src="iconUrl" width="35%" />
            <div class="align-self-center">
              <p class="weather__temp"> {{ temperature }} °C </p> 
            </div>
            <div class="align-self-center">
              <p class="weather__desc"> {{ description }} </p> 
            </div>
          </div>
        </f7-card-content>
      </div>
    </f7-card-content>
  </f7-card>
</template>
<style lang="scss" scoped>
.weather{
  &--background-pink {
    background-color: #b468e78c;
  }
  &__temp {
    font-family: monospace;
    font-size: xxx-large;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  &__desc {
    font-family: monospace;
    font-size: xx-large;
    font-weight: bold;
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
  },
  data() {
    return { 
      iconUrl: this.icon_url,
      temperature: this.temp - 273.15,
      description: this.desc,
    };
  },
  methods: { },
}  
</script>
