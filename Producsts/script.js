// let count = 10;
let skip = 0;
const container = document.querySelector('.products-container');
async function getProducts(value) {
    const response = await fetch(`https://dummyjson.com/products?limit=${value !== undefined ? '30': '10'}&skip=${skip}`);
    const data = await response.json();
    // const products = data.products.filter((product) => product.title !== 'Handcraft Chinese style' && product.title !== 'cereals muesli fruit nuts')
    let products = data.products;
    if (value){
        products = products.filter((product) => product.title.toLowerCase().includes(value.toLowerCase()))
    }
    console.log(products)
    container.innerHTML = renderAllElements(products);
}

getProducts()
function renderOneElement (element) {
    return `<div class="card box">
    <img class="card-img-top card-img" src=${element.thumbnail} alt="Card image cap">
    <div class="card-body box-body">
      <div>
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.description}</p>
      </div>
      <a href="#" class="btn btn-primary">More details</a>
    </div>
  </div>`
}

function renderAllElements (elements) {
    let content = '';
    elements.forEach(element => {
        content += renderOneElement(element);
    });
    return content;
}
// console.log(container)
const btns = document.querySelectorAll('.btn');
// console.log(btns)
btns.forEach((btn) => btn.addEventListener(('click'), () => {
    const chevron = btn.querySelector('.bi');
    // console.log(chevron);  
    if (chevron.classList.contains('bi-chevron-left')) {
        if (skip === 0){
            skip = 20
        }
        else {
            skip -= 10
        }
        getProducts()
    }
    else {
        if (skip >= 20){
        skip = 0
        }
        else {
            skip = skip + 10;

        }

        getProducts()
    }

}))


const searchButton = document.querySelector('#btn');
// console.log(searchButton);

searchButton.addEventListener(('click'), (e) => {
    e.preventDefault();
    const content = document.querySelector('.form-control');
    getProducts(content.value)
})