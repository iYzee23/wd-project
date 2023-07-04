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
import allArtistsEn from '../data/allArtistsEn.js'
import allCreationsEn from '../data/allCreationsEn.js'
import allImagesEn from '../data/allImagesEn.js'
import allSculpturesEn from '../data/allSculpturesEn.js'

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
        let umetnik = allArtistsEn.find(art => this.pretraga.toLowerCase() == art.artist_name.toLowerCase());
        if (!umetnik) return;
        this.$router.push("/EN/umetnik/" + umetnik.artist_id);
        this.pretraga = "";
      }
      else if (this.izbor == "slika") {
        let slika = allImagesEn.find(img => this.pretraga.toLowerCase() == img.image_name.toLowerCase());
        if (!slika) return;
        this.$router.push("/EN/slika/" + slika.image_id);
        this.pretraga = "";
      }
      else if (this.izbor == "skulptura") {
        let skulp = allSculpturesEn.find(sclp => this.pretraga.toLowerCase() == sclp.sculpture_name.toLowerCase());
        if (!skulp) return; 
        this.$router.push("/EN/skulptura/" + skulp.sculpture_id);
        this.pretraga = "";
      }
      else {
        let kreacija = allCreationsEn.find(crt => this.pretraga.toLowerCase() == crt.creation_name.toLowerCase());
        if (!kreacija) return; 
        this.$router.push("/EN/kreacija/" + kreacija.creation_id);
        this.pretraga = "";
      }
    }
  }
}
</script>