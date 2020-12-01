url = 'http://ec2-34-232-92-62.compute-1.amazonaws.com:5000';
var losdatos = []

// Usuarios

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
            document.getElementById('table').innerHTML = "";
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
        },
        actu: function () {
            document.getElementById('table').innerHTML = "";
            document.getElementById('d1').innerHTML = "";
            document.getElementById('d3').innerHTML = "";
            path = url + '/usuariop';
            const data = {
                nombre: this.nom,
                correo: this.corre,
                con: this.con,
                tel: this.tel,
                dire: this.dire
            };
            axios.put(path, data)
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
        eli: function () {
            document.getElementById('table').innerHTML = "";
            document.getElementById('d1').innerHTML = "";
            document.getElementById('d2').innerHTML = "";
            path = url + '/usuariob';
            axios.delete(path, { headers: {}, data: { correo: this.corre } })
                .then((response) => {
                    console.log(response)
                    this.f();
                })
                .catch((error) => {
                    // eslint-disable-next-line
                    console.log(error.request);
                    this.f();
                });
            this.clear();
        }
    }
})

// Productos

var pro = []

var app2 = new Vue({
    el: '#app2',
    data: {
        productos: pro,
        nom: '',
        des: '',
        pre: '',
        img: '',
        cat: ''
    },
    created: function () {
        this.get_datos();
    },
    methods: {
        get_datos: function () {
            axios.get(url + '/productosG')
                .then(response => {
                    this.productos = response.data.results;
                    console.log('Get list Products', this.productos);
                })
                .catch(error => console.error(error));
        },
        crear_producto: function () {
            document.getElementById('table2').innerHTML = "";
            path = url + '/productosP';
            const data = {
                nombre: this.nom,
                descripcion: this.des,
                precio: this.pre,
                imagen: this.img,
                categoria: this.cat
            };
            axios.post(path, data)
                .then(() => {
                    this.get_datos();
                })
                .catch((error) => {
                    console.log(error)
                    this.get_datos();
                })
            this.clear_products();
        },
        clear_products: function () {
            this.nom = '';
            this.des = '';
            this.pre = '';
            this.img = '';
            this.cat = '';
        },
        update_products: function () {
            document.getElementById('table2').innerHTML = "";
            document.getElementById('d4').innerHTML = "";
            path = url + '/productosA';
            const data = {
                nombre: this.nom,
                descripcion: this.des,
                precio: this.pre,
                imagen: this.img,
                categoria: this.cat
            };
            axios.put(path, data)
                .then(() => {
                    this.get_datos();
                })
                .catch((error) => {
                    console.log(error)
                    this.get_datos();
                })
            this.clear_products();
        },
        delete_products: function () {
            document.getElementById('table2').innerHTML = "";
            document.getElementById('d4').innerHTML = "";
            document.getElementById('d5').innerHTML = "";
            path = url + '/productosD';
            axios.delete(path, { headers: {}, data: { nombre: this.nom } })
                .then(() => {
                    this.get_datos();
                })
                .catch((error) => {
                    console.log(error)
                    this.get_datos();
                })
            this.clear_products();
        }
    }

})