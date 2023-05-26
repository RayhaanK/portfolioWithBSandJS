let about = document.querySelector('section#about .row:last-child')
let aboutContents = [
    "My name is Mohamed Rayhaan Khan.My date of birth is 18/04/2004. My home language is English and I can speak Afrikaans too.I currently live in Ottery. My date of birth is 18/04/2004. My home language is English and I can speak Afrikaans too. I currently live in Ottery."
]
// Loop through the content
aboutContents.forEach( (content)=> {
    about.innerHTML += ` <p class='lead'> ${content}</p> `
} )

// Education
let education = [
    {
        id: 1,
        year: 2022,
        description: 'I matriculated High School',
        place: 'Rylands High School',
    },
    {
        id: 2,
        year: 2023,
        description: 'I am now aspiring to become a Web Developer',
        place: 'LifeChoices Acadamy',
    }
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card dot">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
            </p>
        </div>
    </div>
    `
})

// Skills Section
let skill = [
    {
        id: 1,
        title: 'HTML',
        description: '<i class="fa-brands fa-html5 fa-beat fa-10x" style="color: #e54c21ff;"></i>',
        progressbar: 'Specialist',
    },
    {
        id: 2,
        title: 'CSS',
        description: '<i class="fa-brands fa-css3-alt fa-beat fa-10x" style="color: #264de4"></i>',
        progressbar: 'Specialist',
    },
    {
        id: 3,
        title: 'Bootstrap',
        description: '<i class="fa-brands fa-bootstrap fa-beat fa-10x" style="color: #8712fbff"></i>',
        progressbar: 'Specialist',
    },
    {
        id: 4,
        title: 'Javascript',
        description: '<i class="fa-brands fa-js fa-beat fa-10x" style="color: #f7df1d;"></i>',
        progressbar: 'Average',
    }


]

let divSkill = document.querySelector('.skill');
skill.forEach((data)=> {
    divSkill.innerHTML += `
    <div class="col">
        <h4 class="display-4">${data.title}</h4>
        <div class="card-body">
            <p class="text-black">
                ${data.description}
            </p>
            <p class="text-black">
                ${data.progressbar}
            </p>
        </div>
    </div>
    `

})

// Testimonials section
let testimonials = [
    {
        id: 1,
        name: 'Imraan Bernksen',
        image:'<img src="https://i.postimg.cc/4d1Z8FjW/t0.jpg" class="card-img-top img-fluid testicards" loading="lazy" alt="Imraan Bernksen" style="height: 290px; object-fit: contain;">',
        description:'I highly recommend Rayhaan Khan, an aspiring web developer with a passion for creating stunning and functional websites. Rayhaan has a strong foundation in programming languages such as HTML, CSS, and Bootstrap and is constantly learning and staying up-to-date with the latest technologies. Their attention to detail and commitment to delivering high-quality work make them an excellent choice for any web development project.'
    },

    {
        id: 2,
        name: 'Ganiefah Majiet',
        image:'<img src="https://i.postimg.cc/wTNPCsTg/Screenshot-2023-05-03-100656.png" class="card-img-top img-fluid testicards" loading="lazy" alt="Ganiefah Majiet" style="height: 290px; background-size: 50%; object-fit: contain;">',
        description:"Someone who I'd definitely recommend. He's always positive and willing to help the next person although he's busy himself, he's intelligent and very hardworking. He is always positive and he always provides everyone with help and motivation."
    },

    {
        id: 3,
        name: 'Nuraan Samsodien',
        image:'<img src="https://i.postimg.cc/KYVRS5rP/C12-C2-Nuraan-Samsodien.jpg" class="card-img-top img-fluid testicards" loading="lazy" alt="Nuraan Samsodien" style="height: 290px; object-fit: contain;">',
        description:"Rayhaan is a highly thought intellectual from my perspective. He is passionate, ambitious, hardworking and always provides a helping hand to anyone who needs it. He has great communication and leadership skills and any company would be lucky to have him on their team."
    },
    {
        id: 4,
        name: 'Eighton-Lee Paulse',
        image:'<img src="https://i.postimg.cc/9MTsXWTx/C12-C2-Eighton-Lee-Paulse.jpg" class="card-img-top img-fluid testicards" loading="lazy" alt="Eighton-Lee Paulse" style="height: 290px; object-fit: contain;">',
        description:"Rayhaan is a very intuitive and intelligent person. I've learnt so much from him. He's very assertive and knows what's right and wrong. His motivation is also unmatched and he is very good at what he does. He's honestly one of the smartest people I know and I would recommend him because he is very good at what he does."
    },

]

let divTestimonial = document.querySelector('.testimonial');
testimonials.forEach((data)=> {
    divTestimonial.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.name}</h4>
        <div class="card-body">
            ${data.image}
            <p class="text-white testibody">
                "${data.description}"
            </p>
        </div>
    </div>
    `
})

