<template>
    <div class="container-fluid">
      <div class="row">
        <div style="text-align: center;" id="sortaric">
          <button class="btn btn-danger" @click="setSorting('author')">Sort by author {{ sortOptions.sortBy === 'author' ? (sortOptions.sortDirection === 'asc' ? '↑' : '↓') : '' }}</button>
          <button class="btn btn-danger" @click="setSorting('name')">Sort by artwork {{ sortOptions.sortBy === 'name' ? (sortOptions.sortDirection === 'asc' ? '↑' : '↓') : '' }}</button>
          <button class="btn btn-danger" @click="resetSorting()">Back to default</button>
        </div>
        <div v-for="image in displayedImages" :key="image.image_id" class="col-sm-12 col-md-6 col-lg-3">
          <div class="card sm-12 md-6 lg-3" style="max-width: 500px;">
              <div class="row">
                  <div class="col-12 col-sm-4">
                      <img :src="'/images/image'+image.image_id+'.jpeg'" class="card-img">
                  </div>
                  <div class="col-12 col-sm-8">
                      <div class="card-body">
                          <h5 class="card-title">{{ image.image_name }}</h5>
                          <h6 class="card-title" style="font-style: italic; color: purple;">{{ image.image_author }}</h6>
                          <p class="card-text">{{ image.image_short_description }}</p>
                          <a :href="'/EN/slika/'+image.image_id" class="btn btn-outline-danger">Visit the image page</a>
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
  import allImagesEn from '../data/allImagesEn.js'
  export default {
    name: "SlikeViewEN",
    data() {
      return {
        images: allImagesEn,
        sortOptions: {
          sortBy: "",
          sortDirection: "asc"
        }
      };
    },
    mounted() {
      document.title = 'L&P gallery - Images';
    },
    computed: {
      sortedImages() {
        const { sortBy, sortDirection } = this.sortOptions;
        const sortedArray = [...this.images];
        if (sortBy === "author") {
          sortedArray.sort((a, b) => {
            const nameA = a.image_author.toLowerCase();
            const nameB = b.image_author.toLowerCase();
            return sortDirection === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
          });
        } else if (sortBy === "name") {
          sortedArray.sort((a, b) => {
            const nameA = a.image_name.toLowerCase();
            const nameB = b.image_name.toLowerCase();
            return sortDirection === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
          });
        }
        return sortedArray;
      },
      displayedImages() {
        return this.sortOptions.sortBy ? this.sortedImages : this.images;
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
  