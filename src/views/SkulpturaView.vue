<template>
    <div>
        <div class="breadcrumb-div">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/umetnine/skulpture">Skulpture</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{sculpture.sculpture_name}}</li>
            </ol>
            </nav>
        </div>
        <div class="container">
            <div class="modal" :class="{ 'is-active': showModal }">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="box">
                        <h3 class="title">Postavi ponudu</h3>
                        <form @submit.prevent="submitPonuda">
                            <label class="label">Ponuda:</label>
                            <br>
                            <textarea class="textarea" v-model="ponudaContent"></textarea>
                            <br>
                            <button type="submit" class="btn btn-outline-secondary">Postavi</button>
                            <button type="button" class="btn btn-outline-secondary" @click="closeModal">Zatvori</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="left-divs">
                <div class="left-div">
                    <div class="row">
                        <div class="col-sm-4">
                        <img :src="'/images/sculpture' + sculpture.sculpture_id + '.jpeg'">
                        </div>
                        <div class="col-sm-8" style="margin-bottom: 5%;">
                            <h1 style="font-weight: bold; text-decoration: underline;">{{ sculpture.sculpture_name }}</h1><br><br>
                            <h3 style="font-weight: bold">Autor: {{ currArtist.artist_name }}</h3>
                            <h5 style="font-style: italic;">{{ currArtist.artist_short_biography }}</h5>
                            <a :href="'/umetnik/' + currArtist.artist_id" class="btn btn-outline-danger">Više informacija o umetniku</a>
                            <br><br><br>
                            <h4 style="font-weight: bold">Procenjena vrednost: {{ sculpture.sculpture_estimated_price }}</h4>
                            <h4 style="font-weight: bold">Procenjena starost: {{ sculpture.sculpture_estimated_age }}</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <br>
                            <h5><b>Opis: </b>{{ sculpture.sculpture_description }}</h5>
                            <br>
                        </div>
                    </div>
                </div>
                <div class="left-div down-left">
                        Za više informacija o skulpturi kliknite
                        <a :href="sculpture.sculpture_wiki" target="_blank">ovde</a>
                </div>
            </div>
        
            <div class="right-divs">
                <div class="right-div">
                    <h2>Ponude</h2>  
                    <div class="button-container">
                        <button type="button" class="btn btn-outline-secondary" @click="openModal">Postavi ponudu</button>
                    </div>
                    <div id="ponudaContainer" class="ponuda-container" ref="ponudaContainer">
                        <div class="ponuda" v-for="ponuda in ponude" :key="ponuda.id">
                            <p>
                                Korisnik: <b>{{ ponuda.userId }}</b><br>
                                Vrednost: <b>{{ ponuda.content }}</b><br>
                                Vreme: <b>{{ formattedDate(ponuda.datetime) }}</b>
                            </p>
                            <button type="button" class="btn-close" aria-label="Close" v-if="ponuda.userId === loggedInUserId" @click="deletePonuda(ponuda.id)"></button>
                        </div>
                    </div>
                </div>
                <div class="right-div down-right">
                    <h2>Galerija</h2>
                    <div class="carousel slide" id="demo" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img :src="'/sculpture' + sculpture.sculpture_id + '/sculptureL.jpeg'" alt="sculptureL">
                            </div>
                            <div class="carousel-item">
                                <img :src="'/sculpture' + sculpture.sculpture_id + '/sculptureC.jpeg'" alt="sculptureC">
                            </div>
                            <div class="carousel-item">
                                <img :src="'/sculpture' + sculpture.sculpture_id + '/sculptureR.jpeg'" alt="sculptureR">>
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
      width:1000px;
      border: 5px solid #C4A484;
      padding: 20px;
      height:700px;
    }
    .left-div{
        height:630px;
    }
    .down-left{
        height:70px;
        color: red;
    }
    .right-divs {
      display: flex;
      flex-direction: column;
      flex-grow: 0;
      width: 500px;
      padding:20px;
    }
    .right-div {
      position: relative;
      margin-bottom: 30px;
      border: 5px solid #C4A484;
      text-align: left;
      color:plum;
      height: 300px;
    }
    .down-right{
        height: 350px;
    }
    .right-div h2{
        margin-top:5px;
        margin-left: 5px;
    }
    .button-container{
        position: absolute;
        top: 6px;
        right: 5px;
    }
    .ponuda-container{
        height: 220px;
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
      height: 350px;
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
import allSculptures from '../data/allSculptures.js'
import allArtists from '@/data/allArtists.js';

export default {
  data() {
    return {
      showModal: false,
      ponude: [], 
      ponudeContent: '',
      loggedInUserId: 'user123',
      sculptures: allSculptures,
      currArtist: ""
    };
  },
  created(){
        var sculptureId = Number(this.$route.params.id);
        console.log(sculptureId);
        this.sculpture = this.sculptures.find(sculpture => sculpture.sculpture_id == sculptureId);
        this.currArtist = allArtists.find(art => art.artist_name == this.sculpture.sculpture_author);
        this.showModal = false;
  },
  mounted() {
    this.fetchPonude();
  },
  methods: {
    formattedDate(datetime) {
        if (typeof datetime === 'string') datetime = new Date(datetime);
        const day = String(datetime.getDay()).padStart(2, '0');
        const month = String(datetime.getMonth() + 1).padStart(2, '0');
        const year = datetime.getFullYear();
        const hours = String(datetime.getHours()).padStart(2, '0');
        const minutes = String(datetime.getMinutes()).padStart(2, '0');
        const seconds = String(datetime.getSeconds()).padStart(2, '0');
        return `${day}.${month}.${year} [${hours}:${minutes}:${seconds}]`;
    },
    fetchPonude() {
      const storedPonude = localStorage.getItem('ponude/skulptura' + this.$route.params.id);
      if (storedPonude) {
        this.ponude = JSON.parse(storedPonude);
      } 
      else {
        const fetchedPonude1 = [
            { id: 1, userId: 'user123', content: '500', datetime: new Date('2023-06-29T15:45:00') },
            { id: 2, userId: 'user456', content: '700', datetime: new Date('2023-06-29T15:45:00') },
            { id: 3, userId: 'user123', content: '650', datetime: new Date('2023-06-27T09:15:00') },
            { id: 4, userId: 'user456', content: '620', datetime: new Date('2023-06-30T14:00:00') },
            { id: 5, userId: 'user456', content: '840', datetime: new Date('2023-06-25T11:20:00') },
            { id: 6, userId: 'user456', content: '125', datetime: new Date('2023-06-26T16:10:00') },
            { id: 7, userId: 'user456', content: '900', datetime: new Date('2023-06-24T13:45:00') },
            { id: 8, userId: 'user456', content: '950', datetime: new Date('2023-06-23T08:30:00') },
            { id: 9, userId: 'user456', content: '350', datetime: new Date('2023-06-22T17:00:00') },
            { id: 10, userId: 'user456', content: '420', datetime: new Date('2023-06-21T12:15:00') }
        ];
        const fetchedPonude2 = [
            { id: 1, userId: 'user123', content: '500', datetime: new Date('2023-06-28T10:30:00') },
            { id: 2, userId: 'user456', content: '700', datetime: new Date('2023-06-29T15:45:00') },
            { id: 3, userId: 'user123', content: '650', datetime: new Date('2023-06-27T09:15:00') },
            { id: 4, userId: 'user456', content: '620', datetime: new Date('2023-06-30T14:00:00') },
            { id: 5, userId: 'user456', content: '840', datetime: new Date('2023-06-25T11:20:00') },
            { id: 6, userId: 'user456', content: '125', datetime: new Date('2023-06-26T16:10:00') },
            { id: 7, userId: 'user456', content: '900', datetime: new Date('2023-06-24T13:45:00') },
            { id: 8, userId: 'user456', content: '950', datetime: new Date('2023-06-23T08:30:00') },
            { id: 9, userId: 'user456', content: '350', datetime: new Date('2023-06-22T17:00:00') },
            { id: 10, userId: 'user456', content: '420', datetime: new Date('2023-06-21T12:15:00') }
        ];
        const fetchedPonude3 = [
            { id: 1, userId: 'user123', content: '500', datetime: new Date('2023-06-28T10:30:00') },
            { id: 2, userId: 'user456', content: '700', datetime: new Date('2023-06-29T15:45:00') },
            { id: 3, userId: 'user123', content: '650', datetime: new Date('2023-06-27T09:15:00') },
            { id: 4, userId: 'user456', content: '620', datetime: new Date('2023-06-30T14:00:00') },
            { id: 5, userId: 'user456', content: '840', datetime: new Date('2023-06-25T11:20:00') },
            { id: 6, userId: 'user456', content: '125', datetime: new Date('2023-06-26T16:10:00') },
            { id: 7, userId: 'user456', content: '900', datetime: new Date('2023-06-24T13:45:00') },
            { id: 8, userId: 'user456', content: '950', datetime: new Date('2023-06-23T08:30:00') },
            { id: 9, userId: 'user456', content: '350', datetime: new Date('2023-06-22T17:00:00') },
            { id: 10, userId: 'user456', content: '420', datetime: new Date('2023-06-21T12:15:00') }
        ];
        const fetchedPonude4 = [
            { id: 1, userId: 'user123', content: '500', datetime: new Date('2023-06-28T10:30:00') },
            { id: 2, userId: 'user456', content: '700', datetime: new Date('2023-06-29T15:45:00') },
            { id: 3, userId: 'user123', content: '650', datetime: new Date('2023-06-27T09:15:00') },
            { id: 4, userId: 'user456', content: '620', datetime: new Date('2023-06-30T14:00:00') },
            { id: 5, userId: 'user456', content: '840', datetime: new Date('2023-06-25T11:20:00') },
            { id: 6, userId: 'user456', content: '125', datetime: new Date('2023-06-26T16:10:00') },
            { id: 7, userId: 'user456', content: '900', datetime: new Date('2023-06-24T13:45:00') },
            { id: 8, userId: 'user456', content: '950', datetime: new Date('2023-06-23T08:30:00') },
            { id: 9, userId: 'user456', content: '350', datetime: new Date('2023-06-22T17:00:00') },
            { id: 10, userId: 'user456', content: '420', datetime: new Date('2023-06-21T12:15:00') }
        ];
        let sculptureId = Number(this.$route.params.id);
        switch (sculptureId) {
            case 1:
                this.ponude = fetchedPonude1;
                break;
            case 2:
                this.ponude = fetchedPonude2;
                break;
            case 3:
                this.ponude = fetchedPonude3;
                break;
            case 4:
                this.ponude = fetchedPonude4;
                break;
            default:
                this.ponude = [];
                break;
        }
      }
    },
    deletePonuda(ponudaId) {
      const ponudaIndex = this.ponude.findIndex(ponuda => ponuda.id === ponudaId);
      if (ponudaIndex !== -1) {
        this.ponude.splice(ponudaIndex, 1);
        localStorage.setItem('ponude/skulptura' + this.$route.params.id, JSON.stringify(this.ponude));
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
            let last_id = this.ponude[this.ponude.length - 1].id;
            const newPonuda = {
                id: last_id + 1,
                userId: this.loggedInUserId,
                content: this.ponudaContent,
                datetime: new Date()
            };
            this.ponude.push(newPonuda);
            localStorage.setItem('ponude/skulptura' + this.$route.params.id, JSON.stringify(this.ponude));

            this.ponudaContent = '';
            this.closeModal();
        }
    }
  }
};
</script>