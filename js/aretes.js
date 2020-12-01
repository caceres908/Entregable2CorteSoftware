url = 'http://ec2-34-232-92-62.compute-1.amazonaws.com:5000';

var pro = []

var app = new Vue({
    el: '#app',
    data: {
        productos: pro,
    },
    created: function () {
        this.get_datos();
    },
    methods: {
        get_datos: function () {
            axios.get(url + '/Aretes')
                .then(response => {
                    this.productos = response.data.results;
                    console.log('Get list Products', this.productos);
                })
                .catch(error => console.error(error));
        },
        arete_unico: function (u) {
            document.getElementById('caja1').innerHTML = "";
            axios.get(url +'/Arete/'+u.Codigo)
                .then(response => {
                    const da = response.data.results;
                    console.log('Get list Products', da);
                    document.getElementById('caja1').innerHTML = "<div>" + "Nombre: "
                        + da.Nombre + "<br>" + "Descripcion: " + da.Descripcion + "<br>" +
                        "<img src= '" + da.Imagen + "'>" + "<br>" + "Precio: " + da.Precio +
                        "</div>";
                })
                .catch(error => console.error(error));
        }
    }
})