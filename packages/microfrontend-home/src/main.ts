import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h: any) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object.
          // Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props

          // name: this.name,
          // mountParcel: this.mountParcel,
          // singleSpa: this.singleSpa,
        },
      });
    },
    router,
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
