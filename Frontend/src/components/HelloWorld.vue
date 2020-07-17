<template>
  <div >
    <v-toolbar dark color="primary" style="top:0;">
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>צור קשר</v-btn>
        <v-btn flat>פסקי דין</v-btn>
        <v-btn flat>מאמרים</v-btn>
        <v-btn flat>תחומי התמחות</v-btn>



      </v-toolbar-items>
      <v-spacer></v-spacer>


      <v-toolbar-title class="white--text title">test</v-toolbar-title>

      <v-toolbar-side-icon></v-toolbar-side-icon>



    </v-toolbar>

    <v-card style="position: absolute; width: 96%; top:11%; left:2%; text-align: right">


      <v-card-text style="font-size: 24px;">test</v-card-text>

     bla bla

    </v-card>

    <v-card class="makeAppointment">
      <v-card-text>לתיאום פגישה</v-card-text>


    </v-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.makeAppointment{
  text-align: right;
  position: absolute;
  width: 18%;
  height: 25%;
  left: 3%;
  top: 72%;
}

@media only screen and (max-width: 600px) {

    .title {
    font-size: 12px !important;
    }

}
</style>
