var script = new Vue({
    el: '#movies',
    data: {
        list_movies: [],
        list_details: [],
        list_search: [],
        path_image: 'https://image.tmdb.org/t/p/w220_and_h330_face',
        api_key: '?api_key=949ea06d80d3fbf73eb29a7f3d0d5e0a&language=pt-br',
        trending_link: 'https://api.themoviedb.org/3/trending/movie/week',
        movie_link: 'https://api.themoviedb.org/3/movie/',
        filter_link: 'https://api.themoviedb.org/3/search/movie',
        imdb: 'https://www.imdb.com/title/',
    },
    mounted() {
        this.get_movies();
        this.get_movie();
        this.get_search();
    },
    methods: {
        get_movies: function() {
            axios
                .get(this.trending_link + this.api_key)
                .then(response => {
                    this.list_movies = response.data.results
                    this.list_movies.sort((a, b) => (a.vote_average < b.vote_average) ? 1 : -1)
                });
        },
        get_movie: function(id) {
            var detail_movie_modal = new bootstrap.Modal(document.getElementById('detail_movie_modal'), {
                keyboard: false
            })
            detail_movie_modal.show()
            axios
                .get(this.movie_link + id + this.api_key)
                .then(response => {
                    this.list_details = response.data;
                    this.list_details.release_date = new Date(this.list_details.release_date).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                });
        },
    }
})
var script2 = new Vue({
    el: '#search',
    data: {
        list_search: [],
        path_image: 'https://image.tmdb.org/t/p/w220_and_h330_face',
        api_key: '?api_key=949ea06d80d3fbf73eb29a7f3d0d5e0a&language=pt-br',
        trending_link: 'https://api.themoviedb.org/3/trending/movie/week',
        movie_link: 'https://api.themoviedb.org/3/movie/',
        filter_link: 'https://api.themoviedb.org/3/search/movie',
    },
    mounted() {},
    methods: {
        get_search: function(search) {
            axios
                .get(this.filter_link + this.api_key + '&query=' + search)
                .then(response => {
                    this.list_search = response.data.results
                    this.list_search.sort((a, b) => (a.vote_average < b.vote_average) ? 1 : -1)
                    script.list_movies = this.list_search
                });
        }
    },
})