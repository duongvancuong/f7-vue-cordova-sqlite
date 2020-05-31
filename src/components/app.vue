<template>
  <f7-app :params="f7params" >
    <f7-panel left cover theme-dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Left Panel"></f7-navbar>
          <f7-block>Left panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>
    <f7-view main class="safe-areas" url="/"></f7-view>
  </f7-app>
</template>
<script>
  import { Device }  from 'framework7/framework7-lite.esm.bundle.js';
  import { mapState } from 'Vuex';

  import cordovaApp from '../js/cordova-app.js';
  import routes from '../js/routes.js';
  import Sqlite from '../store/sqlite.js';

  export default {
    data() {
      return {
        f7params: {
          id: 'io.framework7.myapp', // App bundle ID
          name: 'My App', // App name
          theme: 'auto', // Automatic theme detection
          sqlite_db: null,

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
    computed: {
      ...mapState({
        user: state => state.user,
      })
    },
    methods: { },
    mounted() {
      this.$f7ready((f7) => {
        document.addEventListener('deviceready', function() {
          this.sqlite_db = new Sqlite();
          const createTbQuery = "CREATE TABLE Todos (title, status, id)";
          this.sqlite_db.createTable(createTbQuery);
        });
        // Init cordova APIs (see cordova-app.js)
        if (Device.cordova) {
          f7.dialog.alert('Check Device');
          cordovaApp.init(f7);
        }
        // Call F7 APIs here
      });
    }
  }
</script>
