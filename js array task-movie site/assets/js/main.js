var photos =[
    {
        img:"https://pad.mymovies.it/filmclub/2008/06/082/locandina.jpg",
        name:"Leon",
        desc:"Dram,action",
        bal:"bal"
    },  
    {
        img:"https://cdn.chili.com/images/public/cms/e0/6c/3e/f9/e06c3ef9-a404-4dc6-9e98-3a1d01515df3.jpg?width=800",
        name:"Home alone",
        desc:"The funny family film",
        bal:"bal"
    }, 
    {
        img:"https://www.philasun.com/wp-content/uploads/2021/11/3EB686DC-1E9E-4FE0-8A32-2CFE47EC98C0.jpeg",
        name:"Welcome to earth",
        desc:"Fantastic",
        bal:"bal"
    }, 
    {
        img:"https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg",
        name:"Inception",
        desc:"Fantastic",
        bal:"bal"
    }, 
    {
        img:"https://resizing.flixster.com/5hujVgEBlIlAiTmnGQqMOAH3txs=/206x305/v2/https://flxt.tmsimg.com/assets/p24429_p_v12_bf.jpg",
        name:"Green Mile",
        desc:"Dram",
        bal:"bal"
    },
    {
        img:"https://m.media-amazon.com/images/I/91y51uzkbhL._AC_UF894,1000_QL80_.jpg",
        name:"Benjamin Button",
        desc:"Fantastic",
        bal:"bal"
    },
    {
        img:"https://m.media-amazon.com/images/M/MV5BNTE1M2NjNDgtYjQ2Ny00YTMzLWJiYWQtMTdmM2Q2YjA1MDg1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        name:"Deep Water",
        desc:"Dram",
        bal:"bal"
    },
    {
        img:"https://blogs.libraries.indiana.edu/wp-content/uploads/2019/10/Robi-blog-post-Fall-2019-pic-1.png",
        name:"A beautiful mind",
        desc:"Scientific",
        bal:"bal"
    },
    {
        img:"https://flxt.tmsimg.com/assets/p8051212_p_v8_ax.jpg",
        name:"Hachiko",
        desc:"Drama",
        bal:"bal"
    },
    {
        img:"https://i.ytimg.com/vi/oQrNOh-KMuE/movieposter.jpg",
        name:"The Swallows",
        desc:"action",
        bal:"bal"
    }
]
for(let i=0; i< photos.length; i++){
  area.innerHTML +=` <div class="img1">
  <img src="${photos [i].img}" alt="" >
  <div class="bal">
     <p>${photos [i].bal}</p> 
  </div>
  <h3>${photos [i].name}</h3>
  <h6>${photos [i].desc}</h6>
  </div>`   
}