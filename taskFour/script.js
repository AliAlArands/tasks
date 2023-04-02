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
    



let selectedItem = null;
menuItems.forEach(
    (menuItem) => menuItem.addEventListener('click', () => 
        {
            console.log(menuItem.children[0])
            menuItem.children[0].classList.toggle('b');

            // console.log(selectedItem, menuItem)
            if (selectedItem !== null)
            {
                if (selectedItem !== menuItem) {
                    selectedItem.children[0].classList.toggle('b');
                    const chevronDown = selectedItem.querySelector('.fa-chevron-down');
                    if (chevronDown !== null){
                    chevronDown.classList.toggle('rotate');
                    chevronDown.classList.toggle('b');
                    }
                };
            }    
            selectedItem = menuItem;
            const chevronDown = menuItem.querySelector('.fa-chevron-down');
            if (chevronDown !== null){
            chevronDown.classList.toggle('rotate');
            chevronDown.classList.toggle('b');
        }
        }

    )

)