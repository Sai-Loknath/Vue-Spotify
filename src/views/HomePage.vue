<template>
  <div class="home-page">
    <div class="container1">
      <container1 />
    </div>
    <div class="container2">
      <container2 />
    </div>
    <div class="player">
      <MusicPlayer />
    </div>
    <div class="queue">
    <Queue />
    </div>
    <div class="playlists">
    <Playlists />
    </div>
  </div>
</template>

<script setup lang="ts">
import container1 from "./container1.vue";
import container2 from "./container2.vue";
import MusicPlayer from "./MusicPlayer.vue";
import Playlists from "./Playlists.vue";
import Queue from "./Queue.vue";
</script>

<style>
.home-page {
position: relative;   /* THIS is the key */
  width: 100%;
  height: 100%;
  background: white;


}

.container1 {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 240px;
  height:100px;
  background-color: rgb(219, 198, 157);
   border-radius: 12px;
}

.container2 {
  position: absolute;
  top: 80%;
  left: 10%;
  width: 240px;
  height: 80px;
  background-color: rgb(219, 157, 157);
   border-radius: 12px;
}

.player {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: clamp(240px, 30vw, 380px);
  height: clamp(320px, 45vh, 520px);

  background-color: rgb(76, 109, 76);
  border-radius: 12px;
}

  .queue {
  position: absolute;
  
  top: 10%;
  left: 70%;
  width: 240px;
  height:100px;
  background-color: rgb(219, 198, 157);
   border-radius: 12px;
}

.playlists {
  position: absolute;
  top: 80%;
  left: 70%;
  width: 240px;
  height: 80px;
  background-color: rgb(219, 157, 157);
   border-radius: 12px;
}
</style>
