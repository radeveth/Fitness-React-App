export const fetchData = async (url) => {
  return await fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
};
