<template>
<div>
    <v-app class="logpage">
      <v-container class="login">
    <v-layout row class="text-xs-center">
      <v-flex xs4 style="background-image: url('https://ticketsoko.com/supreme.png')">
        <v-card  height="500px">
            <br>
            <br>
            <br>
            <br>
            <img src="https://ticketsoko.com/supreme.png" alt="">
            <v-card-text>Welcome Admin</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field  :rules="[v => !!v || 'Email is required']" prepend-icon="person" name="Email" label="Email" required></v-text-field>
            <v-text-field  :rules="[v => !!v || 'Password is required']" prepend-icon="lock" name="Password" label="Password" type="password" required></v-text-field>
            <v-card-actions>
              <v-btn :disabled="!valid" @click="login" primary large block>Login</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
  </v-app>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            valid: true,
            email: "",
            password:""
        }
    },
    methods: {
        login(){
             if (this.$refs.form.validate()) {
                this.$router.replace('/dashboard')

             }

        }
    }
    
}
</script>

<style scoped>
.logpage {
 height: 1000px;
 background: #343a44;
}
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 200px;
}

</style>


