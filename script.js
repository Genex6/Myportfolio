//toggle icon nav
// let menuicon = document.querySelector('#my-button')
// let navbar = document.querySelector('.navbar');

// menuicon.onclick = ()=>{
//     menuicon.classList.toggle('active')
// }
//scroll sect
{


    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    window.onscroll = () =>{
        sections.forEach(sec => { 
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
        //stick

        let header = document.querySelector('header');

        header.classList.toggle('sticky',window.scrollY > 100 );
    }
}