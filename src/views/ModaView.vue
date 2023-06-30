<template>
    <div class="container-fluid">
      <div class="row">
        <div v-for="creation in creations" :key="creation.creation_id" class="col-md-3">
          <div class="card md-3" style="max-width: 500px;">
              <div class="row">
                  <div class="col-sm-4">
                      <img :src="'/images/creation'+creation.creation_id+'.jpeg'" class="card-img">
                  </div>
                  <div class="col-sm-8">
                      <div class="card-body">
                          <h5 class="card-title">{{ creation.creation_name }}</h5>
                          <p class="card-text">{{ creation.creation_short_description }}</p>
                          <a :href="'/kreacija/'+creation.creation_id" class="btn btn-outline-danger">Posetite stranicu modne kreacije</a>
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
  import allCreations from '../data/allCreations.js'
  export default {
    data() {
      return {
        creations: allCreations
      };
    }
  };
  </script>
  