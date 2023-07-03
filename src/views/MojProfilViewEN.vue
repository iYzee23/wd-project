<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-sm-12">
            <br>
            <h2>{{ user }}</h2>
            <button class="btn btn-outline-secondary" @click="logout()">Logout</button>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 col-md-6">
            <br>
                <div id="commentContainer" class="comment-container" ref="commentContainer">
                    <h3>Offers</h3>
                    <div class="comment" v-for="offer in allUsersSlikePonude" :key="offer.id">
                        <p>
                        {{ allImages.filter(image => image.image_id === offer.artwork_id)[0].image_name }}
                        <br>
                        {{ offer.content }}
                        <br>
                        {{offer.datetime}}</p>
                        <button type="button" class="btn-close" aria-label="Close" v-if="offer.userId === user" @click="deleteOffer(offer)"></button>
                    </div>
                    <div class="comment" v-for="offer in allUsersSkulpturePonude" :key="offer.id">
                        <p>
                        {{ allSculptures.filter(sculpture => sculpture.sculpture_id === offer.artwork_id)[0].sculpture_name }}
                        <br>
                        {{ offer.content }}
                        <br>
                        {{offer.datetime}}</p>
                    <button type="button" class="btn-close" aria-label="Close" v-if="offer.userId === user" @click="deleteOffer(offer)"></button>
                    </div>
                    <div class="comment" v-for="offer in allUsersKreacijePonude" :key="offer.id">
                        <p>
                        {{ allCreations.filter(creation => creation.creation_id === offer.artwork_id)[0].creation_name }}
                        <br>
                        {{ offer.content }}
                        <br>
                        {{offer.datetime}}</p>
                        <button type="button" class="btn-close" aria-label="Close" v-if="offer.userId === user" @click="deleteOffer(offer)"></button>
                    </div>
                </div>
                <br>
      </div>
      <div class="col-sm-12 col-md-6">
        <br>
                <div id="commentContainer" class="comment-container" ref="commentContainer">
                    <h3>Comments</h3>
                    <div class="comment" v-for="comment in allUsersComments" :key="comment.id">
                        <p>
                        {{ allArtists.filter(artist => artist.artist_id === comment.artist_id)[0].artist_name }}
                        <br>
                        {{ comment.content }}</p>
                    <button type="button" class="btn-close" aria-label="Close" v-if="comment.userId === user" @click="deleteComment(comment)"></button>
                    </div>
                </div>
                <br>
      </div>
    </div>
</div>
</template>


<script>
import allArtists from "@/data/allArtists";
import allCreations from "@/data/allCreations";
import allSculptures from "@/data/allSculptures";
import allImages from "@/data/allImages";
import jsPDF from 'jspdf';
export default {
  name: "MojProfil",
  data() {
    return {
      user: "",
      allUsersComments: [],
      allUsersSlikePonude: [],
      allUsersSkulpturePonude: [],
      allUsersKreacijePonude:[],
      allArtists: allArtists,
      allImages:allImages,
      allSculptures:allSculptures,
      allCreations:allCreations
    };
  },
  created() {
    if (
      localStorage.getItem("user") == null ||
      localStorage.getItem("user") == ""
    ) {
      this.$router.push("/login");
    }
    this.user = localStorage.getItem("user");
    this.allUsersComments=JSON.parse(localStorage.getItem('allComments')).filter((c)=>{return c.userId == this.user})

    this.allUsersSlikePonude=JSON.parse(localStorage.getItem('allOffers')).filter((o)=>{
        return (o.userId==this.user && o.type=='s')})
    this.allUsersSkulpturePonude=JSON.parse(localStorage.getItem('allOffers')).filter((o)=>{
        return (o.userId==this.user && o.type=='e')})
     this.allUsersKreacijePonude=JSON.parse(localStorage.getItem('allOffers')).filter((o)=>{
        return (o.userId==this.user && o.type=='x')})

  },
  methods:{
    deleteOffer(offer){
        let za_brisanje=null
        let indeks=null
        switch (offer.type) {
            case 's':
                za_brisanje=this.allUsersSlikePonude.find((o)=>{return (o.id==offer.id && o.type=='s')})
                indeks=this.allUsersSlikePonude.indexOf(za_brisanje)
                this.allUsersSlikePonude.splice(indeks,1)
                break;
            case 'e':
                za_brisanje=this.allUsersSkulpturePonude.find((o)=>{return (o.id==offer.id && o.type=='e')})
                indeks=this.allUsersSkulpturePonude.indexOf(za_brisanje)
                this.allUsersSkulpturePonude.splice(indeks,1)
                break;
            case 'x':
                za_brisanje=this.allUsersKreacijePonude.find((o)=>{return (o.id==offer.id && o.type=='x')})
                indeks=this.allUsersKreacijePonude.indexOf(za_brisanje)
                this.allUsersKreacijePonude.splice(indeks,1)
                break;
            default:
                break;
        }
        let allOffers=JSON.parse(localStorage.getItem('allOffers'))
        allOffers.splice(allOffers.indexOf(allOffers.find((o)=>{return (o.id==offer.id && o.type==offer.type)})),1)
        localStorage.setItem('allOffers',JSON.stringify(allOffers))
    },
    deleteComment(comment){
        let allComments=JSON.parse(localStorage.getItem('allComments'))
        allComments.splice(allComments.indexOf(allComments.find((c)=>{return c.id==comment.id})),1)
        localStorage.setItem('allComments', JSON.stringify(allComments))
        this.allUsersComments.splice(this.allUsersComments.indexOf(comment),1)
    },
    logout(){
        localStorage.setItem('user','')
        this.$router.push('/')
    }
  }
};
</script>

<style scoped>
    .container{
        display: flex;
    }
    .comment-container{
        height: 420px;
        overflow-y: auto;
        border: 5px solid #C4A484;

    }
    .comment{
        word-wrap: break-word;
        text-align: left;
        display: flex;
        border: 2px solid silver;
        background-color: aliceblue;
    }
    .comment p{
        margin-left: 10px;
        flex: 1;
    }
    .btn-close{
        margin-left: auto;
    }
</style>