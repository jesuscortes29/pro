
<template>
  <v-card class="mx-auto" max-width="400" tile>
    <v-list-item v-for="user in users" two-line :key="user._id" @click="getListByUser(user._id)">
      <v-list-item-content>
        <v-list-item-title>{{user.nickname}}</v-list-item-title>
        <v-list-item-subtitle>{{user.picture}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card
      class="mx-auto"
      max-width="400"
      tile
      v-for="list in lists"
      tree-line
      :key="list._id"
      @click="getSongsByList(user_id, list._id)"
    >
      <v-card-title>{{list.name}}</v-card-title>
      <v-card-text>{{list.descripcion}}</v-card-text>
      <v-card-text>{{list.gender}}</v-card-text>
      <v-card-actions>
        <v-card v-for="songs in listWithSong" one-line :key="songs._id">
          <v-card v-for="song in songs.song_id" two-line :key="song._id">
            <v-card-title>
              {{song.name}}
              [
              <small>{{song.duraction}}</small>]
            </v-card-title>
          </v-card>
        </v-card>
      </v-card-actions>
    </v-card>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      urlBackend:
        "https://3000-b7dbd182-b3c1-450e-bbd7-982f610c13ba.ws-us0.gitpod.io",
      users: [],
      lists: [],
      listWithSong: [],
      user_id: ""
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get(`${this.urlBackend}/users`).then(result => {
        this.users = result.data.allUsers;
      });
    },
    getListByUser(user_id) {
      axios.get(`${this.urlBackend}/users/${user_id}/lists`).then(result => {
        this.lists = result.data.user_list;
        this.user_id = user_id;
      });
    },
    getSongsByList(user_id, list_id) {
      axios
        .get(`${this.urlBackend}/users/${user_id}/lists/${list_id}`)
        .then(result => {
          this.listWithSong = result.data.user_list_song;
        });
    }
  }
};
</script>


