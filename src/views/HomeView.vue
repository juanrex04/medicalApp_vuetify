<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-layout row>
      <v-flex md3>
        <v-app :style="{ background: $vuetify.theme.themes.light.background }">
          <v-container>
            <!--Icon and card to organize the basic user's information-->
            <v-flex>
              <v-card class="ma-5 text-center mt-8" shaped elevation="10">
                <v-avatar class="mt-n7" size="60" elevation="10">
                  <img src="../assets/logo.svg" alt="">
                </v-avatar>
                <v-card-title class="layout justify-center">Juan Restrepo</v-card-title>
                <v-card-subtitle class="layout justify-center">25 years old, Santiago de Cali</v-card-subtitle>
                <v-list class="mt-n5">
                  <v-list-item>
                    <v-list-item-title class="cyan--text text--darken-1">Blood</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">Height</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">Weigth</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-subtitle>O+</v-list-item-subtitle>
                    <v-list-item-subtitle>171 cm</v-list-item-subtitle>
                    <v-list-item-subtitle>70 kg</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>

            <!--a-->
            <v-flex>
              <v-card class="ma-5 mt-n2" shaped elevation="10">
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar size="10" color="cyan darken-1"></v-list-item-avatar>
                    <v-list-title class="ml-n2">Kognum</v-list-title>
                    <v-list-subtitle>10 mg</v-list-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="cyan--text text--darken-1">Mon</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">Wed</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">Fri</v-list-item-title>
                    <v-list-item-title class="cyan--text text--darken-1">Sun</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-subtitle>2 times in a day before food</v-list-subtitle>
                  </v-list-item>
                  <v-divider></v-divider>
                </v-list>
              </v-card>
            </v-flex>
          </v-container>
        </v-app>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#f0f', '#ff0'],
  ['#f72041', '#ffd200', '#1feaea']
]

export default {
  data: () => ({
    width: 2,
    radious: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    arrayEvents: null,
    date2: new Date().toString().substring(0, 10),
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toString().substring(0, 10)
    })
  },
  methods: {
    functionEvents(date) {
      const [, , day] = date.split('-')
      if ([12, 17, 28].includes(parseInt(day, 10))) return true
      if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
    },
  }
}
</script>

<style scoped>
.rounded {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
</style>