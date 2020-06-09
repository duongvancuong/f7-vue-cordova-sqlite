<template>
  <f7-app :params="f7params" >
    <f7-panel left cover swipe>
      <f7-view>
        <f7-page class="panel-background">
          <f7-navbar title="Setting"></f7-navbar>
          <f7-block>Left panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>
    <f7-view main class="safe-areas" url="/"></f7-view>
  </f7-app>
</template>
<style>
.panel-background {
  background-color: #c349e24d;
}
  
</style>
<script>
  import { Device }  from 'framework7/framework7-lite.esm.bundle.js';

  import cordovaApp from '../js/cordova-app.js';
  import routes from '../js/routes.js';
  import Tasks from '../models/tasks.js';

  export default {
    data() {
      return {
        f7params: {
          id: 'io.framework7.myapp', // App bundle ID
          name: 'My App', // App name
          theme: 'auto', // Automatic theme detection

          // App routes
          routes: routes,

          // Register service worker
          serviceWorker: Device.cordova ? {} : {
            path: '/service-worker.js',
          },
          // Input settings
          input: {
            scrollIntoViewOnFocus: Device.cordova && !Device.electron,
            scrollIntoViewCentered: Device.cordova && !Device.electron,
          },
          // Cordova Statusbar settings
          statusbar: {
            iosOverlaysWebView: true,
            androidOverlaysWebView: false,
          },
        },
      };
    },
    mounted() {
      this.$f7ready((f7) => {
        // f7.utils.colorThemeCSSProperties('#892eafbf');
        document.addEventListener('deviceready', function() {
          const _taskModel = new Tasks();
          _taskModel.createTable();
        });
        // Init cordova APIs (see cordova-app.js)
        if (Device.cordova) {
          cordovaApp.init(f7);
          screen.orientation.lock('portrait');
        }
        // Call F7 APIs here
      });
    }
  }
</script>
