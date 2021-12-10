/* 
Traccia esercizio:
Stampare a schermo una decina di dischi musicali (vedi screenshot). Utilizzare: Html, JS, VueJS, PHP

- Prima Milestone:
Stampiamo i dischi solo con l’utilizzo di PHP, che stampa direttamente i dischi in pagina: al caricamento della pagina ci saranno tutti i dischi.

- Seconda Milestone:
Attraverso l’utilizzo di axios: al caricamento della pagina axios chiederà, attraverso una chiamata api, i dischi a php e li stamperà attraverso vue.

- Bonus:
Attraverso un’altra chiamata api, filtrare gli album per genere
Info: Per la struttura dati guardate l'endpoint usato nell'esercizio vue-dischi.
*/

const app = new Vue({
	el: "#app",
	data: {
		discs: null,
		genres: [],
		authors: [],
		filteredByGenreDisc: [],
		genreSelected: "",
		authorSelected: "",
	},
	mounted() {
		axios
			.get("./api/albums.php")
			.then((response) => {
				console.log(response);
				this.discs = response.data;
				console.log(response.data);

				response.data.forEach((disc) => {
					if (!this.genres.includes(disc.genre)) {
						this.genres.push(disc.genre);
					}
				});
				response.data.forEach((disc) => {
					if (!this.authors.includes(disc.author)) {
						this.authors.push(disc.author);
					}
				});
			})
			.catch((error) => {
				console.log("OPS, catch error mounted: " + error);
			});
	},
	methods: {
		SearchBoxGenre() {
			axios
				.get("./api/albums.php")
				.then((response) => {
					console.log(response);
					if (this.genreSelected === "All") {
						this.discs = response.data;
					} else {
						this.discs = response.data.filter((disc) => {
							return disc.genre.includes(this.genreSelected);
						});
					}
				})
				.catch((error) => {
					console.log("OPS, catch error SearchBoxGenre: " + error);
				});
		},
		SearchBoxAuthor() {
			axios
				.get("./api/albums.php")
				.then((response) => {
					console.log(response);
					if (this.authorSelected === "All") {
						this.discs = response.data;
					} else {
						this.discs = response.data.filter((disc) => {
							return disc.author.includes(this.authorSelected);
						});
					}
				})
				.catch((error) => {
					console.log("OPS, catch error SearchBoxAuthor: " + error);
				});
		},
	},
});
