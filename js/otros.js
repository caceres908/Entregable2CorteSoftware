url = 'http://ec2-34-232-92-62.compute-1.amazonaws.com:5000'; // se configura un ruta elastica para que siempre se renga la misma url

var pro = []
var arete = {}

var app = new Vue({  //se crea el objeto de vue
    el: '#app',
    data: {                   //data que va a susar el progrma
        productos: pro,
        producto: arete
    },
    created: function () {  //se usa la funcion created para que al momento de ingresar a la pagina esta carge los datos
        this.get_datos();
    },
    methods: {
        get_datos: function () {
            axios.get(url + '/Otros')
                .then(response => {
                    this.productos = response.data.results; // se llena la data producto
                    console.log('Get list Products', this.productos);
                })
                .catch(error => console.error(error));
        },
        arete_unico: function (u) {
            document.getElementById('caja1').innerHTML = "";
            axios.get(url +'/Otro/'+u.Codigo) //se agrega el codigo para poder traer la informacion espesifica de un producto
                .then(response => {
                    this.producto = response.data.results;
                    console.log('Get list Products', this.producto);
                    document.getElementById('caja1').innerHTML = "<div id='conjunto'>" + "Nombre: "  //se genera la informacion del profucto dianmicamente
                        + this.producto.Nombre + "<br>" + "Descripcion: " + this.producto.Descripcion + "<br>" +
                        "<img id='Individual' src= '" + this.producto.Imagen + "'>" + "<br>" + "Precio: " + this.producto.Precio +
                        "</div>";
                })
                .catch(error => console.error(error));
        }
    }
})