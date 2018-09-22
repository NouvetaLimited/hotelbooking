<template>
 <div id="app">
   <v-app light>
    <v-toolbar class="white elevation-14" height="90">
      <v-toolbar-side-icon>  <img src="../assets/logo2.png" alt="logo" height="60"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="links-top" flat>Hotel + Resort</v-btn>
      <v-btn class="links-top" flat>About</v-btn>
      <v-btn class="links-top" flat>Contact us</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax dark src="https://ticketsoko.com/hotel.jpg" height="380">
          <v-layout
            align-center
            justify-center
            class="white--text"
            width="100"
            align-content-space-between
          >
           
          <v-flex>
        <v-menu
          lazy
          :close-on-content-click="false"
          v-model="menu"
          transition="scale-transition"
        >
          <v-text-field
            slot="activator"
            label="Check in"
            v-model="dateto"
            prepend-icon="event"
            color="white"
            readonly
          ></v-text-field>
          <v-date-picker v-model="dateto" no-title scrollable actions>
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
              </v-card-actions>
            </template>
          </v-date-picker>
        </v-menu>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <v-menu
          lazy
          :close-on-content-click="false"
          v-model="menu2"
          transition="scale-transition"
        >
          <v-text-field
            slot="activator"
            label="Check out"
            v-model="date"
            prepend-icon="event"
            color="white"
            readonly
            class="white--text"
          ></v-text-field>
          <v-date-picker v-model="date" no-title scrollable actions>
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
              </v-card-actions>
            </template>
          </v-date-picker>
        </v-menu>
      </v-flex>
       <v-spacer></v-spacer>
       <v-flex>
         <v-select v-bind:items="adults" class="mr-5"  label="Adults"  color="white" autocomplete></v-select>
       </v-flex>

       <v-spacer></v-spacer>

       <v-flex>
         <v-select v-bind:items="children" class="mr-0"  label="Children"  color="white" autocomplete></v-select>
       </v-flex>
       
       <v-spacer></v-spacer>
       <v-flex>

        <v-btn color="primary" >
          Check Availability
        </v-btn>

      </v-flex>

          </v-layout>
        </v-parallax>
        <section>
          <v-container >
          <v-layout
          align-center
          justify-center
          class="black--text"
          width="50"
          fill-height
          column
          >
          <section>
          <v-flex>
             <v-card>
               <v-card-text>Here</v-card-text>
          </v-card>
          </v-flex>
          </section>
          <section>
            <v-layout
            row
            align-center
            justify-center >
             <v-flex>
             <v-card>
               <v-card-text>Here</v-card-text>
          </v-card>
             </v-flex>

            </v-layout>
          </section>
          </v-layout>
          </v-container>
        </section>
      </section>
      <section>
       
       

      </section>

      <v-footer class="blue darken-2"  height="70">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              <v-icon class="black--text">copyright</v-icon>
               <a class="black--text" href="https://nouveta.tech" target="_blank">Superior Hotels Kenya </a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>


    </v-content>
  </v-app>
 </div>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Superior Hotels",
      date: null,
      modal: false,
      menu: false,
      dateto: null,
      adults: [1, 2, 3, 4],
      children: [1, 2, 3, 4, 5, 6, 7],
      menu2: false
    };
  },
  methods: {}
};
</script>

<style scoped>
.links-top {
  font-size: 23px;
  font-weight: bold;
}
</style>
