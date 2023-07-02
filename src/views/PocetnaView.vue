<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "PocetnaView",
  data() {
    return {
      allComments: [],
      allOffers: [],
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
      this.allComments.push(
        ...fetchedComments1,
        ...fetchedComments2,
        ...fetchedComments3,
        ...fetchedComments4
      );
      localStorage.setItem("allComments", JSON.stringify(this.allComments));

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
            { id: 37, userId: 'user123', content: '700', datetime: new Date('2023-07-03T13:45:00'), artwork_id:4, type:'s' },
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
            { id: 31, userId: 'user123', content: '125', datetime: new Date('2023-06-27T10:30:00'), artwork_id:4, type:'e' },
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
      localStorage.setItem("allOffers", JSON.stringify(this.allOffers));
    }
  },
};
</script>
