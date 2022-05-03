AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [{
        title: "Android App Development Trainee",
        cardImage: "assets/images/experience-page/intern_shalatraining.jpg",
        place: "Internshala",
        time: "(August, 2021 - October,2021)",
        desp: "<li> The training consisted of Introduction to Android, World of Kotlin, Android Kick-Off, Higher Order Functionalities, and The Final Project modules.</li>",
    },

];

const showCards2 = () => {
    let output = "";
    exp.forEach(
        ({ title, cardImage, place, time, desp }) =>
        (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
    );
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards
const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [{
        title: "Hacktoberfest 2021",
        cardImage: "assets/images/experience-page/hactober.png",
        description: "Hacktoberfest is a yearly event to encourage people to contribute to open source in October. It's a celebration of community, learning and giving back—topped off by DigitalOcean thanking participants.",
    },
    {
        title: "Developer Days 2021",
        cardImage: "assets/images/experience-page/dev.png",
        description: "It is a 5-week long event. It consists of three tracks that are Web Development, Android Development, and UI/UX Design. The event consists of various sessions and challenges.",
    },
];


const showCards = () => {
    let output = "";
    volunteershipcards.forEach(
        ({ title, cardImage, description }) =>
        (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
    );
    volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [{
        title: "Hult Prize 2020",
        subtitle: "Runner-Up",
        image: "assets/images/experience-page/hultp.jpg",
        desp: "The Hult Prize is an annual, year-long competition that crowd-sources ideas from university level students after challenging them to solve a pressing social issue around topics such as food security, water access, energy, and education.",
    },

    {
        title: "Job A Thon",
        subtitle: "Paticipant",
        image: "assets/images/experience-page/job a thon.png",
        desp: " Secured AIR 4038 in coding competition.It is basically a 2-hour long hiring challenge for freshers interested in a job opportunity at any or all of the companies that are going to collaborate with GeeksforGeeks every month for their hiring endeavors.",
    },
    {
        title: "MLH ",
        subtitle: "Participant",
        image: "assets/images/experience-page/mlh1.png",
        desp: "It was a  week long hackathon where people participated from varoius countries and shared their skills and knowledge with us.",
    },
    {
        title: "HackOn 2.0",
        subtitle: "Paticipant",
        image: "assets/images/experience-page/hackon.jpg",
        desp: "This event was organized by hackerEarth platform.",
    },


];

const showCards3 = () => {
    let output = "";
    mentor.forEach(
        ({ title, image, subtitle, desp }) =>
        (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
    );
    hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);