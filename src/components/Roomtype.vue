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
        <img src="" alt="">
    
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
                <h2>Room types</h2>                      
            </div>
            <v-card>
          <v-card-title>
            <span class="headline">Add Room Type</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
               <v-form ref="form" v-model="valid">
        <v-alert
      :value="true"
      type="error"
      v-if="err"
      dismissible
    >
      An error occured
    </v-alert>
   <v-alert
      :value="true"
      type="success"
      v-if="success"
      dismissible
    >
      Room type successfully created
    </v-alert>
              <v-layout wrap>
               
                <v-flex xs12 sm6 md4>
                  <v-text-field @click='pickFile' prepend-icon='attach_file'   v-model="img" label="Select image"></v-text-field>
                  <input
						type="file"
						style="display: none"
						ref="image"
						accept="image/*"
						@change="onFilePicked"
					>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field 
                  v-model="name" 
                  label="Name"
                  :rules="[v => !!v || 'name is required']"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select 
                  :items="hotels"
                  :rules="[v => !!v || 'Hotel is required']"  
                  label="Hotel"
                  item-text="name"
                  item-value="hotel_id"
                  v-model="selectedhotel"
            ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="charge" 
                  :rules="[v => !!v || 'Charge is required']"
                  label="Charge"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="occupancy"
                   label="Occupancy"
                   :rules="[v => !!v || 'Occupancy is required']"
                   ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="beds"
                   label="Beds"
                   :rules="[v => !!v || 'beds is required']"
                   ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="baths" 
                  :rules="[v => !!v || 'Baths is required']"
                  label="Baths"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="description"
                  :rules="[v => !!v || 'Description is required']"
                   label="Description"></v-text-field>
                </v-flex>
               
              </v-layout>
               </v-form>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" :disabled="!valid" @click="addRoomType">Add</v-btn>
          </v-card-actions>
        </v-card>
            <!-- table -->
            <div class="tables">
                <div>
                <v-app>
    <v-toolbar flat color="white" class=" elevation-2 mt-5">
      
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
     
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field @click='pickFile' prepend-icon='attach_file'   v-model="editedItem.img" label="Select image"></v-text-field>
                  <input
						type="file"
						style="display: none"
						ref="image"
						accept="image/*"
						@change="onFilePicked"
					>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.charge" label="Charge"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.occupancy" label="Occupancy"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.beds" label="Beds"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.baths" label="Baths"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
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
      :items="roomtypes"
      :search="search"
      class="elevation-1 "
    >
   
      <template slot="items" slot-scope="props">
        <td > <img :src="props.item.image" alt="" height="50px"></td>
        <td class="">{{ props.item.name }}</td>
        <td class="">{{ props.item.charge }}</td>
        <td class="">{{ props.item.occupancy }}</td>
        <td class="">{{ props.item.beds }}</td>
        <td class="">{{ props.item.baths }}</td>
        <td class="">{{ props.item.description }}</td>
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
       No data available
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
import axios from "axios";
export default {
  name: "allbookings",
  data() {
    return {
      dialog: false,
      headers: [
        { text: "Image", value: "image", align: "center" },
        { text: "Name", value: "name", align: "center" },
        { text: "Charge", value: "charge", align: "center" },
        { text: "Occupancy", value: "occupancy", align: "center" },
        { text: "Beds", value: "beds", align: "center" },
        { text: "Baths", value: "baths", align: "center" },
        { text: "Description", value: "description", align: "center" },
        { text: "Edit", value: null, align: "center" }
      ],
      roomtypes: [],
      valid: true,
      name: "",
      charge: "",
      baths: "",
      occupancy: "",
      beds: "",
      description: "",
      img: "",
      editedIndex: -1,
      editedItem: {
        image: "",
        name: "",
        charge: "",
        occupancy: "",
        beds: "",
        baths: "",
        description: ""
      },
      defaultItem: {
        image: "",
        name: "",
        charge: "",
        occupancy: "",
        beds: "",
        baths: "",
        description: ""
      },
      search: "",
      hotels: [],
      selectedhotel: null,
      success: false,
      err: false
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add room type" : "Edit room type";
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
    this.getRoomTypes();
  },

  methods: {
    getRoomTypes() {
      axios
        .get("http://localhost:3000/roomtypes")
        .then(result => {
          result.data.forEach(element => {
            this.roomtypes.push(element);
          });

          console.log("ROOMTYPES", result.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addRoomType() {
      console.log(this.selectedhotel);
      if (this.$refs.form.validate()) {
        axios
          .post(
            `http://localhost:3000/hotels/${
              this.selectedhotel
            }/room_types?name=${this.name}&charge=${this.charge}&baths=${
              this.baths
            }&description=${this.description}&occupancy=${
              this.occupancy
            }&beds=${this.beds}`
          )
          .then(result => {
            if (result.statusText === "Created") {
              this.success = true;
              setTimeout(() => {
                this.success = false;
              }, 4000);
              this.$refs.form.reset();
            } else {
              this.err = true;
              console.log(result);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
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
    initialize() {
      this.rooms = [];
    },
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.editedItem.img = files[0].name;
        if (this.editedItem.img.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.editedItem.img = "";
        this.img = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },
    editItem(item) {
      this.editedIndex = this.rooms.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.rooms.indexOf(item);
      confirm("Are you sure you want to delete this room?") &&
        this.rooms.splice(index, 1);
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
        Object.assign(this.rooms[this.editedIndex], this.editedItem);
      } else {
        this.rooms.push(this.editedItem);
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
