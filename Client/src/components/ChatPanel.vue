<template>
  <div><center>

    <input type="text" v-model="currentMessage" placeholder="Enter message...">
    <button type="button" @click="sendMessage">Send</button>

    <br /><br /><br />

    <h3>Server says...</h3>
    <ul>
      <li v-for="message in recievedMessages" v-bind:key="message">{{message}}</li>
    </ul>
  </center></div>
</template>

<script>
export default {
  name: 'ChatPanel',
  data(){
    return{
      currentMessage: "",
      recievedMessages: []
    }
  },
  methods: {
    sendMessage: function(){
      this.$socket.emit('message', this.currentMessage);
      this.currentMessage = "";
    }
  },
  sockets: {
      connect: function () {
          this.recievedMessages.push("Connected!");
      },
      message: function (data) {
          this.recievedMessages.push(data);
      }
  }
}
</script>

<style>
li{
  list-style: none;
  color: #787878;
  font-size: 20px;
  font-weight: bold;
}
ul{
  width: 70%;
  background-color: #e9e9e9;
}
</style>
