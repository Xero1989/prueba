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