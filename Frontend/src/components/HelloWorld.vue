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

      <v-card-text>

        The dog (Canis familiaris when considered a distinct species or Canis lupus familiaris when considered a subspecies of the wolf)[5] is a member of the genus Canis (canines), which forms part of the wolf-like canids,[6] and is the most widely abundant terrestrial carnivore.[7][8][9][10][11] The dog and the extant gray wolf are sister taxa[12][13][14] as modern wolves are not closely related to the wolves that were first domesticated,[13][14] which implies that the direct ancestor of the dog is extinct.[15] The dog was the first species to be domesticated,[14][16] and has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes.[17]

        Their long association with humans has led dogs to be uniquely attuned to human behavior[18] and they are able to thrive on a starch-rich diet that would be inadequate for other canids.[19] Dogs vary widely in shape, size and colors.[20] They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and military, companionship and, more recently, aiding disabled people and therapeutic roles. This influence on human society has given them the sobriquet of "man's best friend".
      </v-card-text>

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
