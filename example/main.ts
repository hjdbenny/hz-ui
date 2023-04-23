import { createApp } from 'vue';
import App from './App.vue';
import hz from '@hz/components';
const app = createApp(App);
app.use(hz as any);

app.mount('#app');
