<template>
  <div class="home">
    <section class="hero">
      <div class="hero-background"></div>
      <div class="hero-content">
        <img src="../assets/logoAssassin.png" alt="Gallery Logo" class="logo">
        <h1 class="title">Dobro došli u <span class="highlight">L&P galeriju</span>, mesto gde magija dobija svoj materijalni oblik.</h1>
      </div>
    </section>

    <div class="container-fluid">
      <h2>Najpopularniji umetnici</h2>
      <div class="row">
        <div v-for="artist in currArtists" :key="artist.artist_id" class="col-sm-12 col-md-6 col-lg-3">
          <div class="card sm-12 md-6 lg-3" style="max-width: 500px;">
            <div class="row">
              <div class="col-12 col-sm-4">
                <img :src="'/images/artist'+artist.artist_id+'.jpeg'" class="card-img">
              </div>
              <div class="col-12 col-sm-8">
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

    <div class="container-fluid" style="margin-top: 1px;">
      <h2>Najpopularnije umetnine</h2>
      <div class="row">
        <div v-for="image in currUmetnine.slice(0, 2)" :key="image.image_id" class="col-sm-12 col-md-6 col-lg-3">
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
                          <a :href="'/slika/'+image.image_id" class="btn btn-outline-danger">Posetite stranicu slike</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div v-for="sculpture in currUmetnine.slice(2, 3)" :key="sculpture.sculpture_id" class="col-md-3">
          <div class="card sm-12 md-6 lg-3" style="max-width: 500px;">
              <div class="row">
                  <div class="col-12 col-sm-4">
                      <img :src="'/images/sculpture'+sculpture.sculpture_id+'.jpeg'" class="card-img">
                  </div>
                  <div class="col-12 col-sm-8">
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
        <div v-for="creation in currUmetnine.slice(3, 4)" :key="creation.creation_id" class="col-md-3">
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
                          <a :href="'/kreacija/'+creation.creation_id" class="btn btn-outline-danger">Posetite stranicu modne kreacije</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid" style="margin-top: 1px;">
      <h2>Najnovije ponude</h2>
      <div class="row">
        <div v-for="offer in latestOffers" :key="offer.id" class="col-sm-12 col-md-6 col-lg-3">
          <div class="card md-3" style="max-width: 500px;">
            <div class="card-body">
              <h5 class="card-title">Korisnik: <span class="highlight">{{ offer.userId }}</span></h5>
              <h5 class="card-title">Ponuda: <span class="highlight">{{ offer.content }}$</span></h5>
              <h5 class="card-title">Kategorija: <span class="highlight">{{ getCategoryName(offer.type) }} {{ offer.artwork_id }}</span></h5>
              <p class="card-text">Datum ponude: <span class="highlight">{{ formattedDate(offer.datetime) }}</span></p>
              <a :href="'/' + getCategoryName(offer.type).toLowerCase() + '/' + offer.artwork_id" class="btn btn-outline-danger">Stranica umetnine</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import allArtists from '../data/allArtists.js'
