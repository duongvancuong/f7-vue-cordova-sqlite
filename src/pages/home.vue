<template>
  <f7-page class="background-pink" name="home">
    <f7-navbar :sliding="false">
      <f7-nav-left>
        <f7-link 
          icon-ios="f7:menu" 
          icon-aurora="f7:menu" 
          icon-md="material:menu"
          panel-open="left" />
      </f7-nav-left>
    </f7-navbar>
    <f7-block-title text-color="white">Block title</f7-block-title>
    <f7-block text-color="white">
      <p>Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. 
      </p>
    </f7-block>
    <f7-block>
      <f7-row>
        <f7-col class="action" @click="todosPage">
          <div class="display-flex flex-direction-column justify-content-center">
            <img class="icon align-self-center" src="static/icons/diary.svg" width="50%"/>
            <div class="align-self-center">
              <p class="text">Todos</p> 
            </div>
          </div>
        </f7-col>
        <f7-col class="action">
          <div class="display-flex flex-direction-column justify-content-center">
            <img class="icon align-self-center" src="static/icons/cloudy.svg" width="50%"/>
            <div class="align-self-center">
              <p class="text">Weather</p> 
            </div>
          </div>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-block>
      <f7-row>
        <f7-col class="action">
          <div class="display-flex flex-direction-column justify-content-center">
            <img class="icon align-self-center" src="static/icons/diary.svg" width="50%"/>
            <div class="align-self-center">
              <p class="text">Todos</p> 
            </div>
          </div>
        </f7-col>
        <f7-col class="action">
          <div class="display-flex flex-direction-column justify-content-center">
            <img class="icon align-self-center" src="static/icons/diary.svg" width="50%"/>
            <div class="align-self-center">
              <p class="text">Todos</p> 
            </div>
          </div>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
<style lang="scss">
.background-pink {
  background-color: #b468e78c;
}
.text{
  color: white;
  font-size: medium;
  font-family: monospace;
  font-weight: bolder;
}
.icon {
  margin-top: 15px;
}
.action {
  height: 150px;
  border-radius: 15px;
  background: #2725286b;
}
</style>
<script>
export default {
  methods: {
    todosPage() {
      this.$f7router.navigate('/todos/');
    }
  },
}  
</script>
