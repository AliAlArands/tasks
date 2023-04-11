const container = document.querySelector('.products-container');
const btns = document.querySelectorAll('.btn');
const searchButton = document.querySelector('#btn');

let products = [];
let start = 0;
let end = 10;
async function getProducts() {
    const response = await fetch(`https://dummyjson.com/products/`);
    const data = await response.json();
    products = data.products;
    console.log(products, start, end)
    displayElements(products ,start, end);

    searchButton.addEventListener(('click'), (e) => {
        e.preventDefault();
        const content = document.querySelector('.form-control');
        let filteredProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(content.value.toLowerCase())
        })
        // console.log(content.value.toLowerCase())
        displayElements(filteredProducts,0,10)
    })

    btns.forEach((btn) => btn.addEventListener(('click'), () => {
        const chevron = btn.querySelector('.bi');
        if (chevron.classList.contains('left')) {
            if (start === 0){
                end = 30;
                start = 10; 
                displayElements(products,start, end);

            }
            else {
                start -= 10;
                end -= 10;
                displayElements(products,start, end);

            }
        }
        else {
            if (end >= 30){
                start = 0;
                end = 10;
                displayElements(products,start, end);

            }
            else {
                start += 10;
                end += 10;
                displayElements(products,start, end);

            }
        }
    }
    ))
    }
getProducts();

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

function displayElements (elements, startAt, endAt) {
    container.innerHTML = renderAllElements(elements.slice(startAt,endAt));
}
// console.log(products)
