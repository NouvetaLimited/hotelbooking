<template>
  <div class="main">
    <!-- navigation -->
    <div class="navigation">
      <div class="logo">
        <img class="logo-top" src="https://nouveta.co.ke/nouvetamain.png" alt="logo">

      </div>

      <div class="profile">
        <img class="logo-top" src="https://nouveta.co.ke/nouvetamain.png" alt="logo">
      </div>

    </div>

    <!-- sidebar and content -->
    <div class="navbody">

      <!-- sidebar -->
      <div class="sidebar">
        <ul class="lists">
                   <router-link tag="li" to="/dashboard">
                Dashboard
                 </router-link> 
                  <router-link tag="li" to="/addhotel">
                Add Hotel
                 </router-link>
                   <router-link tag="li" to="/adduser">
                Add User
                 </router-link> 
                 <router-link tag="li" to="/roomtype">
                Room Type
                 </router-link> 
                  <router-link tag="li" to="/rooms">
                Rooms
                 </router-link> 
                 <router-link tag="li" to="/bookings">
                Bookings
                 </router-link>
               <router-link tag="li" to="/transactions">
                Transactions
                 </router-link> 
            </ul>

      </div>

      <!-- main content -->

      <div class="content">
        <div class="head">
          <h2>Bookings</h2>
        </div>
        <!-- table -->
        <div class="tables">
          <div>
            <v-app>
              <v-stepper v-model="e1">
                <v-stepper-header>
                  <template v-for="n in steps">
                    <v-stepper-step :complete="e1 > n" :key="`${n}-step`" :step="n" editable>
                      <!-- Click to edit -->
                    </v-stepper-step>

                    <!-- <v-divider v-if="n !== steps" :key="n"></v-divider> -->
                  </template>
                </v-stepper-header>

                <v-stepper-items>
                  <v-stepper-content step="1">
                    <v-card>
                      <v-card-title>
                        <span class="headline">New Booking</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                              <v-text-field v-model="name" label="Name"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                              <v-text-field v-model="email" label="Email"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                              <v-menu ref="menu" :close-on-content-click="true" v-model="menu" :nudge-right="40" lazy
                                transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                                <v-text-field slot="activator" prepend-icon="event" v-model="checkin" label="Check in"></v-text-field>
                                <v-date-picker v-model="checkin" no-title @input="menu = false"></v-date-picker>
                              </v-menu>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                              <v-menu ref="menu3" :close-on-content-click="true" v-model="menu3" :nudge-right="40" lazy
                                transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                                <v-text-field slot="activator" prepend-icon="event" v-model="checkout" label="Check out"></v-text-field>
                                <v-date-picker v-model="checkout" no-title @input="menu3 = false"></v-date-picker>
                              </v-menu>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                              <v-text-field v-model="numberpeople" label="Occupancy"></v-text-field>
                            </v-flex>
                             <v-flex xs12 sm6 md4>
                              <v-select :items="hotels" v-model="selectedhotel" item-text="name" item-value="hotel_id" @change="getHotelRooms" label="Hotel"></v-select>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                              <v-select :items="roomtypes" item-text="room_number" item-value="charge" v-model="selectedroomtype" label="Room Type"></v-select>
                            </v-flex>
                           
                             
                          
                          </v-layout>
                           <v-switch label="Additional booking" color="red" value="red" @change="addStep" v-model="checker"
                                hide-details></v-switch>
                        </v-container>
                        <!-- here -->
                      </v-card-text>
                    </v-card>
                    <v-btn color="primary" @click="nextStep()">
                      Continue
                    </v-btn>
                  </v-stepper-content>

                  <v-stepper-content v-if="checker" step="2">
                    <v-card>
                      <v-card-title>
                        <span class="headline">Additional Booking</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                              <v-menu ref="menu" :close-on-content-click="true" v-model="menu5" :nudge-right="40" lazy
                                transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                                <v-text-field slot="activator" prepend-icon="event" v-model="additionalcheckin" label="Check in"></v-text-field>
                                <v-date-picker v-model="additionalcheckin" no-title @input="menu5 = false"></v-date-picker>
                              </v-menu>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                              <v-menu ref="menu" :close-on-content-click="true" v-model="menu4" :nudge-right="40" lazy
                                transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                                <v-text-field slot="activator" prepend-icon="event" v-model="additionalcheckout" label="Check out"></v-text-field>
                                <v-date-picker v-model="additionalcheckout" no-title @input="menu4 = false"></v-date-picker>
                              </v-menu>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                              <v-text-field v-model="numberpeople" label="Occupancy"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                              <v-select :items="roomtypes" item-text="name" item-value="charge" v-model="roomtypeadditional" label="Room Type"></v-select>
                            </v-flex>
                          </v-layout>
                        </v-container>
                        <!-- here -->
                      </v-card-text>
                    </v-card>

                    <v-btn color="primary" @click="nextStep()">
                      Continue
                    </v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="3">
                    <v-card flat>
                      <v-card-title>
                       <span class="headline">Payments</span>
                      </v-card-title>
                      <v-tabs
                        fixed-tabs>
                        <v-tab @click="useMpesa">
                          Mpesa
                        </v-tab>
                        <v-tab @click="useCard">
                          Card
                        </v-tab>

                        <v-tab-item fixed-tabs>
                             <v-form ref="form" v-model="validmpesa" lazy-validation>
                                 <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm6 centered class="ml-5 pl-5">
          <v-text-field
      v-model="mpesaphonenumber"
      :rules="[() => !!mpesaphonenumber || 'Phone Number is required']"
      :counter="10"
      label="Phone Number"
      required
    ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
   
  </v-form>
                          
                        </v-tab-item>
                        <v-tab-item>
                         <v-form ref="cardform" v-model="valid" lazy-validation>
                                 <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm6 centered>
          <v-text-field
      v-model="cardname"
      :rules="[() => !!cardname || 'Name is required']"
      label="Name On Card"
      required
    ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 centered>
          <v-text-field
      v-model="phonenumber"
      :counter="10"
      :rules="[() => !!phonenumber || 'Phone Number is required']"
      label="Phone Number"
      required
    ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 centered>
          <v-text-field
      v-model="cardnumber"
      :rules="[() => !!cardnumber || 'Card Number is required']"
      label="Card Number"
      required
    ></v-text-field>
        </v-flex>
         <v-flex xs12 sm6 centered>
          <v-text-field
      v-model="cardexpiry"
      :rules="[() => !!cvc || 'Card expiry is required']"
      :counter="3"
      label="Expiry Year/Month"
      required
    ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 centered>
          <v-text-field
      v-model="cvc"
      :rules="[() => !!cvc || 'cvc is required']"
      :counter="3"
      label="CVC"
      required
    ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
   
  </v-form>
                        </v-tab-item>
                      </v-tabs>
                    </v-card>



                    <v-btn color="primary" v-if="mpesapayment && this.e1 >= 2" :disabled="!validmpesa" @click="payMpesa()">
                      Book
                    </v-btn>
                    <v-btn color="primary" v-if="cardpayment && this.e1 >= 2" :disabled="!valid" @click="payCard()">
                      Book
                    </v-btn>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
              <v-toolbar flat color="white" class="elevation-1 mt-5">
                <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>

                <v-spacer></v-spacer>

                <!-- //edit Modal -->
                <v-dialog v-model="dialog" max-width="600px">
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6 md4>
                             <v-menu ref="menu6" :close-on-content-click="true" v-model="menu6" :nudge-right="40" lazy
                                transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                                <v-text-field slot="activator" prepend-icon="event" v-model="editedItem.checkin" label="Check in"></v-text-field>
                                <v-date-picker v-model="editedItem.checkin" no-title @input="menu6 = false"></v-date-picker>
                              </v-menu>
                          </v-flex>
                          <v-flex xs12 sm6 md4>
                           <v-menu ref="menu7" :close-on-content-click="true" v-model="menu7" :nudge-right="40" lazy
                                transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                                <v-text-field slot="activator" prepend-icon="event" v-model="editedItem.checkout" label="Check out"></v-text-field>
                                <v-date-picker v-model="editedItem.checkin" no-title @input="menu7 = false"></v-date-picker>
                              </v-menu>
                          </v-flex>
                          <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.numberpeople" label="Occupancy"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6 md4>
                            <v-select :items="roomtypes" item-text="name" item-value="charge" v-model="editedItem.roomtype" label="Room Type"></v-select>
                          </v-flex>
                        </v-layout>
                      </v-container>
                      <!-- here -->
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                      <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!-- edit Modal -->
              </v-toolbar>


              <!-- Bookings table -->
              <v-data-table :headers="headers" :items="desserts" :search="search" class="elevation-5">
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.bookingref }}</td>
                  <td class="">{{ props.item.name }}</td>
                  <td class="">{{ props.item.email }}</td>
                  <td class="">{{ props.item.checkin }}</td>
                  <td class="">{{ props.item.checkout }}</td>
                  <td class="">{{ props.item.amount }}</td>
                  <td class="">{{ props.item.roomtype }}</td>
                  <td class="">{{ props.item.numberpeople }}</td>
                  <td class="justify-center layout px-0">
                    <v-icon small class="mr-2" @click="editItem(props.item)">
                      edit
                    </v-icon>
                    <v-icon small @click="deleteItem(props.item)">
                      delete
                    </v-icon>
                  </td>
                </template>
                <template slot="no-data">
                  <v-btn color="primary" @click="initialize">Reset</v-btn>
                </template>
              </v-data-table>
              <!-- Bookings table -->
            </v-app>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "allbookings",
  data() {
    return {
      roomtypeadditional: null,
      selectedroomtype: null,
      mpesaphonenumber: "",
      mpesapayment: true,
      cardpayment: false,
      search: "",
      dialog: false,
      menu1: false,
      menu2: false,
      date: null,
      menu: false,
      menu3: false,
      menu4: false,
      menu5: false,
      menu6: false,
      menu7: false,
      menu8: false,
      email: "",
      roomtype: "",
      checkin: "",
      checkout: "",
      numberpeople: "",
      e1: 1,
      steps: 2,
      checker: false,
      additional: false,
      additionalcheckin: "",
      additionalcheckout: "",
      active: null,
      valid: false,
      validmpesa: true,
      cvc: "",
      phonenumber: "",
      cardname: "",
      cardnumber: "",
      hotels: [],
      cardexpiry: "",
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      headers: [
        {
          text: "Booking ref",
          value: "bookingref",
          align: "center"
        },
        {
          text: "Name",
          value: "name",
          align: "center"
        },
        {
          text: "Email",
          value: "email",
          align: "center"
        },
        {
          text: "Check In",
          value: "checkin",
          align: "center"
        },
        {
          text: "Checkout",
          value: "checkout",
          align: "center"
        },
        {
          text: "Amount",
          value: "amount",
          align: "center"
        },
        {
          text: "Room Type",
          value: "roomtype",
          align: "center"
        },
        {
          text: "Occupancy",
          value: "numberpeople",
          align: "center"
        },
        {
          text: "Edit",
          value: null,
          align: "center"
        }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        bookingref: "#23425",
        checkin: "",
        checkout: "",
        amount: "",
        occupation: "",
        numberpeople: "",
        name: "",
        email: "",
        roomtype: null
      },
      selectedhotel: null,
      defaultItem: {
        bookingref: "#23425",
        checkin: "",
        checkout: "",
        amount: "",
        occupation: "",
        numberpeople: "",
        name: "",
        email: "",
        roomtype: ""
      },
      roomtypes: [],
      additionalbooking: false
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add room booking" : "Edit Booking";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
    this.getHotel();
  },

  methods: {
    getHotelRooms() {
      axios
        .get(`http://localhost:3000/hotels/${this.selectedhotel}/rooms`)
        .then(result => {
          console.log("HOTELS ROOMS IN HOTEL", result.data);
          result.data.forEach(element => {
            this.roomtypes.push(element);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    getHotel() {
      axios
        .get("http://localhost:3000/groups/1/hotels")
        .then(result => {
          result.data.forEach(element => {
            this.hotels.push(element);
            // console.log("HOTELS", this.hotels)
          });
          // console.log(result.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    useCard() {
      this.cardpayment = true;
      this.mpesapayment = false;
    },
    useMpesa() {
      this.cardpayment = false;
      this.mpesapayment = true;
    },
    payCard() {
      if (this.$refs.cardform.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        });
      }

      console.log("I am using cards", "Mpesa Status:", this.mpesapayment);
    },
    payMpesa() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        });
      }

      console.log("I am using Mpesa", "Card Status:", this.cardpayment);
    },
    onInput(val) {
      this.steps = parseInt(val);
    },
    addStep() {
      if (this.checker) {
        this.steps = 3;
      } else {
        this.steps = 2;
      }
    },
    Book() {},
    clear() {
      this.$refs.form.reset();
    },
    nextStep() {
      if (this.e1 === this.steps) {
        this.e1 = 1;
      } else if (!this.checker) {
        this.e1 += 2;
      } else if (!this.checker && this.el === this.steps) {
        this.e1 += 1;
      } else {
        this.e1 += 1;
      }
    },
    initialize() {
      this.desserts = [
        {
          bookingref: "#23425",
          checkin: "11/12/2018",
          checkout: "1/1/2019",
          amount: "200",
          occupation: "chef",
          numberpeople: "5",
          name: "brian mituka",
          email: "mitukab@gmail.com",
          roomtype: "Deluxe"
        },
        {
          bookingref: "#23425",
          checkin: "11/12/2018",
          checkout: "1/1/2019",
          amount: "200",
          occupation: "chef",
          numberpeople: "5",
          name: "brian mituka",
          email: "mitukab@gmail.com",
          roomtype: "Deluxe"
        },
        {
          bookingref: "#23425",
          checkin: "11/12/2018",
          checkout: "1/1/2019",
          amount: "200",
          occupation: "chef",
          numberpeople: "5",
          name: "brian mituka",
          email: "mitukab@gmail.com",
          roomtype: "Presidential"
        },
        {
          bookingref: "#23425",
          checkin: "11/12/2018",
          checkout: "1/1/2019",
          amount: "200",
          occupation: "chef",
          numberpeople: "5",
          name: "brian mituka",
          email: "mitukab@gmail.com",
          roomtype: "Deluxe"
        },
        {
          bookingref: "#23425",
          checkin: "11/12/2018",
          checkout: "1/1/2019",
          amount: "200",
          occupation: "chef",
          numberpeople: "5",
          name: "brian mituka",
          email: "mitukab@gmail.com",
          roomtype: "Presidential"
        },
        {
          bookingref: "#23425",
          checkin: "11/12/2018",
          checkout: "1/1/2019",
          amount: "200",
          occupation: "chef",
          numberpeople: "5",
          name: "brian mituka",
          roomtype: "Presidential",
          email: "mitukab@gmail.com"
        },
        {
          bookingref: "#23425",
          checkin: "11/12/2018",
          checkout: "1/1/2019",
          amount: "200",
          occupation: "chef",
          numberpeople: "5",
          name: "brian mituka",
          roomtype: "Presidential",
          email: "mitukab@gmail.com"
        },
        {
          bookingref: "#23425",
          checkin: "11/12/2018",
          checkout: "1/1/2019",
          amount: "200",
          occupation: "chef",
          numberpeople: "5",
          name: "brian mituka",
          roomtype: "Presidential",
          email: "mitukab@gmail.com"
        },
        {
          bookingref: "#23425",
          checkin: "11/12/2018",
          checkout: "1/1/2019",
          amount: "200",
          occupation: "chef",
          numberpeople: "5",
          name: "brian mituka",
          roomtype: "Presidential",
          email: "mitukab@gmail.com"
        },
        {
          bookingref: "#23425",
          checkin: "11/12/2018",
          checkout: "1/1/2019",
          amount: "200",
          occupation: "chef",
          numberpeople: "5",
          name: "brian mituka",
          roomtype: "Presidential",
          email: "mitukab@gmail.com"
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Dosis:400,500,600,700,800");

.head {
  display: flex;
}

.redish {
  background-color: #ff823c;
}

.dark-red {
  background-color: #c12e41;
}

.yellowish {
  background-color: #c8b521;
}

.application--wrap {
  min-height: unset;
}

.charts {
  display: flex;
  justify-content: space-around;
  margin-top: 70px;
  border-top: 3px solid #dcdee1;
  padding-top: 25px;
  border-bottom: 3px solid #dcdee1;
  padding-bottom: 10px;
}

.pie-chart {
  border-right: 3px solid #dcdee1;
  padding-right: 150px;
}

body {
  min-height: 100vh;
  font-family: Dosis, sans-serif;
  font-size: 21px;
  line-height: 1.42857143;
  background-color: #f8f8f8;
  font-weight: 700;
  background-color: #343a44;
}

.card-list {
  display: flex;
  justify-content: space-around;
}

.card-list-item {
  display: flex;
  border-radius: 32px;
  padding-right: 34px;
  padding-left: 15px;
  font-size: 29px;
  font-weight: 50;
}

.card-title {
  padding-top: 5px;
}

.card-info {
  display: flex;
  border-right: 3px solid #fff;
  padding-right: 6px;
  margin: 5px;
  align-items: center;
}

.card-icon {
  display: flex;
}

/* .card-top{
display: flex;
    border-right: 7px solid #fff;
} */
.lists {
  list-style: none;
}

.logo-top {
  height: 75px;
}

.main {
  flex-direction: column;
}

.navbody {
  min-height: 100vh;
}

.sidebar {
  color: #aeb1b3;
}

.navigation {
  flex-direction: row;
  justify-content: space-between;
  background-color: #f8f8f8;
  margin-bottom: 5px;
}

.content {
  width: 100%;
  padding: 20px;
  background-color: #f8f8f8;
}

.sidebar {
  width: 20%;
}

.summary,
.statistics,
.navigation,
.main,
.navbody {
  display: flex;
}

.item,
.graph1 {
  flex-grow: 2;
}

.logo {
  /* border-right: 7px solid grey; */
  width: 16.3%;
}

.item-heading {
  background-color: orange;
  width: 100%;
  text-align: center;
}

.uploady {
  display: flex;
  justify-content: flex-end;
}

.import-summary {
  margin-top: 30px;
}

.import-upload {
  margin-bottom: 30px;
}

.file-input {
  border: dashed 1px blue;
  padding: 2px;
  text-align: center;
  margin-right: 10px;
  padding-bottom: 10px;
  height: 120%;
}

input[type="file"] {
  padding-top: 40px;
}
</style>
