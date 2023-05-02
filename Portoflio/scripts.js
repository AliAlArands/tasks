const nav = document.querySelector('.nav');
// const hero = document.querySelector('.hero');
// console.log(hero)
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
        // if (window.innerWidth < 1100 ){
        //     hero.classList.add('hero-img')
        // }

    }
    else {
        nav.classList.remove('scrolled');
        // if (window.innerWidth < 1100 ){
        //     hero.classList.remove('hero-img')
        // }
    }

} )


const projects = document.querySelectorAll('.project');
// console.log(projects)
const modals = document.querySelectorAll('.modal');
// console.log(modals);

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
// console.log(leftBtn, rightBtn);

let closeBtn = document.querySelector('.btn-close');

// index of the modals
let index = 0;

projects.forEach((project) => {
    project.addEventListener('click', () => {
        const startIndex = project.children[0].src.indexOf('imgs/'); // get the start index of the imgs folder in src attr
        const imageFolder = project.children[0].src.slice(startIndex); // get the img path starting from imgs/
        const imageName = imageFolder.slice(5); // get the image name and use it in the rest of the code to specify the correct modal
        // console.log(imageName)
        modals.forEach (modal => {
            
            if (modal.children[0].src.includes(imageName)) {
                let currentIndex = index; // once you have specified the modal you want to show assign index
                // to a variable so later we can add to this var and move to the next or to the prev one in the
                // list of modals. 
                modal.classList.add('show-modal'); // show the btns to cotrol navigating between modals 
                leftBtn.classList.add('show-btns');
                rightBtn.classList.add('show-btns');
                closeBtn.classList.add('show-btns');
                navBtn.style.display = "none";

                
                closeBtn.addEventListener(('click'), () => {
                    // when the use click on the close button you should close the modal and hide the btns
                        modal.classList.remove('show-modal');
                        if (modals[currentIndex]) {
                            modals[currentIndex].classList.remove('show-modal');
                        }

                        leftBtn.classList.remove('show-btns');
                        rightBtn.classList.remove('show-btns');
                        closeBtn.classList.remove('show-btns');
                        navBtn.style.display = "block";

                });
                leftBtn.addEventListener(('click'), () => {
                        // move ot the prev modal
                    if (currentIndex > 0) {
                        modals[currentIndex].classList.remove('show-modal');
                        currentIndex -= 1;
                        modals[currentIndex].classList.add('show-modal');
                        
                    }
                });

                rightBtn.addEventListener(('click'), () => {
                    // move to the next modal
                    if (currentIndex < 4){
                        modals[currentIndex].classList.remove('show-modal');
                        currentIndex += 1;
                        modals[currentIndex].classList.add('show-modal');
                        
                    }
                   
                })
            }
            index += 1;


        })
        index = 0;
    })
})



// for each chevron in the footer lists when i click on it you should rotate it and show the lists
const footerLists = document.querySelectorAll('.footer-list-container');
footerLists.forEach(footerList => {

    const chevronUp = footerList.querySelector('.up');
    chevronUp.addEventListener(('click'), () => {
        chevronUp.classList.toggle('rotate-chevron-up');
        // chevronUp.style.display = "block";
        const list = footerList.querySelector('.footer-list')
        const displayStatus = list.style.display;
        if (displayStatus === "block") {
            list.style.display = "none";
        }
        else {
            list.style.display = "block";
        }
    })
})

// the logic for showing and hiding the aside 
const navBtn = document.querySelector('.setting'); // the bars
const aside = document.querySelector('#aside');
navBtn.addEventListener(('click'), () => {
    aside.style.display = "block";
    navBtn.style.display = "none";
})

const closeAsideBtn = aside.querySelector('#close');

closeAsideBtn.addEventListener(('click'), () => {
    aside.style.display = "none";
    navBtn.style.display = "block";
})


// the logic for storing the message inside the localStorage
const message = {
    firstName :"",
    lastName :"",
    email : "",
    subject : "",
    messageText : ""
};
const submitMessage = document.querySelector("#submit-message");
// console.log(submitMessage);
submitMessage.addEventListener(('click'), () => {
    let firstName = document.querySelector("#first-name").value;
    let lastName = document.querySelector("#last-name").value;
    let email = document.querySelector("#email").value;
    let subject = document.querySelector("#subject").value;
    let messageField = document.querySelector("#message").value;
    message.firstName = firstName;
    message.lastName = lastName;
    message.email = email;
    message.subject = subject
    message.messageText = messageField;
    
    localStorage.setItem('message', JSON.stringify(message));
})