<template>
  <f7-page>
    <task title="Title Task Here" subtitle="Subtitle Here" status="doing" />
    <weather-card 
      icon_url="static/icons/weather/cloud.svg"
      temp="305.15"
      desc="Mây thưa"
    />
    <f7-block>
      <f7-row>
        <f7-col>
          <weather-item 
            icon_url="static/icons/weather/wind.svg"
            value="100 Km/h"
            title="Wind"
          />
        </f7-col>
        <f7-col>
          <weather-item 
            icon_url="static/icons/weather/drops.svg"
            value="75 %"
            title="Humidity"
          />
        </f7-col>
        <f7-col>
          <weather-item 
            icon_url="static/icons/weather/pressure.svg"
            value="1025 hpa"
            title="Pressure"
          />
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
<style lang="scss">
</style>
<script>
import { mapState, mapActions } from 'Vuex';

import Task from '../components/task.vue';
import WeatherCard from '../components/weather_card.vue';
import WeatherItem from '../components/weather_item.vue';

export default { 
  components: {
    Task,
    WeatherCard,
    WeatherItem,
  },
  mounted() {
    this.actionGetCurrentWeather();
  }, 
  methods: {
    ...mapActions("weather", ["actionGetCurrentWeather"]),
  },
}  
</script>
