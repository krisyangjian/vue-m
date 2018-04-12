import Vue from 'vue';
import Router from 'vue-router';
import mA from './m.a.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/a', component: mA
    }
  ]
});

export default router;
