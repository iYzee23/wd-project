<template>
    <div class="container-fluid">
      <div class="row">
        <div style="text-align: center;" id="sortaric">
          <button class="btn btn-danger" @click="setSorting('author')">Sort by author {{ sortOptions.sortBy === 'author' ? (sortOptions.sortDirection === 'asc' ? '↑' : '↓') : '' }}</button>
          <button class="btn btn-danger" @click="setSorting('name')">Sort by artwork {{ sortOptions.sortBy === 'name' ? (sortOptions.sortDirection === 'asc' ? '↑' : '↓') : '' }}</button>
          <button class="btn btn-danger" @click="resetSorting()">Back to default</button>
        </div>
        <div v-for="creation in displayedCreations" :key="creation.creation_id" class="col-md-3">
          <div class="card sm-12 md-6 lg-3" style="max-width: 500px;">
              <div class="row">
                  <div class="col-12 col-sm-4">
                      <img :src="'/images/creation'+creation.creation_id+'.jpeg'" class="card-img">
                  </div>
                  <div class="col-12 col-sm-8">
                      <div class="card-body">
                          <h5 class="card-title">{{ creation.creation_name }}</h5>
                          <h6 class="card-title" style="font-style: italic; color: purple;">{{ creation.creation_author }}</h6>
                          <p class="card-text">{{ creation.creation_short_description }}</p>
                          <a :href="'/EN/kreacija/'+creation.creation_id" class="btn btn-outline-danger">Visit the creation page</a>
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
  import allCreationsEn from '../data/allCreationsEn.js'
  export default {
    name: "ModaViewEN",
    data() {
      return {
        creations: allCreationsEn,
        sortOptions: {
          sortBy: "",
          sortDirection: "asc"
        }
      };
    },
    mounted() {
      document.title = 'L&P gallery - Fashion';
    },
    computed: {
      sortedCreations() {
        const { sortBy, sortDirection } = this.sortOptions;
        const sortedArray = [...this.creations];
        if (sortBy === "author") {
          sortedArray.sort((a, b) => {
            const nameA = a.creation_author.toLowerCase();
            const nameB = b.creation_author.toLowerCase();
            return sortDirection === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
          });
        } else if (sortBy === "name") {
          sortedArray.sort((a, b) => {
            const nameA = a.creation_name.toLowerCase();
            const nameB = b.creation_name.toLowerCase();
            return sortDirection === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
          });
        }
        return sortedArray;
      },
      displayedCreations() {
        return this.sortOptions.sortBy ? this.sortedCreations : this.creations;
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
  