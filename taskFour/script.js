const menuItems = document.querySelectorAll('.menu-item');
// console.log(menuItems);
// const menuItemsList = ['home','jobs','freelance','blog','internship','ads'];

// const ulElement = document.querySelector('#menu')
// console.log(ulElement)

// const liItmes = menuItemsList.map((listItem) => {

//     return`<li class="menu-item">
//     <span>${listItem}</span>
//     <span>
//         <i class="fa-solid fa-chevron-down down"></i>
//     </span>
//     </li>`
// })

// console.log(liItmes)

// const displayItems = (items) => {
//     let htmlSyntax = ``;
//     items.forEach((item) => {
//         htmlSyntax += item
//     })
//     htmlSyntax += `<li class="menu-item"><span>hire us</span></li>`;

//     return htmlSyntax;
// }

// window.addEventListener('DOMContentLoaded', () => {
//     ulElement.innerHTML = displayItems(liItmes);
// })
const cards = document.querySelectorAll('.card');

let selectedCategory = null;

const allButton = document.querySelector('#all');
// console.log(allButton);
const categories = document.querySelectorAll('.category');
categories.forEach((category) => {
    // if (category.innerText !== 'All Posts'){
    //     category.classList.remove('selected-category');
    // }
    
    // console.log(category.innerText)
    category.addEventListener(('click') ,() => {
        let categroyValue = category.innerText.toLowerCase();
        categories.forEach((category) => {
            category.classList.remove('selected-category') 
            // console.log('i am here')
        });
        category.classList.add('selected-category');
        
        // category.classList.add('selected-category');
        // console.log(categroyValue)
        if (category.innerText === 'All Posts') {
            categroyValue = ''
            // console.log('true');
        }
        cards.forEach((card) =>  displayCards(card, categroyValue)); 
    })
})


const displayCards  = (card, searchValue) => {
    const cardTitle = card.querySelector('.card__title').innerText.toLowerCase();
    if (!cardTitle.includes(searchValue)) {
        card.style.display = 'none';
    }
    // if (searchValue === '') card.style.display = 'block';
    else (
        card.style.display = 'block'
    )
}
// console.log(cards);
const searchBox = document.querySelector('.search');
searchBox.addEventListener('keyup', () => {
    const searchValue = searchBox.value.toLowerCase();
    // console.log(searchValue);
    allButton.classList.remove('selected-category');
    cards.forEach((card) => displayCards(card, searchValue))

})


let selectedItem = null;
// console.log(selectedItem);
menuItems.forEach(
    (menuItem) => menuItem.addEventListener('click', () => 
        {
            // first make the clicked element bold 
            // and if the same item clicked twice it removes the classes 'b' and 'rotate'.
            menuItem.children[0].classList.toggle('b');
            const chevronDown = menuItem.querySelector('.fa-chevron-down');
            if (chevronDown !== null){
            chevronDown.classList.toggle('rotate');
            chevronDown.classList.toggle('b');
        }
            if (selectedItem !== null)
            {
                if (selectedItem !== menuItem) {
                    selectedItem.children[0].classList.remove('b');
                    const chevronDown = selectedItem.querySelector('.fa-chevron-down');
                    if (chevronDown !== null){
                        // console.log(chevronDown)
                        chevronDown.classList.remove('rotate');
                        chevronDown.classList.remove('b');
                    }
                };
            }    
            // here i store the element in a variable so if the next clicke if the element
            // is not the same element clicked last item => the above if statments should remove the classes
            // 'b' and 'rotate' from the last time element.  
            selectedItem = menuItem;

            
        }

    )

)


const linkGroups = document.querySelectorAll('.title');
// console.log(linkGroups);

linkGroups.forEach(
    (link) => { 
        const chevron = link.querySelector('.fa-chevron-up');
        // const list = document.querySelector('.details');
        chevron.addEventListener('click', () => {
            chevron.classList.toggle('rotate-chevron-up');
            const list = chevron.parentElement.parentElement.parentElement;
            const listElements = list.querySelector('.details');
            listElements.classList.toggle('display-links');
        })
})

const listButton = document.querySelector('#list');

const dropDownMenuList = document.querySelector('.dropmenulist');
listButton.addEventListener(('click'), () => {
    dropDownMenuList.classList.toggle('show-dropdown');
})


// dropDownMenuList.addEventListener(('click', () => {
//     dropDownMenuList.style.display = 'block'
// }))