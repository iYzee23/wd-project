<template>
    <div>
        <div class="breadcrumb-div">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/EN/umetnine/moda">Fashion</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{creation.creation_name}}</li>
            </ol>
            </nav>
        </div>
        <div class="container">
            <div class="modal" :class="{ 'is-active': showModal }">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="box">
                        <h3 class="title">Place an offer</h3>
                        <form @submit.prevent="submitPonuda">
                            <label class="label">Offer:</label>
                            <br>
                            <textarea class="textarea" v-model="ponudaContent"></textarea>
                            <br>
                            <button type="submit" class="btn btn-outline-secondary">Place</button>
                            <button type="button" class="btn btn-outline-secondary" @click="closeModal()">Close</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="left-divs">
                <div class="left-div">
                    <div class="row">
                        <div class="col-sm-4">
                        <img :src="'/images/creation' + creation.creation_id + '.jpeg'">
                        </div>
                        <div class="col-sm-8" style="margin-bottom: 5%;">
                            <h1 style="font-weight: bold; text-decoration: underline;">{{ creation.creation_name }}</h1><br><br>
                            <h3 style="font-weight: bold">Author: {{ currArtist.artist_name }}</h3>
                            <h5 style="font-style: italic;">{{ currArtist.artist_short_biography }}</h5>
                            <a :href="'/EN/umetnik/'+currArtist.artist_id" class="btn btn-outline-danger">More info about artist</a>
                            <br><br><br>
                            <h4 style="font-weight: bold">Estimated price: {{ creation.creation_estimated_price }}</h4>
                            <h4 style="font-weight: bold">Estimated age: {{ creation.creation_estimated_age }}</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <br>
                            <h5><b>Description: </b>{{ creation.creation_description }}</h5>
                            <br>
                        </div>
                    </div>
                </div>
                <div class="left-div down-left">
                        For mor info about creation click
                        <a :href="creation.creation_wiki" target="_blank">here</a>
                </div>
            </div>
        
            <div class="right-divs">
                <div class="right-div">
                    <h2>Offers</h2>  
                    <div class="button-container" v-if="loggedInUserId">
                        <button type="button" class="btn btn-outline-secondary" @click="openModal">Place an offer</button>
                    </div>
                    <div id="ponudaContainer" class="ponuda-container" ref="ponudaContainer">
                        <div class="ponuda" v-for="ponuda in ponude" :key="ponuda.id">
                            <p>
                                User: <b>{{ ponuda.userId }}</b><br>
                                Value: <b>{{ ponuda.content }}</b><br>
                                Time: <b>{{ formattedDate(ponuda.datetime) }}</b>
                            </p>
                            <button type="button" class="btn-close" aria-label="Close" v-if="ponuda.userId === loggedInUserId" @click="deletePonuda(ponuda.id)"></button>
                        </div>
                    </div>
                </div>
                <div class="right-div down-right">
                    <h2>Gallery</h2>
                    <div class="carousel slide" id="demo" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img :src="'/creation' + creation.creation_id + '/creationL.jpeg'" alt="creationL">
                            </div>
                            <div class="carousel-item">
                                <img :src="'/creation' + creation.creation_id + '/creationC.jpeg'" alt="creationC">
                            </div>
                            <div class="carousel-item">
                                <img :src="'/creation' + creation.creation_id + '/creationR.jpeg'" alt="creationR">>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">&lt;</button>
                        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
    .container{
        display: flex;
    }
    .left-divs {
      flex-grow: 1;
      width:66%;
      border: 5px solid #C4A484;
      padding: 20px;
      height:100%;
    }
    .left-div{
        height:93%;
    }
    .down-left{
        height:70px;
        color: red;
    }
    .right-divs {
      display: flex;
      flex-direction: column;
      flex-grow: 0;
      width: 34%;
      padding:20px;
    }
    .right-div {
      position: relative;
      margin-bottom: 30px;
      border: 5px solid #C4A484;
      text-align: left;
      color:plum;
      height: 24%;
    }
    .down-right{
        height: 350px;
    }
    .right-div h2{
        margin-top:5px;
        margin-left: 5px;
    }
    .button-container{
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .ponuda-container{
        height: 67%;
        overflow-y: auto;
    }
    .ponuda {
        word-wrap: break-word;
        text-align: left;
        display: flex;
        border: 2px solid silver;
        background-color: aliceblue;
    }
    .ponuda p{
        margin-left: 10px;
        flex: 1;
    }
    .btn-close{
        margin-left: auto;
    }
    .modal {
    display: none;
    }

    .modal.is-active {
    display: block; 
    }
    .download{
        margin-left: 10px;
    }
    .breadcrumb-div{
        display: flex;
        justify-content: center;
    }
    .breadcrumb{
        text-align: center;
    }

    img {
      width: 250px;
      height: 100%;
    }

    .carousel {
        width: 100%;
        overflow: hidden;
    }

    .carousel-slide {
        display: flex;
        width: 100%;
        transition: transform 0.3s ease-in-out;
    }

    .carousel img {
        width: 100%;
        height: 280px;
    }
</style>

<script>
import allCreationsEn from '../data/allCreationsEn.js'
import allArtistsEn from '@/data/allArtistsEn.js';

export default {
  data() {
    return {
      showModal: false,
      ponude: [], 
      ponudeContent: '',
      loggedInUserId: '',
      creations: allCreationsEn,
      currArtist: ""
    };
  },
  created(){
        var creationId = Number(this.$route.params.id);
        //console.log(creationId);
        this.creation = this.creations.find(creation => creation.creation_id == creationId);
        this.currArtist = allArtistsEn.find(art => art.artist_name == this.creation.creation_author);
        this.showModal = false;
        this.loggedInUserId= localStorage.getItem('user')

  },
  mounted() {
    this.fetchPonude();
    document.title = 'L&P gallery - Creation';
  },
  methods: {
    formattedDate(datetime) {
        if (datetime == undefined) datetime = new Date()
        else if (typeof datetime === 'string') datetime = new Date(datetime);
        const day = String(datetime.getDate()).padStart(2, '0');
        const month = String(datetime.getMonth()+1).padStart(2, '0');
        const year = datetime.getFullYear();
        const hours = String(datetime.getUTCHours()).padStart(2, '0');
        const minutes = String(datetime.getMinutes()).padStart(2, '0');
        const seconds = String(datetime.getSeconds()).padStart(2, '0');
        return `${day}.${month}.${year} [${hours}:${minutes}:${seconds}]`;
    },
    fetchPonude() {
        this.ponude =JSON.parse(localStorage.getItem('allOffers')).filter((o)=>{
        return (o.artwork_id == Number.parseInt(this.$route.params.id) && o.type=='x')
      });
    },
    deletePonuda(ponudaId) { //OVO NE TREBA DA POSTOJI!?
        let allOffers = JSON.parse(localStorage.getItem('allOffers'));
        const ponudaIndex = this.ponude.findIndex(ponuda => ponuda.id === ponudaId && ponuda.type == 'x' );
        const allPonudaIndex = allOffers.findIndex(ponuda => ponuda.id === ponudaId && ponuda.type == 'x' );
        if (ponudaIndex !== -1) {
            this.ponude.splice(ponudaIndex, 1);
            allOffers.splice(allPonudaIndex, 1);
            localStorage.setItem('allOffers', JSON.stringify(allOffers));
        }
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    submitPonuda() {
        let parsedValue = Number(this.ponudaContent);
        if (!isNaN(parsedValue)) {
            let allOffers = JSON.parse(localStorage.getItem('allOffers'));
            let last_id = allOffers[allOffers.length - 1].id;
            const newPonuda = {
                id: last_id + 1,
                userId: this.loggedInUserId,
                content: this.ponudaContent,
                datetime: new Date(),
                artwork_id: Number(this.$route.params.id),
                type: 'x'
            };
            this.ponude.push(newPonuda)
            allOffers.push(newPonuda);
            localStorage.setItem('allOffers', JSON.stringify(allOffers));
            // Ciscenje ponudaContent
            this.ponudaContent = '';
            this.closeModal();
        }
    }
  }
};
</script>