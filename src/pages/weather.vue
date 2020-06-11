<template>
  <f7-page class="weather weather--bg-blue">
    <weather-card 
      v-if="status === 'done'"
      :icon_url="iconUrl"
      :temp="temperature"
      :desc="description"
      :location="data.name"
      :date-time="dateTime"
    />
    <f7-block v-if="status === 'done'">
      <f7-row>
        <f7-col>
          <weather-item 
            icon_url="static/icons/weather/wind.svg"
            :value="speed"
            title="Wind"
          />
        </f7-col>
        <f7-col>
          <weather-item 
            icon_url="static/icons/weather/drops.svg"
            :value="humidity"
            title="Humidity"
          />
        </f7-col>
        <f7-col>
          <weather-item 
            icon_url="static/icons/weather/pressure.svg"
            :value="pressure"
            title="Pressure"
          />
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
<style lang="scss">
.weather {
  &--bg-blue {
    background: #8aaded;
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
      data: state => state.data,
      status: state => state.status,
    }),
    temperature: function () {
      return this.data.main.temp;
    },
    description: function () {
      return this.data.weather[0].description;
    },
    iconUrl: function() {
      return `http://openweathermap.org/img/wn/${this.data.weather[0].icon}@2x.png`;
    },
    speed: function () {
      return `${this.data.wind.speed}m/s`;
    },
    pressure: function () {
      return `${this.data.main.pressure}hpa`;
    },
    humidity: function () {
      return `${this.data.main.humidity}%`;
    },
    dateTime: function () {
      const d = new Date(this.data.dt * 1000);
      const proDate = getPropertiesDateTime(d);

      return `${proDate.day} ${proDate.hour}:${proDate.min} ${proDate.ampm}`;
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
    this.actionGetCurrentWeather();
  }, 
  methods: {
    ...mapActions("weather", ["actionGetCurrentWeather"]),
  },
}  
</script>
