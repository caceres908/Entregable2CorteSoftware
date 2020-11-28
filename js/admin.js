url = 'http://ec2-54-237-79-168.compute-1.amazonaws.com:5000';
var losdatos = []

var app = new Vue({
    el: '#app',
    data: {
        datos: losdatos,
        nom: '',
        corre: '',
        con: '',
        tel: '',
        dire: ''
    },
    created: function () {
        this.f();
    },
    methods: {
        f: function () {
            axios.get(url + '/usuarioG')
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        },
        crear: function () {
            document.getElementById('table').innerHTML="";
            path = url + '/usuarioC';
            const data = {
                nombre: this.nom,
                correo: this.corre,
                con: this.con,
                tel: this.tel,
                dire: this.dire
            };
            axios.post(path, data)
                .then(() => {
                    this.f();
                })
                .catch((error) => {
                    // eslint-disable-next-line
                    console.log(error);
                    this.f();
                });
            this.clear();
        },
        clear: function () {
            this.nom = '';
            this.corre = '';
            this.con = '';
            this.tel = '';
            this.dire = '';
        }
    }
})