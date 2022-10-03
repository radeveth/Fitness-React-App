export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8f689daa7dmsh0deea24d4237735p15d3aajsn05d721ebc521',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  return await fetch(url, options)
    .then(response => response.json())
    .catch(error => console.log(error));
};
