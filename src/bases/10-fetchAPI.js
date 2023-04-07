const apiKey = 'eVkzKRqF2s35kXa6n4ZpDBzgEYivs1IB';

const http = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

http.then( response => response.json())
.then( ({ data }) => {

    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
})
.catch( error => console.error(error));