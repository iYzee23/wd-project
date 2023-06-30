<template>
    <div class="container-fluid">
      <div class="row">
        <div style="text-align: center;" id="sortaric">
          <button class="btn btn-danger" @click="setSorting('author')">Sortiraj po autoru {{ sortOptions.sortBy === 'author' ? (sortOptions.sortDirection === 'asc' ? '↑' : '↓') : '' }}</button>
          <button class="btn btn-danger" @click="setSorting('name')">Sortiraj po umetnini {{ sortOptions.sortBy === 'name' ? (sortOptions.sortDirection === 'asc' ? '↑' : '↓') : '' }}</button>
          <button class="btn btn-danger" @click="resetSorting()">Vrati na podrazumevano</button>
        </div>
        <div v-for="sculpture in displayedSculptures" :key="sculpture.sculpture_id" class="col-md-3">
          <div class="card md-3" style="max-width: 500px;">
              <div class="row">
                  <div class="col-sm-4">
                      <img :src="'/images/sculpture'+sculpture.sculpture_id+'.jpeg'" class="card-img">
                  </div>
                  <div class="col-sm-8">
                      <div class="card-body">
                          <h5 class="card-title">{{ sculpture.sculpture_name }}</h5>
                          <h6 class="card-title" style="font-style: italic; color: purple;">{{ sculpture.sculpture_author }}</h6>
                          <p class="card-text">{{ sculpture.sculpture_short_description }}</p>
                          <a :href="'/skulptura/'+sculpture.sculpture_id" class="btn btn-outline-danger">Posetite stranicu skulpture</a>
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

      #sortaric {
        margin-top: 10px;
        padding: 10px;
      }

      #sortaric > button {
        margin: 1px;
      }
  </style>
  
  <script>
  import allSculptures from '../data/allSculptures.js'
  export default {
    name: "SkulptureView",
    data() {
      return {
        sculptures: allSculptures,
        sortOptions: {
          sortBy: "",
          sortDirection: "asc"
        }
      };
    },
    computed: {
      sortedSculptures() {
        const { sortBy, sortDirection } = this.sortOptions;
        const sortedArray = [...this.sculptures];
        if (sortBy === "author") {
          sortedArray.sort((a, b) => {
            const nameA = a.sculpture_author.toLowerCase();
            const nameB = b.sculpture_author.toLowerCase();
            return sortDirection === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
          });
        } else if (sortBy === "name") {
          sortedArray.sort((a, b) => {
            const nameA = a.sculpture_name.toLowerCase();
            const nameB = b.sculpture_name.toLowerCase();
            return sortDirection === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
          });
        }
        return sortedArray;
      },
      displayedSculptures() {
        return this.sortOptions.sortBy ? this.sortedSculptures : this.sculptures;
      }
    },
    methods: {
      setSorting(sortBy) {
        if (this.sortOptions.sortBy === sortBy) {
          this.sortOptions.sortDirection = this.sortOptions.sortDirection === "asc" ? "desc" : "asc";
        } else {
          this.sortOptions.sortBy = sortBy;
          this.sortOptions.sortDirection = "asc";
        }
      },
      resetSorting() {
        this.sortOptions.sortBy = '';
        this.sortOptions.sortDirection = 'asc';
      }
    }
  };
  </script>
  