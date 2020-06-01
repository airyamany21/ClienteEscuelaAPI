<template>
  <v-app>
    <v-navigation-drawer app  v-model="drawer">
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
             Web Rest
            </v-list-item-title>
            <v-list-item-subtitle>
              EscuelaAPI
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item  color="#18ca15" v-for="item in items" :key="item.title"  link route :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar
      app
      color="green"
      dark
      hide-on-scroll
      prominent
      scroll-target="#scrolling-techniques-3"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <img :src="uabc.png"> -->
      <img src="./assets/uabc2.png">
      <!-- <v-toolbar-title>Universidad Autonoma De Baja California</v-toolbar-title> -->

      <!-- <v-spacer></v-spacer> -->

    </v-app-bar>
      
    <!-- Sizes your content based upon application components -->
    <v-content>
        <img src="./assets/white1.png">
       
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
   
     <!-- <v-spacer></v-spacer> -->
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [
      { title: "Estudiantes", icon: "mdi-account-group" , route: "/estudiantes"},
      { title: "Cursos", icon: "mdi-bookshelf" , route: "/cursos" },
    ],
    drawer: false,
  }),
};
</script>

