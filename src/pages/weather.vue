<template>
  <f7-page class="weather weather--bg-blue">
    <weather-card
      v-if="status === 'done'"
      :img-url="imgUrl"
      :icon="current.weather[0].icon"
      :temp="temperature"
      :desc="description"
      :date-time="dateTime"
      :sunset="sunset"
      :sunrise="sunrise"
      :min-temp="minTemp"
      :speed="speed"
      :pressure="pressure"
      :humidity="humidity"
    />
    <f7-block v-if="status === 'done'">
      <f7-swiper :params="{ freeMode: true, slidesPerView: 3, spaceBetween: 20 }">
        <f7-swiper-slide v-for="d in daily" :key="d.dt">
          <weather-item
            :icon_url="getUrl(d.weather[0].icon)"
            :temp="d.temp.day"
            :day="formatDay(d.dt)"
          />
        </f7-swiper-slide>
      </f7-swiper>
    </f7-block>
  </f7-page>
</template>
<style lang="scss">
.weather {
  &--bg-blue {
    background: #b2dde6;
  }
}
</style>
<script>
import { mapState, mapActions } from 'Vuex';

import WeatherCard from '../components/weather_card.vue';
import WeatherItem from '../components/weather_item.vue';

import getPropertiesDateTime from '../utils/dateTime.js';

export default {
  components: {
    WeatherCard,
    WeatherItem,
  },
  data() {
    return { };
  },
  computed: {
    ...mapState("weather", {
      current: state => state.data.current,
      daily: state => state.data.daily,
      status: state => state.status,
    }),
    temperature: function () {
      return this.current.feels_like;
    },
    minTemp: function () {
      return this.current.temp;
    },
    description: function () {
      return this.current.weather[0].description;
    },
    imgUrl: function() {
      return `http://openweathermap.org/img/wn/${this.current.weather[0].icon}@2x.png`;
    },
    speed: function () {
      return `${this.current.wind_speed}m/s`;
    },
    pressure: function () {
      return `${this.current.pressure}hpa`;
    },
    humidity: function () {
      return `${this.current.humidity}%`;
    },
    dateTime: function () {
      const d = new Date(this.current.dt * 1000);
      const proDate = getPropertiesDateTime(d);

      return `${proDate.day} ${proDate.hour}:${proDate.min} ${proDate.ampm}`;
    },
    sunrise: function() {
      const d = new Date(this.current.sunrise * 1000);
      const proDate = getPropertiesDateTime(d);

      return `${proDate.hour}:${proDate.min} ${proDate.ampm}`;
    },
    sunset: function() {
      const d = new Date(this.current.sunset* 1000);
      const proDate = getPropertiesDateTime(d);

      return `${proDate.hour}:${proDate.min} ${proDate.ampm}`;
    },
  },
  watch: {
    status: function(val, oldVal) {
      console.log("----Watching status ----");
      console.log("Status is:" + val);
      if (val === 'done') {
        this.$f7.preloader.hide();
      }
      if (["loading"].includes(val) && oldVal === 'done') {
        this.$f7.preloader.show();
      }
    },
  },
  created() {
    this.actionGetEssentialWeatherData();
  },
  methods: {
    ...mapActions("weather", ["actionGetCurrentWeather", "actionGetEssentialWeatherData"]),
    formatDay(d) {
      const _d = new Date(d * 1000);
      const proDate = getPropertiesDateTime(_d);

      return `${proDate.day}`;
    },
    getUrl(icon) {
      return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    },
  },
}
</script>
