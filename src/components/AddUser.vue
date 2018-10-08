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
            <div class="head">
                <h2>Add User</h2>                      
            </div>
            <!-- table -->
            <div class="tables">
                <div>
                <v-app>
 <v-form ref="form" v-model="valid" lazy-validation>
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
      User Succesfully created
    </v-alert>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="100"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      :type="'password'"
      v-model="password"
      :rules="[v => !!v || 'Password is required']"
      label="Password"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      :items="roles"
      :rules="[v => !!v || 'Position is required']"
      label="Position"
      required
    ></v-select>
    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  <v-spacer></v-spacer>
   <v-toolbar flat color="white">
     
      
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.first_name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>                  
                  <v-text-field  slot="activator" v-model="editedItem.position" label="Position"></v-text-field> 
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
    </v-toolbar>
  </v-app>
                </div>

            </div>
            <div class="tables">
                <div>
                
                <v-app>
                   <v-card>
        <v-card-title>
      Registered users
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
      :items="users"
      :search="search"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="">{{ props.item.first_name }}</td>
        <td class="">{{ props.item.email }}</td>
        <td class="">{{ props.item.position }}</td>
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
          <h4>No data Available</h4>
        <!-- <v-btn color="primary" @click="initialize">Reset</v-btn> -->
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
import axios from "axios";
export default {
  name: "allbookings",
  data() {
    return {
      valid: true,
      err: false,
      name: "",
      dialog: false,
      search: "",
      editedIndex: -1,
      editedItem: {
        first_name: "",
        email: "",
        position: ""
      },
      defaultItem: {
        first_name: "",
        email: "",
        position: ""
      },
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 5) || "Name must be less than 10 characters"
      ],
      email: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      roles: ["clerk", "admin", "supervisor", "receptionist"],
      checkbox: false,
      success: false,
      users: [],
      headers: [
        { text: "Name", value: "name", align: "center" },
        { text: "Email", value: "location", align: "center" },
        { text: "Position", value: "contact", align: "center" },
        { text: "Edit", align: "center" }
      ]
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "" : "Edit User";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.getUsers();
  },

  methods: {
    getUsers() {
      axios
        .get("http://localhost:3000/users")
        .then(result => {
          result.data.forEach(element => {
            this.users.push(element);
            console.log(element);
          });
          console.log(result.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.users.push({
          first_name: this.name,
          password: this.password,
          email: this.email,
          position: this.select
        });
        //Object.assign(this.users[{name:this.name, email:this.email, password:this.password, jobdescription:this.select}], this.users);
        // Native form submission is not yet supported
        axios
          .post(
            `http://localhost:3000/auth/register?first_name=${
              this.name
            }&email=${this.email}&password=${this.password}&position=${
              this.select
            }`
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
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.users.indexOf(item);
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
        Object.assign(this.users[this.editedIndex], this.editedItem);
      } else {
        this.users.push(this.editedItem);
      }
      this.close();
    },
    clear() {
      this.$refs.form.reset();
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
  width: 15%;
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
</style>
