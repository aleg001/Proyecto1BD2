// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1A154E",
          secondary: "#644536",
          accent: "#FBF5E6",
          bg: "#F4F4F4",
          success: "#709775",
          warning: "#644536",
        },
      },
    },
  },
});
