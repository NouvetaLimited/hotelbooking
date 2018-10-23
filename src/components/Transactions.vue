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
            <!-- summary -->
            <div>
                <h2 class="head">Transactions</h2>
            </div>
            
            <!-- table -->
            <div class="tables">
                <div>
                <v-app>
    
      <v-card>
        <v-card-title>
      Latest Guests
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
      <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.number }}</td>
        <td class="">{{ props.item.name }}</td>
        <td class="">{{ props.item.checkin }}</td>
        <td class="">{{ props.item.checkout }}</td>
        <td class="">{{ props.item.status }}</td>
        <td class="">{{ props.item.phone }}</td>
        <td class="">{{ props.item.hotel }}</td>
        <td class="">{{ props.item.roomtype }}</td>
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
    </v-card>
  </v-app>
                </div>

            </div>

        </div>
    </div>
    </div>
</template>
<script>
import Barchart from "@/components/Barchart.vue";
import Doughnut from "@/components/Doughnut.vue";

export default {
  name: "dashboard",
  components: {
    Barchart,
    Doughnut
  },
  data() {
    return {
      headers: [
        { text: "No", value: "number", align: "center", sortable: true },
        { text: "Name", value: "name", align: "center" },
        { text: "Check In", value: "checkin", align: "center" },
        { text: "Checkout", value: "checkout", align: "center" },
        { text: "Status", value: "status", align: "center" },
        { text: "Phone", value: "phone", align: "center" },
        { text: "Hotel", value: "hotel", align: "center" },
        { text: "Room type", value: "roomtype", align: "center" },
        { text: "Edit", align: "center" }
      ],
      search: "",
      desserts: [
        {
          number: 1,
          name: "Alex tito",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "paid",
          phone: "0715600582",
          roomtype: "single",
          hotel: "Hadassah Hotel"
        },
        {
          number: 2,
          name: "Brian Mituka",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "paid",
          phone: "0715600582",
          roomtype: "single",
          hotel: "Masada Hotel"
        },
        {
          number: 3,
          name: "zeed charles",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "paid",
          phone: "0715600582",
          roomtype: "single",
          hotel: "Pearl Palace Hotel"
        },
        {
          number: 4,
          name: "Kobayashi Maru",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "paid",
          phone: "0715600582",
          roomtype: "single",
          hotel: "West wood Hotel"
        },
        {
          value: false,
          number: 5,
          name: "Ahmed Ali",
          checkin: "11/5/2018",
          checkout: "11/5/2018",
          status: "paid",
          phone: "0715600582",
          roomtype: "single",
          hotel: "Sweet Lake Resort"
        }
      ]
    };
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
  cursor: pointer;
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
