<template>
    <div class="container-fluid">
      <div class="row">
        <div v-for="image in images" :key="image.image_id" class="col-md-3">
          <div class="card md-3" style="max-width: 500px;">
              <div class="row">
                  <div class="col-sm-4">
                      <img :src="'/images/image'+image.image_id+'.jpeg'" class="card-img">
                  </div>
                  <div class="col-sm-8">
                      <div class="card-body">
                          <h5 class="card-title">{{ image.image_name }}</h5>
                          <p class="card-text">{{ image.image_short_description }}</p>
                          <a :href="'/slika/'+image.image_id" class="btn btn-outline-danger">Posetite stranicu slike</a>
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
          width: 130%;
          height: 200px;
      }
  </style>
  <script>
  import allImages from '../data/allImages.js'
  export default {
    data() {
      return {
        images: allImages
      };
    }
  };
  </script>
  