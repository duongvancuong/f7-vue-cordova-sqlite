# My App

## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "/Users/cuongduong/Project/Personal/learn_vue",
  "type": [
    "web",
    "pwa",
    "cordova"
  ],
  "name": "My App",
  "pkg": "io.framework7.myapp",
  "framework": "vue",
  "template": "single-view",
  "cssPreProcessor": "scss",
  "bundler": "webpack",
  "cordova": {
    "folder": "cordova",
    "platforms": [
      "ios"
    ],
    "plugins": [
      "cordova-plugin-statusbar",
      "cordova-plugin-keyboard",
      "cordova-plugin-splashscreen",
      "cordova-plugin-wkwebview-file-xhr"
    ]
  },
  "webpack": {
    "developmentSourceMap": true,
    "productionSourceMap": true,
    "hashAssets": false,
    "preserveAssetsPaths": false,
    "inlineAssets": true
  },
  "theming": {
    "customColor": false,
    "color": "#007aff",
    "darkTheme": false,
    "iconFonts": true,
    "fillBars": false
  },
  "customBuild": false
}
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build-dev` - build web app using development mode (faster build without minification and optimization)
* 🔧 `build-prod` - build web app for production
* 📱 `build-dev-cordova` - build cordova app using development mode (faster build without minification and optimization)
* 📱 `build-prod-cordova` - build cordova app

## cordova-sqlite-storage
[Docs](https://github.com/xpbrew/cordova-sqlite-storage)

## State management architecture (Vuex + Sqlite)
![Untitled Diagram (1)](https://user-images.githubusercontent.com/19904857/83619248-cfab6000-a5b5-11ea-960b-dcdd70f33a52.png)

The main flow of this architecture is described by me as the diagram above (I draw a little bad). Specifically it will be as follows:
- **(1)**: The Vue app performs an [action](https://vuex.vuejs.org/guide/actions.html)
- **(2)**: The action will make a sqlite service reference to interact with sqlite at steps **(3)** and **(4)**
- **(5)**: The **action** will receive data from **SQLite Service**
- **(6), (7)**: The [Mutaion](https://vuex.vuejs.org/guide/mutations.html) receive data and update state
- **(8)**: The vue app will get the new state and re-render the view

## WebPack

There is a webpack bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Webpack config located in `build/webpack.config.js`.

Webpack has specific way of handling static assets (CSS files, images, audios). You can learn more about correct way of doing things on [official webpack documentation](https://webpack.js.org/guides/asset-management/).

## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.

## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.
## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)
* [Framework7 Vue Documentation](https://framework7.io/vue/)


* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on patreon:
https://patreon.com/vladimirkharlampidi