import allImages from '../data/allImages.js'
import allSculptures from '../data/allSculptures.js'
import allCreations from '../data/allCreations.js'
export default {
  name: "PocetnaView",
  data() {
    return {
      allComments: [],
      allOffers: [],
      currArtists: [],
      currUmetnine: []
    };
  },
  created() {
    if (!localStorage.getItem("allComments")) {
      const fetchedComments1 = [
        {
          id: 1,
          userId: "user123",
          content: "This is comment 1",
          artist_id: 1,
        },
        {
          id: 2,
          userId: "user456",
          content: "dsklfjdlskfjlas 2",
          artist_id: 1,
        },
        { id: 3, userId: "user012", content: "djksfnkadsjnf 3", artist_id: 1 },
        { id: 4, userId: "user456", content: " dmsf,d.asmf 4", artist_id: 1 },
        { id: 5, userId: "user567", content: "md,asf.,fma 5", artist_id: 1 },
        { id: 6, userId: "user456", content: "md,.safm.ds,a 6", artist_id: 1 },
        {
          id: 7,
          userId: "user012",
          content: "Comd,s.afm.ds,mment 7",
          artist_id: 1,
        },
        { id: 8, userId: "user123", content: "adsnfm,.dsfmn 8", artist_id: 1 },
        {
          id: 9,
          userId: "user123",
          content: "Commd,sfm.ds,mfent 9",
          artist_id: 1,
        },
        { id: 10, userId: "user567", content: "Commd.,sfment A", artist_id: 1 },
      ];
      const fetchedComments2 = [
        {
          id: 11,
          userId: "user123",
          content: "This is comment 1",
          artist_id: 2,
        },
        { id: 12, userId: "user456", content: "xmvldskcv;ldks 2", artist_id: 2 },
        { id: 13, userId: "user567", content: "dsknfldsk 3", artist_id: 2 },
        { id: 14, userId: "user456", content: "sdlkjflkjsd 4", artist_id: 2 },
        {
          id: 15,
          userId: "user012",
          content: "mdslkfmldskmfsd 5",
          artist_id: 2,
        },
        {
          id: 16,
          userId: "user456",
          content: "smdlfkmdslmfksdl 6",
          artist_id: 2,
        },
        {
          id: 17,
          userId: "user012",
          content: "sdmf;lmsd;fmsd; 7",
          artist_id: 2,
        },
        { id: 18, userId: "user456", content: "sdkf;sdkfdskf; 8", artist_id: 2 },
        { id: 19, userId: "user567", content: "mdslfkmdslkfm 9", artist_id: 2 },
        { id: 20, userId: "user456", content: "jskdfdslflsdk A", artist_id: 2 },
      ];
      const fetchedComments3 = [
        {
          id: 21,
          userId: "user123",
          content: "This is comment 1",
          artist_id: 3,
        },
        {
          id: 22,
          userId: "user456",
          content: "msdf;dmsf;ldmsf; 2",
          artist_id: 3,
        },
        {
          id: 23,
          userId: "user123",
          content: "mdsf;dskm;flmds 3",
          artist_id: 3,
        },
        { id: 24, userId: "user012", content: "ds;mf;dlsmf; 4", artist_id: 3 },
        { id: 25, userId: "user456", content: "jelwfewkjflw 5", artist_id: 3 },
        { id: 26, userId: "user012", content: "mnsaldkasnld 6", artist_id: 3 },
        { id: 27, userId: "user456", content: "sdmlcfmlsd 7", artist_id: 3 },
        { id: 28, userId: "user567", content: "sdnlcmksdmkl 8", artist_id: 3 },
        { id: 29, userId: "user123", content: "dsm;fkmds;lmf 9", artist_id: 3 },
        {
          id: 30,
          userId: "user456",
          content: "dl;sf;dslmf;ldsm A",
          artist_id: 3,
        },
      ];
      const fetchedComments4 = [
        { id: 31, userId: "user012", content: "This comment 1", artist_id: 4 },
        {
          id: 32,
          userId: "user456",
          content: "slkfdjdlskjflsdkjf 2",
          artist_id: 4,
        },
        { id: 33, userId: "user123", content: "dslfdlsmflkdsm 3", artist_id: 4 },
        { id: 34, userId: "user567", content: "dsfnldsnlf 4", artist_id: 4 },
        { id: 35, userId: "user456", content: "sdnfldsnflsd 5", artist_id: 4 },
        {
          id: 36,
          userId: "user567",
          content: ";ksjdf;plesf;lsd 6",
          artist_id: 4,
        },
        { id: 37, userId: "user012", content: "ds;kfjdsfs 7", artist_id: 4 },
        { id: 38, userId: "user456", content: "lsdfknldks 8", artist_id: 4 },
        { id: 39, userId: "user123", content: "ds;d;lmf;ldsm 9", artist_id: 4 },
        { id: 40, userId: "user456", content: "Csdf;lmsd; A", artist_id: 4 },
      ];
      const fetchedComments5 = [
        {
          id: 41,
          userId: "user123",
          content: "Amazing artwork!",
          artist_id: 5,
        },
        {
          id: 42,
          userId: "user456",
          content: "Incredible piece!",
          artist_id: 5,
        },
        {
          id: 43,
          userId: "user567",
          content: "This artwork is mesmerizing.",
          artist_id: 5,
        },
        {
          id: 44,
          userId: "user456",
          content: "I'm blown away by this artwork.",
          artist_id: 5,
        },
        {
          id: 45,
          userId: "user567",
          content: "The details in this piece are remarkable.",
          artist_id: 5,
        },
        {
          id: 46,
          userId: "user456",
          content: "This artwork evokes strong emotions.",
          artist_id: 5,
        },
        {
          id: 47,
          userId: "user012",
          content: "The colors used are stunning.",
          artist_id: 5,
        },
        {
          id: 48,
          userId: "user567",
          content: "I'm captivated by this artwork.",
          artist_id: 5,
        },
        {
          id: 49,
          userId: "user123",
          content: "Impressive work!",
          artist_id: 5,
        },
        {
          id: 50,
          userId: "user567",
          content: "This piece is truly exceptional.",
          artist_id: 5,
        },
      ];
      const fetchedComments6 = [
        {
          id: 51,
          userId: "user123",
          content: "This artwork is impressive!",
          artist_id: 6,
        },
        {
          id: 52,
          userId: "user456",
          content: "I love the creativity in this piece.",
          artist_id: 6,
        },
        {
          id: 53,
          userId: "user567",
          content: "The composition is fantastic.",
          artist_id: 6,
        },
        {
          id: 54,
          userId: "user456",
          content: "The colors used are captivating.",
          artist_id: 6,
        },
        {
          id: 55,
          userId: "user567",
          content: "This artwork speaks to me.",
          artist_id: 6,
        },
        {
          id: 56,
          userId: "user456",
          content: "The attention to detail is remarkable.",
          artist_id: 6,
        },
        {
          id: 57,
          userId: "user012",
          content: "I'm truly inspired by this artwork.",
          artist_id: 6,
        },
        {
          id: 58,
          userId: "user567",
          content: "The texture in this piece is intriguing.",
          artist_id: 6,
        },
        {
          id: 59,
          userId: "user123",
          content: "This artist has great talent.",
          artist_id: 6,
        },
        {
          id: 60,
          userId: "user567",
          content: "I'm drawn to this artwork's uniqueness.",
          artist_id: 6,
        },
      ];
      const fetchedComments7 = [
        {
          id: 61,
          userId: "user123",
          content: "Great work! I'm impressed.",
          artist_id: 7,
        },
        {
          id: 62,
          userId: "user456",
          content: "The artistry in this piece is stunning.",
          artist_id: 7,
        },
        {
          id: 63,
          userId: "user567",
          content: "This artwork evokes deep emotions.",
          artist_id: 7,
        },
        {
          id: 64,
          userId: "user456",
          content: "The technique used is masterful.",
          artist_id: 7,
        },
        {
          id: 65,
          userId: "user567",
          content: "I can't take my eyes off this artwork.",
          artist_id: 7,
        },
        {
          id: 66,
          userId: "user456",
          content: "This piece resonates with me on a personal level.",
          artist_id: 7,
        },
        {
          id: 67,
          userId: "user012",
          content: "Incredible talent showcased here.",
          artist_id: 7,
        },
        {
          id: 68,
          userId: "user567",
          content: "I'm captivated by the composition.",
          artist_id: 7,
        },
        {
          id: 69,
          userId: "user123",
          content: "This artist's creativity knows no bounds.",
          artist_id: 7,
        },
        {
          id: 70,
          userId: "user567",
          content: "The message behind this artwork is powerful.",
          artist_id: 7,
        },
      ];
      const fetchedComments8 = [
        {
          id: 71,
          userId: "user123",
          content: "This artwork blew my mind!",
          artist_id: 8,
        },
        {
          id: 72,
          userId: "user456",
          content: "I'm in awe of the artist's talent.",
          artist_id: 8,
        },
        {
          id: 73,
          userId: "user567",
          content: "The creativity in this piece is outstanding.",
          artist_id: 8,
        },
        {
          id: 74,
          userId: "user456",
          content: "I'm speechless. What a masterpiece!",
          artist_id: 8,
        },
        {
          id: 75,
          userId: "user567",
          content: "This artwork deserves all the praise.",
          artist_id: 8,
        },
        {
          id: 76,
          userId: "user456",
          content: "I'm deeply moved by this artwork.",
          artist_id: 8,
        },
        {
          id: 77,
          userId: "user012",
          content: "The artist's skill shines through in this piece.",
          artist_id: 8,
        },
        {
          id: 78,
          userId: "user567",
          content: "Such a unique and captivating artwork.",
          artist_id: 8,
        },
        {
          id: 79,
          userId: "user123",
          content: "I can't get enough of this artist's work.",
          artist_id: 8,
        },
        {
          id: 80,
          userId: "user567",
          content: "This artwork is a true gem.",
          artist_id: 8,
        },
      ];
      const fetchedComments9 = [
        {
          id: 81,
          userId: "user123",
          content: "I'm amazed by this artwork!",
          artist_id: 9,
        },
        {
          id: 82,
          userId: "user456",
          content: "This artist's talent knows no bounds.",
          artist_id: 9,
        },
        {
          id: 83,
          userId: "user567",
          content: "The artistry in this piece is incredible.",
          artist_id: 9,
        },
        {
          id: 84,
          userId: "user456",
          content: "This artwork evokes so many emotions.",
          artist_id: 9,
        },
        {
          id: 85,
          userId: "user567",
          content: "I'm in awe of the artist's creativity.",
          artist_id: 9,
        },
        {
          id: 86,
          userId: "user456",
          content: "This artwork is truly inspiring.",
          artist_id: 9,
        },
        {
          id: 87,
          userId: "user012",
          content: "The artist's vision is captivating.",
          artist_id: 9,
        },
        {
          id: 88,
          userId: "user567",
          content: "I can't get enough of this artist's work.",
          artist_id: 9,
        },
        {
          id: 89,
          userId: "user123",
          content: "This artwork leaves a lasting impression.",
          artist_id: 9,
        },
        {
          id: 90,
          userId: "user567",
          content: "I'm mesmerized by this masterpiece.",
          artist_id: 9,
        },
      ];
      const fetchedComments10 = [
        {
          id: 91,
          userId: "user123",
          content: "This artwork speaks to my soul.",
          artist_id: 10,
        },
        {
          id: 92,
          userId: "user456",
          content: "I'm captivated by the artist's technique.",
          artist_id: 10,
        },
        {
          id: 93,
          userId: "user567",
          content: "This piece of art is truly remarkable.",
          artist_id: 10,
        },
        {
          id: 94,
          userId: "user456",
          content: "The artist's attention to detail is impressive.",
          artist_id: 10,
        },
        {
          id: 95,
          userId: "user567",
          content: "I'm in love with this artist's style.",
          artist_id: 10,
        },
        {
          id: 96,
          userId: "user456",
          content: "This artwork takes my breath away.",
          artist_id: 10,
        },
        {
          id: 97,
          userId: "user012",
          content: "The artist's talent shines through this piece.",
          artist_id: 10,
        },
        {
          id: 98,
          userId: "user567",
          content: "This art brings joy to my day.",
          artist_id: 10,
        },
        {
          id: 99,
          userId: "user123",
          content: "I can't stop admiring this masterpiece.",
          artist_id: 10,
        },
        {
          id: 100,
          userId: "user567",
          content: "This artwork is a true work of genius.",
          artist_id: 10,
        },
      ];
      const fetchedComments11 = [
        {
          id: 101,
          userId: "user123",
          content: "I'm amazed by the artist's creativity.",
          artist_id: 11,
        },
        {
          id: 102,
          userId: "user456",
          content: "This artwork evokes deep emotions.",
          artist_id: 11,
        },
        {
          id: 103,
          userId: "user567",
          content: "The artist's vision is truly inspiring.",
          artist_id: 11,
        },
        {
          id: 104,
          userId: "user456",
          content: "I can't get enough of this artist's work.",
          artist_id: 11,
        },
        {
          id: 105,
          userId: "user567",
          content: "This artwork tells a captivating story.",
          artist_id: 11,
        },
        {
          id: 106,
          userId: "user456",
          content: "I'm in awe of the artist's talent.",
          artist_id: 11,
        },
        {
          id: 107,
          userId: "user012",
          content: "This artwork pushes boundaries and challenges norms.",
          artist_id: 11,
        },
        {
          id: 108,
          userId: "user567",
          content: "The artist's unique style sets them apart.",
          artist_id: 11,
        },
        {
          id: 109,
          userId: "user123",
          content: "This artwork sparks my imagination.",
          artist_id: 11,
        },
        {
          id: 110,
          userId: "user567",
          content: "I'm inspired to create after seeing this art.",
          artist_id: 11,
        },
      ];
      const fetchedComments12 = [
        {
          id: 111,
          userId: "user123",
          content: "The artist's work is truly captivating.",
          artist_id: 12,
        },
        {
          id: 112,
          userId: "user456",
          content: "This artwork speaks to my soul.",
          artist_id: 12,
        },
        {
          id: 113,
          userId: "user567",
          content: "I'm mesmerized by the artist's attention to detail.",
          artist_id: 12,
        },
        {
          id: 114,
          userId: "user456",
          content: "The artist's creativity knows no bounds.",
          artist_id: 12,
        },
        {
          id: 115,
          userId: "user567",
          content: "This artwork is a true masterpiece.",
          artist_id: 12,
        },
        {
          id: 116,
          userId: "user456",
          content: "I'm inspired by the artist's unique perspective.",
          artist_id: 12,
        },
        {
          id: 117,
          userId: "user012",
          content: "This artwork evokes a sense of wonder.",
          artist_id: 12,
        },
        {
          id: 118,
          userId: "user567",
          content: "The artist's talent shines through their work.",
          artist_id: 12,
        },
        {
          id: 119,
          userId: "user123",
          content: "This artwork transports me to another world.",
          artist_id: 12,
        },
        {
          id: 120,
          userId: "user567",
          content: "I'm grateful to experience this artist's creations.",
          artist_id: 12,
        },
      ];

      const fetchedSlikaPonude1 = [
          { id: 1, userId: 'user123', content: '125', datetime: new Date('2023-06-27T10:30:00'), artwork_id:1, type:'s' },
          { id: 2, userId: 'user456', content: '350', datetime: new Date('2023-06-28T15:45:00'), artwork_id:1, type:'s' },
          { id: 3, userId: 'user567', content: '420', datetime: new Date('2023-06-29T09:15:00'), artwork_id:1, type:'s' },
          { id: 4, userId: 'user456', content: '500', datetime: new Date('2023-06-30T14:00:00'), artwork_id:1, type:'s' },
          { id: 5, userId: 'user012', content: '620', datetime: new Date('2023-07-01T11:20:00'), artwork_id:1, type:'s' },
          { id: 6, userId: 'user567', content: '650', datetime: new Date('2023-07-02T16:10:00'), artwork_id:1, type:'s' },
          { id: 7, userId: 'user123', content: '700', datetime: new Date('2023-07-03T13:45:00'), artwork_id:1, type:'s' },
          { id: 8, userId: 'user456', content: '840', datetime: new Date('2023-07-04T08:30:00'), artwork_id:1, type:'s' },
          { id: 9, userId: 'user567', content: '900', datetime: new Date('2023-07-05T17:00:00'), artwork_id:1, type:'s' },
          { id: 10, userId: 'user456', content: '1024', datetime: new Date('2023-07-06T12:15:00'), artwork_id:1, type:'s' }
      ];
      const fetchedSlikaPonude2 = [
          { id: 11, userId: 'user123', content: '125', datetime: new Date('2023-06-27T10:30:00'), artwork_id:2, type:'s' },
          { id: 12, userId: 'user456', content: '350', datetime: new Date('2023-06-28T15:45:00'), artwork_id:2, type:'s' },
          { id: 13, userId: 'user567', content: '420', datetime: new Date('2023-06-29T09:15:00'), artwork_id:2, type:'s' },
          { id: 14, userId: 'user456', content: '500', datetime: new Date('2023-06-30T14:00:00'), artwork_id:2, type:'s' },
          { id: 15, userId: 'user012', content: '620', datetime: new Date('2023-07-01T11:20:00'), artwork_id:2, type:'s' },
          { id: 16, userId: 'user567', content: '650', datetime: new Date('2023-07-02T16:10:00'), artwork_id:2, type:'s' },
          { id: 17, userId: 'user123', content: '700', datetime: new Date('2023-07-03T13:45:00'), artwork_id:2, type:'s' },
          { id: 18, userId: 'user456', content: '840', datetime: new Date('2023-07-04T08:30:00'), artwork_id:2, type:'s' },
          { id: 19, userId: 'user567', content: '900', datetime: new Date('2023-07-05T17:00:00'), artwork_id:2, type:'s' },
          { id: 20, userId: 'user456', content: '1024', datetime: new Date('2023-07-06T12:15:00'), artwork_id:2, type:'s' }
      ];
      const fetchedSlikaPonude3 = [
          { id: 21, userId: 'user123', content: '125', datetime: new Date('2023-06-27T10:30:00'), artwork_id:3, type:'s' },
          { id: 22, userId: 'user456', content: '350', datetime: new Date('2023-06-28T15:45:00'), artwork_id:3, type:'s' },
          { id: 23, userId: 'user567', content: '420', datetime: new Date('2023-06-29T09:15:00'), artwork_id:3, type:'s' },
          { id: 24, userId: 'user456', content: '500', datetime: new Date('2023-06-30T14:00:00'), artwork_id:3, type:'s' },
          { id: 25, userId: 'user012', content: '620', datetime: new Date('2023-07-01T11:20:00'), artwork_id:3, type:'s' },
          { id: 26, userId: 'user567', content: '650', datetime: new Date('2023-07-02T16:10:00'), artwork_id:3, type:'s' },
          { id: 27, userId: 'user123', content: '700', datetime: new Date('2023-07-03T13:45:00'), artwork_id:3, type:'s' },
          { id: 28, userId: 'user456', content: '840', datetime: new Date('2023-07-04T08:30:00'), artwork_id:3, type:'s' },
          { id: 29, userId: 'user567', content: '900', datetime: new Date('2023-07-05T17:00:00'), artwork_id:3, type:'s' },
          { id: 30, userId: 'user456', content: '1024', datetime: new Date('2023-07-06T12:15:00'), artwork_id:3, type:'s' }
      ]
      const fetchedSlikaPonude4 = [
          { id: 31, userId: 'user123', content: '125', datetime: new Date('2023-06-27T10:30:00'), artwork_id:4, type:'s' },
          { id: 32, userId: 'user456', content: '350', datetime: new Date('2023-06-28T15:45:00'), artwork_id:4, type:'s' },
          { id: 33, userId: 'user567', content: '420', datetime: new Date('2023-06-29T09:15:00'), artwork_id:4, type:'s' },
          { id: 34, userId: 'user456', content: '500', datetime: new Date('2023-06-30T14:00:00'), artwork_id:4, type:'s' },
          { id: 35, userId: 'user012', content: '620', datetime: new Date('2023-07-01T11:20:00'), artwork_id:4, type:'s' },
          { id: 36, userId: 'user567', content: '650', datetime: new Date('2023-07-02T16:10:00'), artwork_id:4, type:'s' },
          { id: 37, userId: 'user123', content: '700', datetime: new Date('2023-07-07T13:45:00'), artwork_id:4, type:'s' },
          { id: 38, userId: 'user456', content: '840', datetime: new Date('2023-07-04T08:30:00'), artwork_id:4, type:'s' },
          { id: 39, userId: 'user567', content: '900', datetime: new Date('2023-07-05T17:00:00'), artwork_id:4, type:'s' },
          { id: 40, userId: 'user456', content: '1024', datetime: new Date('2023-07-06T12:15:00'), artwork_id:4, type:'s' }
      ];

      const fetchedSkulpturaPonude1 = [
          { id: 1, userId: 'user123', content: '125', datetime: new Date('2023-06-27T10:30:00'), artwork_id:1, type:'e' },
          { id: 2, userId: 'user456', content: '350', datetime: new Date('2023-06-28T15:45:00'), artwork_id:1, type:'e' },
          { id: 3, userId: 'user567', content: '420', datetime: new Date('2023-06-29T09:15:00'), artwork_id:1, type:'e' },
          { id: 4, userId: 'user456', content: '500', datetime: new Date('2023-06-30T14:00:00'), artwork_id:1, type:'e' },
          { id: 5, userId: 'user012', content: '620', datetime: new Date('2023-07-01T11:20:00'), artwork_id:1, type:'e' },
          { id: 6, userId: 'user567', content: '650', datetime: new Date('2023-07-02T16:10:00'), artwork_id:1, type:'e' },
          { id: 7, userId: 'user123', content: '700', datetime: new Date('2023-07-03T13:45:00'), artwork_id:1, type:'e' },
          { id: 8, userId: 'user456', content: '840', datetime: new Date('2023-07-04T08:30:00'), artwork_id:1, type:'e' },
          { id: 9, userId: 'user567', content: '900', datetime: new Date('2023-07-05T17:00:00'), artwork_id:1, type:'e' },
          { id: 10, userId: 'user456', content: '1024', datetime: new Date('2023-07-06T12:15:00'), artwork_id:1, type:'e' }
      ];
      const fetchedSkulpturaPonude2 = [
          { id: 11, userId: 'user123', content: '125', datetime: new Date('2023-06-27T10:30:00'), artwork_id:2, type:'e' },
          { id: 12, userId: 'user456', content: '350', datetime: new Date('2023-06-28T15:45:00'), artwork_id:2, type:'e' },
          { id: 13, userId: 'user567', content: '420', datetime: new Date('2023-06-29T09:15:00'), artwork_id:2, type:'e' },
          { id: 14, userId: 'user456', content: '500', datetime: new Date('2023-06-30T14:00:00'), artwork_id:2, type:'e'},
          { id: 15, userId: 'user012', content: '620', datetime: new Date('2023-07-01T11:20:00'), artwork_id:2, type:'e' },
          { id: 16, userId: 'user567', content: '650', datetime: new Date('2023-07-02T16:10:00'), artwork_id:2, type:'e' },
          { id: 17, userId: 'user123', content: '700', datetime: new Date('2023-07-03T13:45:00'), artwork_id:2, type:'e' },
          { id: 18, userId: 'user456', content: '840', datetime: new Date('2023-07-04T08:30:00'), artwork_id:2, type:'e' },
          { id: 19, userId: 'user567', content: '900', datetime: new Date('2023-07-05T17:00:00'), artwork_id:2, type:'e' },
          { id: 20, userId: 'user456', content: '1024', datetime: new Date('2023-07-06T12:15:00'), artwork_id:2, type:'e' }
      ];
      const fetchedSkulpturaPonude3 = [
          { id: 21, userId: 'user123', content: '125', datetime: new Date('2023-06-27T10:30:00'), artwork_id:3, type:'e' },
          { id: 22, userId: 'user456', content: '350', datetime: new Date('2023-06-28T15:45:00'), artwork_id:3, type:'e' },
          { id: 23, userId: 'user567', content: '420', datetime: new Date('2023-06-29T09:15:00'), artwork_id:3, type:'e' },
          { id: 24, userId: 'user456', content: '500', datetime: new Date('2023-06-30T14:00:00'), artwork_id:3, type:'e' },
          { id: 25, userId: 'user012', content: '620', datetime: new Date('2023-07-01T11:20:00'), artwork_id:3, type:'e' },
          { id: 26, userId: 'user567', content: '650', datetime: new Date('2023-07-02T16:10:00'), artwork_id:3, type:'e' },
          { id: 27, userId: 'user123', content: '700', datetime: new Date('2023-07-03T13:45:00'), artwork_id:3, type:'e' },
          { id: 28, userId: 'user456', content: '840', datetime: new Date('2023-07-04T08:30:00'), artwork_id:3, type:'e' },
          { id: 29, userId: 'user567', content: '900', datetime: new Date('2023-07-05T17:00:00'), artwork_id:3, type:'e' },
          { id: 30, userId: 'user456', content: '1024', datetime: new Date('2023-07-06T12:15:00'), artwork_id:3, type:'e' }
      ]
      const fetchedSkulpturaPonude4 = [
          { id: 31, userId: 'user123', content: '125', datetime: new Date('2023-07-27T10:30:00'), artwork_id:4, type:'e' },
          { id: 32, userId: 'user456', content: '350', datetime: new Date('2023-06-28T15:45:00'), artwork_id:4, type:'e' },
          { id: 33, userId: 'user567', content: '420', datetime: new Date('2023-06-29T09:15:00'), artwork_id:4, type:'e' },
          { id: 34, userId: 'user456', content: '500', datetime: new Date('2023-06-30T14:00:00'), artwork_id:4, type:'e' },
          { id: 35, userId: 'user012', content: '620', datetime: new Date('2023-07-01T11:20:00'), artwork_id:4, type:'e' },
          { id: 36, userId: 'user567', content: '650', datetime: new Date('2023-07-02T16:10:00'), artwork_id:4, type:'e' },
          { id: 37, userId: 'user123', content: '700', datetime: new Date('2023-07-03T13:45:00'), artwork_id:4, type:'e' },
          { id: 38, userId: 'user456', content: '840', datetime: new Date('2023-07-04T08:30:00'), artwork_id:4, type:'e' },
          { id: 39, userId: 'user567', content: '900', datetime: new Date('2023-07-05T17:00:00'), artwork_id:4, type:'e' },
          { id: 40, userId: 'user456', content: '1024', datetime: new Date('2023-07-06T12:15:00'), artwork_id:4, type:'e' }
      ];

      const fetchedKreaturaPonude1 = [
          { id: 1, userId: 'user123', content: '125', datetime: new Date('2023-06-27T10:30:00'), artwork_id:1, type:'x' },
          { id: 2, userId: 'user456', content: '350', datetime: new Date('2023-06-28T15:45:00'), artwork_id:1, type:'x' },
          { id: 3, userId: 'user567', content: '420', datetime: new Date('2023-06-29T09:15:00'), artwork_id:1, type:'x' },
          { id: 4, userId: 'user456', content: '500', datetime: new Date('2023-06-30T14:00:00'), artwork_id:1, type:'x' },
          { id: 5, userId: 'user012', content: '620', datetime: new Date('2023-07-01T11:20:00'), artwork_id:1, type:'x' },
          { id: 6, userId: 'user567', content: '650', datetime: new Date('2023-07-02T16:10:00'), artwork_id:1, type:'x' },
          { id: 7, userId: 'user123', content: '700', datetime: new Date('2023-07-03T13:45:00'), artwork_id:1, type:'x' },
          { id: 8, userId: 'user456', content: '840', datetime: new Date('2023-07-04T08:30:00'), artwork_id:1, type:'x' },
          { id: 9, userId: 'user567', content: '900', datetime: new Date('2023-07-05T17:00:00'), artwork_id:1, type:'x' },
          { id: 10, userId: 'user456', content: '1024', datetime: new Date('2023-07-06T12:15:00'), artwork_id:1, type:'x' }
      ];
      const fetchedKreaturaPonude2 = [
          { id: 11, userId: 'user123', content: '125', datetime: new Date('2023-06-27T10:30:00'), artwork_id:2, type:'x' },
          { id: 12, userId: 'user456', content: '350', datetime: new Date('2023-06-28T15:45:00'), artwork_id:2, type:'x' },
          { id: 13, userId: 'user567', content: '420', datetime: new Date('2023-06-29T09:15:00'), artwork_id:2, type:'x' },
          { id: 14, userId: 'user456', content: '500', datetime: new Date('2023-06-30T14:00:00'), artwork_id:2, type:'x' },
          { id: 15, userId: 'user012', content: '620', datetime: new Date('2023-07-01T11:20:00'), artwork_id:2, type:'x' },
          { id: 16, userId: 'user567', content: '650', datetime: new Date('2023-07-02T16:10:00'), artwork_id:2, type:'x' },
          { id: 17, userId: 'user123', content: '700', datetime: new Date('2023-07-03T13:45:00'), artwork_id:2, type:'x' },
          { id: 18, userId: 'user456', content: '840', datetime: new Date('2023-07-04T08:30:00'), artwork_id:2, type:'x' },
          { id: 19, userId: 'user567', content: '900', datetime: new Date('2023-07-05T17:00:00'), artwork_id:2, type:'x' },
          { id: 20, userId: 'user456', content: '1024', datetime: new Date('2023-07-06T12:15:00'), artwork_id:2, type:'x' }
      ];
      const fetchedKreaturaPonude3 = [
          { id: 21, userId: 'user123', content: '125', datetime: new Date('2023-06-27T10:30:00'), artwork_id:3, type:'x' },
          { id: 22, userId: 'user456', content: '350', datetime: new Date('2023-06-28T15:45:00'), artwork_id:3, type:'x' },
          { id: 23, userId: 'user567', content: '420', datetime: new Date('2023-06-29T09:15:00'), artwork_id:3, type:'x' },
          { id: 24, userId: 'user456', content: '500', datetime: new Date('2023-06-30T14:00:00'), artwork_id:3, type:'x' },
          { id: 25, userId: 'user012', content: '620', datetime: new Date('2023-07-01T11:20:00'), artwork_id:3, type:'x' },
          { id: 26, userId: 'user567', content: '650', datetime: new Date('2023-07-02T16:10:00'), artwork_id:3, type:'x' },
          { id: 27, userId: 'user123', content: '700', datetime: new Date('2023-07-03T13:45:00'), artwork_id:3, type:'x' },
          { id: 28, userId: 'user456', content: '840', datetime: new Date('2023-07-04T08:30:00'), artwork_id:3, type:'x' },
          { id: 29, userId: 'user567', content: '900', datetime: new Date('2023-07-05T17:00:00'), artwork_id:3, type:'x' },
          { id: 30, userId: 'user456', content: '1024', datetime: new Date('2023-07-06T12:15:00'), artwork_id:3, type:'x' }
      ]
      const fetchedKreaturaPonude4 = [
          { id: 31, userId: 'user123', content: '125', datetime: new Date('2023-06-27T10:30:00'), artwork_id:4, type:'x' },
          { id: 32, userId: 'user456', content: '350', datetime: new Date('2023-06-28T15:45:00'), artwork_id:4, type:'x' },
          { id: 33, userId: 'user567', content: '420', datetime: new Date('2023-06-29T09:15:00'), artwork_id:4, type:'x' },
          { id: 34, userId: 'user456', content: '500', datetime: new Date('2023-06-30T14:00:00'), artwork_id:4, type:'x' },
          { id: 35, userId: 'user012', content: '620', datetime: new Date('2023-07-01T11:20:00'), artwork_id:4, type:'x' },
          { id: 36, userId: 'user567', content: '650', datetime: new Date('2023-07-02T16:10:00'), artwork_id:4, type:'x' },
          { id: 37, userId: 'user123', content: '700', datetime: new Date('2023-07-03T13:45:00'), artwork_id:4, type:'x' },
          { id: 38, userId: 'user456', content: '840', datetime: new Date('2023-07-04T08:30:00'), artwork_id:4, type:'x' },
          { id: 39, userId: 'user567', content: '900', datetime: new Date('2023-07-05T17:00:00'), artwork_id:4, type:'x' },
          { id: 40, userId: 'user456', content: '1024', datetime: new Date('2023-07-06T12:15:00'), artwork_id:4, type:'x' }
      ];

      this.allComments.push(
        ...fetchedComments1,
        ...fetchedComments2,
        ...fetchedComments3,
        ...fetchedComments4,
        ...fetchedComments5,
        ...fetchedComments6,
        ...fetchedComments7,
        ...fetchedComments8,
        ...fetchedComments9,
        ...fetchedComments10,
        ...fetchedComments11,
        ...fetchedComments12
      );
      this.allOffers.push(
        ...fetchedSlikaPonude1,
        ...fetchedSlikaPonude2,
        ...fetchedSlikaPonude3,
        ...fetchedSlikaPonude4,
        ...fetchedSkulpturaPonude1,
        ...fetchedSkulpturaPonude2,
        ...fetchedSkulpturaPonude3,
        ...fetchedSkulpturaPonude4,
        ...fetchedKreaturaPonude1,
        ...fetchedKreaturaPonude2,
        ...fetchedKreaturaPonude3,
        ...fetchedKreaturaPonude4
      );
      
      localStorage.setItem("allComments", JSON.stringify(this.allComments));
      localStorage.setItem("allOffers", JSON.stringify(this.allOffers));
    }
    else {
      this.allComments = JSON.parse(localStorage.getItem("allComments"));
      this.allOffers = JSON.parse(localStorage.getItem("allOffers"));
    }
    this.currArtists = [
      allArtists[0],
      allArtists[1],
      allArtists[4],
      allArtists[8]
    ];
    this.currUmetnine = [
      allImages[0],
      allImages[1],
      allSculptures[0],
      allCreations[0]
    ];
  },
  mounted() {
    document.title = 'L&P gallery - Pocetna';
  },
  computed: {
    latestOffers() {
      return this.allOffers
        .map(offer => ({
          ...offer,
          datetime: typeof offer.datetime === 'string' ? new Date(offer.datetime) : offer.datetime
        }))
        .sort((a, b) => b.datetime.getTime() - a.datetime.getTime())
        .slice(0, 4);
    }
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
    getCategoryName(type) {
      if (type == "s") return "Slika";
      if (type == "e") return "Skulptura";
      if (type == "x") return "Moda";
    }
  }
};
</script>

<style lang="less" scoped>
  .hero {
    position: relative;
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/background.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.7; /* Adjust the opacity as needed */
  }

  .hero-content {
    position: relative;
    text-align: center;
    padding: 50px;
    color: #fff;
  }

  .logo {
    max-width: 200px;
    margin-bottom: 20px;
  }

  .title {
    font-size: 2.5rem;
    color: black;
    text-align: center;
    font-style: italic;
  }

  .highlight {
    color: #ff4081;
  }

  .container-fluid {
  text-align: center;
  border: 5px solid #C4A484;
  padding: 20px;
  background-color: #F9F4F2;
}

.container-fluid h2 {
  color: #8B5D33;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.card {
  margin-top: 10px;
  margin-bottom: 10px;
}

.card-title {
  color: plum;
}

.card-img {
  width: 130%;
  height: 200px;
}
</style>