<template>
    <div class="main">
        <!-- navigation -->
        <div class="navigation">
            <div class="logo">
                <img class="logo-top" src="https://nouveta.co.ke/nouvetamain.png" alt="logo" >

            </div>

            <div class="profile">
                    <img class="logo-top" src="https://nouveta.co.ke/nouvetamain.png" alt="logo" >
            </div>

        </div>
    
        <!-- sidebar and content -->
        <div class="navbody">

        <!-- sidebar -->
        <div class="sidebar">
            <ul class="lists">
                <li>Dashboard</li>
                <li>Bookings</li>
                <li>Rooms</li>
                <li>Reports</li>
            </ul>

        </div>

        <!-- main content -->
          
        <div class="content">
            <div class="head">
                <h2>All Bookings</h2>                      
            </div>
            <!-- table -->
            <div class="tables">
                <div>
                <v-app>
                    <v-toolbar flat color="white">
     
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2">New Booking</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Guest name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.checkin" label="Check in"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.checkout" label="Check out"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.status" label="Status"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.roomtype" label="Room type"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
                <v-data-table
      :headers="headers"
      :items="desserts"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.number }}</td>
        <td class="">{{ props.item.name }}</td>
        <td class="">{{ props.item.checkin }}</td>
        <td class="">{{ props.item.checkout }}</td>
        <td class="">{{ props.item.status }}</td>
        <td class="">{{ props.item.phone }}</td>
        <td class="">{{ props.item.email }}</td>
        <td class="">{{ props.item.roomtype }}</td>
         <td class="">{{ props.item.payment }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-app>
                </div>

            </div>

        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: "allbookings",
  data() {
    return {
      dialog: false,
      headers: [
        { text: "No", value: "number", align: "center" },
        { text: "Name", value: "name", align: "center" },
        { text: "Check In", value: "checkin", align: "center" },
        { text: "Checkout", value: "checkout", align: "center" },
        { text: "Status", value: "status", align: "center" },
        { text: "Phone", value: "phone", align: "center" },
        { text: "Email", value: "email", align: "center" },
        { text: "Room type", value: "roomtype", align: "center" },
        { text: "Payment", value: "payment", align: "center" },
        { text: "Edit", value: null, align: "center" }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        number: 1,
        name: "",
        checkin: "",
        checkout: "",
        status: "",
        phone: "",
        roomtype: "",
        email: "",
        payment: ""
      },
      defaultItem: {
        number: 1,
        name: "",
        checkin: "",
        checkout: "",
        status: "",
        phone: "",
        roomtype: "",
        email: "",
        payment: ""
      }
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
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          number: 1,
          name: "Alex tito",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "checked in",
          phone: "0715600582",
          roomtype: "single",
          email: "brian@nouveta.tech",
          payment: "paid"
        },
        {
          number: 2,
          name: "Alex tito",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "checked in",
          phone: "0715600582",
          roomtype: "single",
          email: "brian@nouveta.tech",
          payment: "paid"
        },
        {
          number: 3,
          name: "Alex tito",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "checked in",
          phone: "0715600582",
          roomtype: "single",
          email: "brian@nouveta.tech",
          payment: "paid"
        },
        {
          number: 4,
          name: "Alex tito",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "checked in",
          phone: "0715600582",
          roomtype: "single",
          email: "brian@nouveta.tech",
          payment: "paid"
        },
        {
          number: 5,
          name: "Alex tito",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "checked in",
          phone: "0715600582",
          roomtype: "single",
          email: "brian@nouveta.tech",
          payment: "paid"
        },
        {
          number: 6,
          name: "Alex tito",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "checked in",
          phone: "0715600582",
          roomtype: "single",
          email: "brian@nouveta.tech",
          payment: "paid"
        },
        {
          number: 7,
          name: "Alex tito",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "checked in",
          phone: "0715600582",
          roomtype: "single",
          email: "brian@nouveta.tech",
          payment: "paid"
        },
        {
          number: 8,
          name: "Alex tito",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "checked in",
          phone: "0715600582",
          roomtype: "single",
          email: "brian@nouveta.tech",
          payment: "paid"
        },
        {
          number: 9,
          name: "Alex tito",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "checked in",
          phone: "0715600582",
          roomtype: "single",
          email: "brian@nouveta.tech",
          payment: "paid"
        },
        {
          number: 10,
          name: "Alex tito",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "checked in",
          phone: "0715600582",
          roomtype: "single",
          email: "brian@nouveta.tech",
          payment: "paid"
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
