import Layout from '~/doc-layout/src/Layout.vue';
import { registerComponents } from '@divriots/dockit-vue';

export default {
  Layout: Layout,
  enhanceApp: ({ app }) => {
    app.use(registerComponents);
  },
};
