Vue.component('people', {
    
    template: '<div> <section v-for="person in people"><img :src="person.foto" /></section> </div>',

    mounted() {
        axios.get("https://randomuser.me/api/?results=100")
            .then((datos) => {
                console.log(datos);
                const listado = datos.data.results.map((usuario) => {
                    return {
                        nombre: '${usuario.name.title} ${usuario.name.first} ${usuario.name.last}',
                        correo: usuario.email,
                        foto: usuario.picture.medium,

                    }
                });

                this.people = listado;

            });
    },


    data() {
        return {
            people: []
        }
    }
});

Vue.filter('toUpperCase', (valor) => valor.toUpperCase());

const vm = new Vue({
    el: 'main',
    data: {
        show_title: true,
        nueva_tarea: null,
        tareas: [
            { tarea: "Aprender Vue", completado: true },
            { tarea: "Instalar Android", completado: false },
            { tarea: "Cobrar 300 dolares", completado: false },
        ],
    },
    methods: {
        on_off_tarea_completada(tarea) {
            tarea.completado = !tarea.completado;
        },
        add_tarea() {
            this.tareas.push({ tarea: this.nueva_tarea, completado: false });
            this.nueva_tarea = null;
            this.cantidad_tareas = this.tareas.length;
        }
    },
    computed: {
        tareas_completadas() {
            return this.tareas.filter((tarea) => tarea.completado);
        },
        cantidad_tareas() {
            return this.tareas.length;
        }
    }
});