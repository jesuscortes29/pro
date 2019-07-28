<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>MMC</span>
        <span class="font-weight-light">My Music Collection</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">v{{version}}</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Init/>
    </v-content>
  </v-app>
</template>

<script>
import Init from "./components/Init";
import axios from "axios";

export default {
  name: "App",
  components: {
    Init
  },
  data: () => ({
    urlBackend:
      "https://3000-b7dbd182-b3c1-450e-bbd7-982f610c13ba.ws-us0.gitpod.io",
    version: "0.0"
  }),
  mounted() {
    this.getVersion();
  },
  methods: {
    getVersion() {
      axios.get(`${this.urlBackend}/version`).then(result => {
        this.version = result.data.version;
      });
    }
  }
};
</script>
