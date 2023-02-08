let container = document.getElementById('imgContainer');
let btnNewImage = document.getElementById('btn-newImage');
btnNewImage.addEventListener('click', (e) => {
  fetchData();
})

function fetchData() {
  container.innerHTML = '';
  let loader = document.createElement('div');
  loader.classList.add('loader');
  loader.setAttribute('id', 'loader');
  
  container.appendChild(loader);
  
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => renderData(data));
}

function renderData(data) {
  let img = data.message;
  
  let imgContainer = document.createElement('img');
  imgContainer.setAttribute('src', img);
  imgContainer.setAttribute('width', '200');
  imgContainer.setAttribute('height', '200');
  imgContainer.setAttribute('style', 'border-radius: 25%;');
  
  document.getElementById('loader').remove();
  container.appendChild(imgContainer);
}

document.addEventListener('DOMContentLoaded', fetchData);
