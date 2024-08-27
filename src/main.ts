import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

import router from "./routers";

createApp(App).use(router).use(Vue3Toastify, {
    autoClose: 3000,
  } as ToastContainerOptions).mount("#app");
