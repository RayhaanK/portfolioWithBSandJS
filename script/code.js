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
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
            </p>
        </div>
    </div>
    `
})

