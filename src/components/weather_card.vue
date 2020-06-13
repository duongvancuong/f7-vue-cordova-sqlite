<template>
  <f7-card class="weather weather--bg">
    <f7-card-content :padding="false">
      <div>
        <f7-card-content>
          <div class="display-flex flex-direction-column justify-content-center">
            <f7-row>
              <f7-col>
                <div class="align-self-center">
                  <f7-row>
                    <f7-col width="75">
                      <p class="weather__text weather__text--large animate__animated animate__bounceInRight">
                        {{ temperature }}°C
                      </p>
                    </f7-col>
                    <f7-col width="25">
                      <div>
                        <f7-icon
                          class="weather__icon"
                          size="15"
                          ios="f7:arrow_uturn_up"
                          aurora="f7:arrow_uturn_up"
                          md="material:arrow_uturn_up"></f7-icon>
                        <p class="weather__text weather--inline weather__text--x-small">{{ temperature }}°C </p>
                      </div>
                      <div>
                        <f7-icon
                          class="weather__icon"
                          size="15"
                          ios="f7:arrow_uturn_down"
                          aurora="f7:arrow_uturn_down"
                          md="material:arrow_uturn_down"></f7-icon>
                        <p class="weather__text weather--inline weather__text--x-small">{{ minTemperature }}°C </p>
                      </div>
                    </f7-col>
                  </f7-row>
                  <div>
                    <img class="weather__icon animate__animated animate__slideInDown" :src="iconUrl" width="100%" />
                    <p class="weather__text weather--inline  weather__text--small weather--mg-0 animate__animated animate__bounceInLeft">
                      {{ description }}
                    </p>
                  </div>
                  <p class="align-self-center weather__text weather__text--x-small weather--mg-0 animate__animated animate__zoomIn">
                    {{ dateTime }}
                  </p>
                </div>
              </f7-col>
              <f7-col class="weather__image">
                <img class="weather__img-w animate__animated animate__slideInDown" :src="img" width="100%" />
                <img class="weather__man animate__animated animate__bounceInLeft" src="static/icons/SprintingDoodle.svg" width="70%" />
              </f7-col>
            </f7-row>

            <f7-row class="margin-vertical">
              <f7-col class="animate__animated animate__bounceInLeft">
                <f7-icon class="weather__icon" ios="f7:sunrise" aurora="f7:sunrise" md="material:sunrise"></f7-icon>
                <p class="weather__text weather--inline  weather__text--small "> {{ sunriseTime }} </p>
              </f7-col>
              <f7-col class="animate__animated animate__bounceInRight">
                <f7-icon class="weather__icon" ios="f7:sunset" aurora="f7:sunset" md="material:sunset"></f7-icon>
                <p class="weather__text weather--inline weather__text--small"> {{ sunsetTime }} </p>
              </f7-col>
            </f7-row>

            <f7-row class="margin-vertical">
              <f7-col class="animate__animated animate__bounceInLeft">
                <f7-icon size="20" ios="f7:wind" aurora="f7:wind" md="material:wind"></f7-icon>
                <p class="weather__text weather--inline  weather__text--small "> {{ speedWind }} </p>
              </f7-col>
              <f7-col class="animate__animated animate__bounceInRight">
                <f7-icon size="20" ios="f7:drop" aurora="f7:drop" md="material:drop"></f7-icon>
                <p class="weather__text weather--inline weather__text--small"> {{ humidityValue }} </p>
              </f7-col>
              <f7-col class="animate__animated animate__bounceInRight">
                <f7-icon size="20" ios="f7:gauge" aurora="f7:gauge" md="material:gauge"></f7-icon>
                <p class="weather__text weather--inline weather__text--small"> {{ pressureValue }} </p>
              </f7-col>
            </f7-row>
          </div>
        </f7-card-content>
      </div>
    </f7-card-content>
  </f7-card>
</template>
<style lang="scss" scoped>
.weather{
  color: black;

  &--bg {
    background: #fff0;
    box-shadow: none;
  }

  &--inline {
    display: inline-block;
  }

  &__image {
    position: relative;
  }

  &__img-w {
    position: absolute;
    top: 0px;
    right: -5px;
  }

  &__man {
    position: absolute;
    top: 60px;
    right: 20px;
  }

  &__icon {
    width: 40px;
    height: 40px;
  }

  &__text {
    font-family: monospace;
    margin: 0;

    &--large {
      font-size: 60px;
    }
    &--small {
      font-size: 20px;
    }
    &--x-small {
      font-size: 15px;
    }
  }
}
</style>
<script>
export default {
  name: 'WeatherCard',
  props : {
    imgUrl: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    temp: {
      type: Number,
      required: true,
    },
    minTemp: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    dateTime: {
      type: String,
      required: true,
    },
    sunset: {
      type: String,
      required: true,
    },
    sunrise: {
      type: String,
      required: true,
    },
    speed: {
      type: String,
      required: true,
    },
    pressure: {
      type: String,
      required: true,
    },
    humidity: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      img: this.imgUrl,
      iconUrl: `static/icons/weather/${this.icon}.svg`,
      temperature: (this.temp - 273.15).toFixed(0),
      minTemperature: (this.minTemp- 273.15).toFixed(0),
      description: this.desc,
      sunsetTime: this.sunset,
      sunriseTime: this.sunrise,
      speedWind: this.speed,
      pressureValue: this.pressure,
      humidityValue: this.humidity,
    };
  },
  methods: { },
}
</script>
