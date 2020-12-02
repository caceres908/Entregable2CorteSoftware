url = 'http://ec2-34-232-92-62.compute-1.amazonaws.com:5000';

var pro = []
var arete = {}

var app = new Vue({
    el: '#app',
    data: {
        productos: pro,
        producto: arete
    },
    created: function () {
        this.get_datos();
    },
    methods: {
        get_datos: function () {
            axios.get(url + '/Collares')
                .then(response => {
                    this.productos = response.data.results;
                    console.log('Get list Products', this.productos);
                })
                .catch(error => console.error(error));
        },
        arete_unico: function (u) {
            document.getElementById('caja1').innerHTML = "";
            axios.get(url +'/Collar/'+u.Codigo)
                .then(response => {
                    this.producto = response.data.results;
                    console.log('Get list Products', this.producto);
                    document.getElementById('caja1').innerHTML = "<div>" + "Nombre: "
                        + this.producto.Nombre + "<br>" + "Descripcion: " + this.producto.Descripcion + "<br>" +
                        "<img id='Individual' src= '" + this.producto.Imagen + "'>" + "<br>" + "Precio: " + this.producto.Precio +
                        "</div>";
                })
                .catch(error => console.error(error));
        }
    }
})