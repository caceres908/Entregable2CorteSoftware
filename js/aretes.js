$('.special.cards .image').dimmer({
    on: 'hover'
  });

var pro = []

  var app = new Vue({
      el: '#app',
      data:{
          productos: pro
      },
      created: function(){
        this.get_datos()
      },
      methos:{
        get_datos: function () {
            axios.get(url + '/productosG')
                .then(response => {
                    this.productos = response.data.results;
                    console.log('Get list Products', this.productos);
                })
                .catch(error => console.error(error));
        }
      }
  })