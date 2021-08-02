var button = new Vue({
    el: '#navbar',
    data: {
        list_search: [],
        path_image: 'https://image.tmdb.org/t/p/w220_and_h330_face',
        api_key: '?api_key=949ea06d80d3fbf73eb29a7f3d0d5e0a&language=pt-br',
        trending_link: 'https://api.themoviedb.org/3/trending/movie/week',
        movie_link: 'https://api.themoviedb.org/3/movie/',
        filter_link: 'https://api.themoviedb.org/3/search/movie',
        imdb: 'https://www.imdb.com/title/',
    },
    mounted() {},

    methods: {
        get_search: function(search) {
            axios
                .get(this.filter_link + this.api_key + '&query=' + search)
                .then(response => {

                    this.list_search = response.data.results
                    var recebe = this.filter_link + this.api_key + '&query=' + search

                });
        },
    }
});