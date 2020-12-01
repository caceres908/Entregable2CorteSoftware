url = 'http://ec2-34-232-92-62.compute-1.amazonaws.com:5000';

$('.special.cards .image').dimmer({
    on: 'hover'
});

var pro = []

var app = new Vue({
    el: '#app',
    data: {
        productos: pro
    },
    created: function () {
        this.get_datos();
    },
    methos: {
        get_datos: function () {
            axios.get(url + '/Aretes')
                .then(response => {
                    this.productos = response.data.results;
                    console.log('Get list Products', this.productos);
                })
                .catch(error => console.error(error));
        }
    }
})