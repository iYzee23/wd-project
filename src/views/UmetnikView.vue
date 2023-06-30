<template>
    <div>
        <div class="breadcrumb-div">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/umetnici">Umetnici</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{artist.artist_name}}</li>
            </ol>
            </nav>
        </div>
        <div class="container">
            <div class="modal" :class="{ 'is-active': showModal }">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="box">
                        <h3 class="title">Postavi komentar</h3>
                        <form @submit.prevent="submitComment">
                            <label class="label">Komentar:</label>
                            <br>
                            <textarea class="textarea" v-model="commentContent"></textarea>
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
                        <img :src="'/images/artist'+artist.artist_id+'.jpeg'">
                        </div>
                        <div class="col-sm-8" style="margin-bottom: 5%;">
                            <br><br><br><br><br>
                            <h1 style="font-weight: bold">{{ artist.artist_name }}</h1>        
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <br><br>
                            <h5><b>Biografija: </b>{{ artist.artist_biography }}</h5>
                            <br>
                        </div>
                    </div>
                </div>
                <div class="left-div down-left">
                        Za više informacija o umetniku kliknite
                        <a :href="artist.artist_wiki" target="_blank">ovde</a>
                </div>
            </div>
        
            <div class="right-divs">
                <div class="right-div">
                    <h2>Komentari</h2>  
                    <div class="button-container">
                        <button type="button" class="btn btn-outline-secondary" @click="openModal">Postavi komentar</button>
                    </div>
                    <div id="commentContainer" class="comment-container" ref="commentContainer">
                        <div class="comment" v-for="comment in comments" :key="comment.id">
                            <p>{{comment.userId}}
                            <br>
                            {{ comment.content }}</p>
                            <button type="button" class="btn-close" aria-label="Close" v-if="comment.userId === loggedInUserId" @click="deleteComment(comment.id)"></button>
                        </div>
                    </div>
                </div>
                <div class="right-div down-right">
                    <!-- Content for the second smaller div goes here -->
                    <h2>Umetnine</h2>
                    <button type="button" class="btn btn-outline-secondary download" @click="downloadPDF">Pregled dela</button>
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
      height: 500px;
    }
    .down-right{
        height: 130px;
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
    .comment-container{
        height: 420px;
        overflow-y: auto;
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
</style>

<script>
import allArtists from '../data/allArtists.js'
import jsPDF from 'jspdf'
export default {
  data() {
    return {
      showModal: false,
      comments: [], 
      commentContent:'',
      loggedInUserId: 'user123',
      artists: allArtists,
      pdfURL: '../data/example.pdf',
    };
  },
  created(){
        var artistId=Number(this.$route.params.id)
        console.log(artistId)
        this.artist=this.artists.find(artist=>artist.artist_id==artistId)
        this.showModal=false;
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
    downloadPDF(){
        var pdf=new jsPDF();
        pdf.text('Kurac picka govno sisa', 10, 10)
        pdf.save('info.pdf')
    },
    fetchComments() {
      const storedComments = localStorage.getItem('comments'+this.$route.params.id);
      if (storedComments) {
        this.comments = JSON.parse(storedComments);
      } else {
        const fetchedComments1 = [
          { id: 1, userId: 'user123', content: 'Comment 1' },
          { id: 2, userId: 'user456', content: 'Comment 2' },
          { id: 3, userId: 'user123', content: 'Comment 3' },
          { id: 4, userId: 'user456', content: 'Comment 4' },
          { id: 5, userId: 'user456', content: 'Comment 5' },
          { id: 6, userId: 'user456', content: 'Comment 6' },
          { id: 7, userId: 'user456', content: 'Comment 7' },
          { id: 8, userId: 'user456', content: 'Comment 8' },
          { id: 9, userId: 'user456', content: 'Comment 9' },
          { id: 10, userId: 'user456', content: 'Comment A' }
        ];
        const fetchedComments2 = [
          { id: 1, userId: 'user123', content: 'Comment 1' },
          { id: 2, userId: 'user456', content: 'Comment 2' },
          { id: 3, userId: 'user123', content: 'Comment 3' },
          { id: 4, userId: 'user456', content: 'Comment 4' },
          { id: 5, userId: 'user456', content: 'Comment 5' },
          { id: 6, userId: 'user456', content: 'Comment 6' },
          { id: 7, userId: 'user456', content: 'Comment 7' },
          { id: 8, userId: 'user456', content: 'Comment 8' },
          { id: 9, userId: 'user456', content: 'Comment 9' },
          { id: 10, userId: 'user456', content: 'Comment A' }
        ];
        const fetchedComments3 = [
          { id: 1, userId: 'user123', content: 'Comment 1' },
          { id: 2, userId: 'user456', content: 'Comment 2' },
          { id: 3, userId: 'user123', content: 'Comment 3' },
          { id: 4, userId: 'user456', content: 'Comment 4' },
          { id: 5, userId: 'user456', content: 'Comment 5' },
          { id: 6, userId: 'user456', content: 'Comment 6' },
          { id: 7, userId: 'user456', content: 'Comment 7' },
          { id: 8, userId: 'user456', content: 'Comment 8' },
          { id: 9, userId: 'user456', content: 'Comment 9' },
          { id: 10, userId: 'user456', content: 'Comment A' }
        ];
        const fetchedComments4 = [
          { id: 1, userId: 'user123', content: 'Comment 1' },
          { id: 2, userId: 'user456', content: 'Comment 2' },
          { id: 3, userId: 'user123', content: 'Comment 3' },
          { id: 4, userId: 'user456', content: 'Comment 4' },
          { id: 5, userId: 'user456', content: 'Comment 5' },
          { id: 6, userId: 'user456', content: 'Comment 6' },
          { id: 7, userId: 'user456', content: 'Comment 7' },
          { id: 8, userId: 'user456', content: 'Comment 8' },
          { id: 9, userId: 'user456', content: 'Comment 9' },
          { id: 10, userId: 'user456', content: 'Comment A' }
        ];
        let artistId=Number(this.$route.params.id);
        switch (artistId % 4 + 1) {
            case 1:
                this.comments = fetchedComments1;
                break;
            case 2:
                this.comments = fetchedComments2;
                break;
            case 3:
                this.comments = fetchedComments3;
                break;
            case 4:
                this.comments = fetchedComments4;
                break;
            default:
                this.comments = [];
                break;
        }
      }
    },
    deleteComment(commentId) {
      const commentIndex = this.comments.findIndex(comment => comment.id === commentId);
      if (commentIndex !== -1) {
        this.comments.splice(commentIndex, 1);
        localStorage.setItem('comments'+this.$route.params.id, JSON.stringify(this.comments));
      }
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    submitComment() {
      
      let last_id = this.comments[this.comments.length - 1].id;
      const newComment = {
        id:last_id+1,
        userId:this.loggedInUserId,
        content: this.commentContent,
      };
      this.comments.push(newComment);
      localStorage.setItem('comments'+this.$route.params.id, JSON.stringify(this.comments));

      
      // Ciscenje commentContent
      this.commentContent = '';

      this.closeModal();
    }
  }
};
</script>