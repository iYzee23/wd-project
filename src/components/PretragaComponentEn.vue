<template>
    <div style="width: 300px; display: inline-block;">
        <div class="row">
          <div class="col">
            <div class="input-group">
              <input type="text" class="form-control" name="pretraga" id="pretraga" placeholder="Search" v-model="pretraga" @keyup.enter="pretragica()">
              <select class="form-select" name="izbor" id="izbor" v-model="izbor">
                <option value="umetnik">Artist</option>
                <option value="slika">Image</option>
                <option value="skulptura">Sculpture</option>
                <option value="moda">Fashion</option>
              </select>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import allArtists from '../data/allArtists.js'
import allCreations from '../data/allCreations.js'
import allImages from '../data/allImages.js'
import allSculptures from '../data/allSculptures.js'

export default {
  name: "PretragaComponentEn",
  data() {
    return {
      pretraga: "",
      izbor: "umetnik"
    }
  },
  methods: {
    pretragica() {
      if (this.izbor == "umetnik") {
        let umetnik = allArtists.find(art => this.pretraga.toLowerCase() == art.artist_name.toLowerCase());
        if (!umetnik) return;
        this.$router.push("/umetnik/" + umetnik.artist_id);
        this.pretraga = "";
      }
      else if (this.izbor == "slika") {
        let slika = allImages.find(img => this.pretraga.toLowerCase() == img.image_name.toLowerCase());
        if (!slika) return;
        this.$router.push("/slika/" + slika.image_id);
        this.pretraga = "";
      }
      else if (this.izbor == "skulptura") {
        let skulp = allSculptures.find(sclp => this.pretraga.toLowerCase() == sclp.sculpture_name.toLowerCase());
        if (!skulp) return; 
        this.$router.push("/skulptura/" + skulp.sculpture_id);
        this.pretraga = "";
      }
      else {
        let kreacija = allCreations.find(crt => this.pretraga.toLowerCase() == crt.creation_name.toLowerCase());
        if (!kreacija) return; 
        this.$router.push("/kreacija/" + kreacija.creation_id);
        this.pretraga = "";
      }
    }
  }
}
</script>