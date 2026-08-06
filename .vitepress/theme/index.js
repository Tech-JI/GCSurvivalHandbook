import DefaultTheme from "vitepress/theme-without-fonts";
import "./my_font.css";
import ProgramFilter from "./components/ProgramFilter.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ProgramFilter", ProgramFilter);
  },
};
