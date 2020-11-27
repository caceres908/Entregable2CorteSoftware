url = 'http://ec2-54-237-79-168.compute-1.amazonaws.com:5000';

var app = new Vue({
    el: '#app',
    data: {
        datos: null

    },
    created: function () {
        this.f();
    },
    methods: {
        f: function () {
            axios.get(url+'/productosM')
                .then(response => {
                    this.datos = response.data.data;
                    console.log('Get list users', this.datos)
                })
                .catch(error => console.error(error));
        },
        detalle: function (u) {
            document.body.innerHTML = "";
            axios.get('https://reqres.in/api/users/' + u.id)
                .then(response => {
                    const da = response.data.data;
                    console.log(`GET list users`, da);
                    document.body.innerHTML = "<div id='c1'>" + "Id: " + da.id + "<br>" +
                        "Nombre: " + da.first_name + "<br>" + "Apellido: " + da.last_name + "<br>"
                        + "Email: " + da.email + "<br>" + "<a href='EjercicosAxios.html' id='c2'>Inicio</a>" + "</div>";
                })
                .catch(error => console.error(error));
        }
    }
})