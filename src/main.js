import { createApp } from "vue";
import router from "./router";

// Root component
import App from "./App.vue";

// Tailwind CSS
import "./tailwind.css";

// Vue Instance Start
createApp(App).use(router).mount("#app");
