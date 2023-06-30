<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="artist in artists" :key="artist.artist_id" class="col-md-3">
        <div class="card md-3" style="max-width: 500px;">
            <div class="row">
                <div class="col-sm-4">
                    <img :src="'/images/artist'+artist.artist_id+'.jpeg'" class="card-img">
                </div>
                <div class="col-sm-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ artist.artist_name }}</h5>
                        <p class="card-text">{{ artist.artist_short_biography }}</p>
                        <a :href="'/umetnik/'+artist.artist_id" class="btn btn-outline-danger">Posetite profil umetnika</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .container-fluid{
        width: 1920px;
        text-align: right;
        border: 5px solid #C4A484;
    }
    .card{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .card-title{
        color: plum;
    }
    .card-img{
        width: 150px;
        height: 200px;
    }
</style>

<script>
import allArtists from '../data/allArtists.js'
export default {
  data() {
    return {
      artists: allArtists
    };
  }
};
</script>
