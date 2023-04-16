var photos =[
    {
        img:"https://pad.mymovies.it/filmclub/2008/06/082/locandina.jpg",
        name:"Leon",
        desc:"Dram",
        bal:"bal"
    },  
    {
        img:"https://pad.mymovies.it/filmclub/2008/06/082/locandina.jpg",
        name:"Leon",
        desc:"Dram",
        bal:"bal"
    }, 
    {
        img:"https://pad.mymovies.it/filmclub/2008/06/082/locandina.jpg",
        name:"Leon",
        desc:"Dram",
        bal:"bal"
    }, 
    {
        img:"https://pad.mymovies.it/filmclub/2008/06/082/locandina.jpg",
        name:"Leon",
        desc:"Dram",
        bal:"bal"
    }, 
    {
        img:"https://pad.mymovies.it/filmclub/2008/06/082/locandina.jpg",
        name:"Leon",
        desc:"Dram",
        bal:"bal"
    },
    {
        img:"https://pad.mymovies.it/filmclub/2008/06/082/locandina.jpg",
        name:"Leon",
        desc:"Dram",
        bal:"bal"
    },
    {
        img:"https://pad.mymovies.it/filmclub/2008/06/082/locandina.jpg",
        name:"Leon",
        desc:"Dram",
        bal:"bal"
    },
    {
        img:"https://pad.mymovies.it/filmclub/2008/06/082/locandina.jpg",
        name:"Leon",
        desc:"Dram",
        bal:"bal"
    },
    {
        img:"https://pad.mymovies.it/filmclub/2008/06/082/locandina.jpg",
        name:"Leon",
        desc:"Dram",
        bal:"bal"
    },
    {
        img:"https://pad.mymovies.it/filmclub/2008/06/082/locandina.jpg",
        name:"Leon",
        desc:"Dram",
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