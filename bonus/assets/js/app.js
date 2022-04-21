/* 
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/
const app = new Vue({
  el: "#app",
  data: {
    locations: [
      {
        image: "./assets/img/01.jpg",
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
      },
      {
        image: "./assets/img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum.",
      },
      {
        image: "./assets/img/03.jpg",
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        image: "./assets/img/04.jpg",
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
      },
      {
        image: "./assets/img/05.jpg",
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
      },
    ],
    active_image: 0,
    my_intervarl : '',
  },
  methods: {
    prev_img() {
      if (this.active_image === 0) {
        this.active_image = this.locations.length;
      }
      this.active_image--;
    },
    next_img() {
      this.active_image++;
      if (this.active_image === this.locations.length) {
        this.active_image = 0;
      }
    },
    autoplay() {
      this.my_interval = setInterval(function () {
        app.active_image++;
        if (app.active_image === app.locations.length) {
          app.active_image = 0;
        }
      }, 3000);
    },
    block(){
      clearInterval(this.my_interval)
    }
  },
  mounted() {
    this.autoplay();
  },
});
