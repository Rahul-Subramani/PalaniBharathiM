//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Graduate Engineer Trainee",
    cardImage: "assets/images/experience-page/se.png",
    place: "Schneider Electric",
    time: "(August, 2020 - Present)",
    desp: "<li>Working as a part of Data Analytics Team, responsible for analyzing, visualizing and processing the Business Intelligence data of Schneider Electric.</li> <li>Developed a 2X times faster data flow application than an existing model using Java for acquiring data from Google Analytics API.</li> <li>Developed dashboards for the internal teams and created detailed reports for the business owners.</li>",
  },
  {
    title: "Research and Development Intern",
    cardImage: "assets/images/experience-page/se.png",
    place: "Schneider Electric",
    time: "(Jan, 2020 - May, 2020)",
    desp:"<li>Worked with ELK Stack for processing the Business Intelligence data from the log files and querying the logs in Amazon Elasticsearch.</li><li>Improvised and added new features in Deep Learning Image Generation API for 3D Team.</li>",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
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
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

