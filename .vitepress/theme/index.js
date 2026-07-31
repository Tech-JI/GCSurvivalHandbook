import DefaultTheme from "vitepress/theme-without-fonts";
import Layout from "./layout/Layout.vue";
import "./my_font.css";
import ProgramFilter from "./components/ProgramFilter.vue";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("ProgramFilter", ProgramFilter);
  },
};
