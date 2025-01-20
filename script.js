// Typing Effect
const texts = ["a Backend Developer", "a Java Expert", "a RESTful API Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 500); // Pause before typing the next text
  } else {
    setTimeout(type, 200); // Typing speed
  }
})();

// Embedded JSON data
const data = {
  about: {
    heading: "About Me",
    content: "I am a passionate Software Engineer and Product Manager in training with experience in Agile methodologies, backend development, and CI/CD automation."
  },
  work: {
    heading: "Work Experience",
    items: [
      {
        title: "Software Engineer",
        description: "GE Healthcare",
         details: "Built 15+ backend microservices using Java and RESTful APIs, reducing response times by 60%.\n Deployed systems with Docker and Kubernetes and automated CI/CD pipelines to cut build times by 80%. Led Agile sprints, improving timelines by 30%, and enhanced performance for healthcare systems."
      },
      {
        title: "Software Engineering Specialist",
        description: "GE Healthcare",
        details: "Developed lightweight GoLang microservices, reducing response times by 40%. Achieved 90%+ code coverage with TDD, \nensuring reliability. Wrote 300+ integration tests, used design patterns for scalability, and authored detailed technical documentation to improve onboarding by 65%."
      },
      {
        title: "Grduate Software Engineer",
        description: "Eka Software Solutions",
        details: "Built robust software solutions for commodity management systems, enhancing performance \nand scalability."
      },
      {
        title: "Software Engineer Intern",
        description: "CGI",
        details: "Worked on real-time monitoring tools for enterprise applications, gaining hands-on experience in agile development."
      }
    ]
  },
  partTimeWork: {
    heading: "Part-Time Work Experience",
    items: [
      {
        title: "Lead Graduate Teaching Assistant",
        description: "Northeastern University",
        details: "Responsible for mentoring over 50 students in Operational Research, providing guidance on complex problem-solving, and evaluating assignments."
      },
      {
        title: "Technical Specialist",
        description: "Northeastern University ITS",
        details: "Developed automated workflows with Power Automate, reducing response times by 90%. Debugged 30+ Python and Java codebases \nto resolve compatibility issues and enhance student understanding, showcasing problem-solving skills and technical expertise"
      }
    ]
  },
  education: {
    heading: "Education",
    items: [
      {
        title: "Master of Science in Engineering Management",
        description: "Northeastern University"
      },
      {
        title: "Bachelor of Engineering in Computer Science",
        description: "PES University"
      }
    ]
  }
};

// Populate About Section
//document.getElementById('about-heading').textContent = data.about.heading;
//document.getElementById('about-content').textContent = data.about.content;

// Populate Work Experience Section
const workHeading = document.getElementById('work-heading');
const workContainer = document.getElementById('work-container');
workHeading.textContent = data.work.heading;

data.work.items.forEach(item => {
  const workCard = document.createElement('div');
  workCard.className = 'col-md-4 d-flex'; // Bootstrap column for responsive layout
  workCard.innerHTML = `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
        <div class="card-details">
        <p>${item.details.split('\n').slice(0, 1).join(' ')}
          <span class="more-details" style="display: none;">
            ${item.details.split('\n').slice(1).join(' ')}
          </span></p>
          <button class="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  `;
  workContainer.appendChild(workCard);
});


// Event delegation to handle "Read More" button clicks
workContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('read-more-btn')) {
    const moreDetails = event.target.previousElementSibling.querySelector('.more-details');
    if (moreDetails.style.display === 'none') {
      moreDetails.style.display = 'inline';
      event.target.textContent = 'Read Less';
    } else {
      moreDetails.style.display = 'none';
      event.target.textContent = 'Read More';
    }
  }
});

// Populate Part-Time Work Experience
const partTimeHeading = document.getElementById('part-time-heading');
const partTimeContainer = document.getElementById('part-time-container');
partTimeHeading.textContent = data.partTimeWork.heading;

data.partTimeWork.items.forEach(item => {
  const partTimeCard = document.createElement('div');
  partTimeCard.className = 'col-md-4 d-flex';
  partTimeCard.innerHTML = `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
        <!-- <p class="card-details">${item.details}</p> -->
      </div>
    </div>
  `;
  partTimeContainer.appendChild(partTimeCard);
});

// Populate Education Section
const educationHeading = document.getElementById('education-heading');
const educationContainer = document.getElementById('education-container');
educationHeading.textContent = data.education.heading;

data.education.items.forEach(item => {
  const educationCard = document.createElement('div');
  educationCard.className = 'col-md-6'; // Bootstrap column for responsive layout
  educationCard.innerHTML = `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
      </div>
    </div>
  `;
  educationContainer.appendChild(educationCard);
});


//------------------------Skills and Tools--------------------------
const skillsData = {
  categories: [
    {
      title: "Software Development & CI/CD",
      tools: [
        { name: "Java", iconClass: "devicon-java-plain colored" },
        { name: "Python", iconClass: "devicon-python-plain colored" },
        { name: "Go Lang", iconClass: "devicon-go-plain colored" },
        { name: "Spring Framework", iconClass: "devicon-spring-plain colored" },
        { name: "Docker", iconClass: "devicon-docker-plain colored" },
        { name: "Jenkins", iconClass: "devicon-jenkins-plain colored" },
        { name: "Git", iconClass: "devicon-git-plain colored" },
        { name: "Maven", imagePath: "assets/maven.svg" }
      ]
    },
    {
      title: "Cloud & Containerization",
      tools: [
        { name: "AWS", imagePath: "assets/aws.svg" },
        { name: "GCP", iconClass: "devicon-googlecloud-plain colored" },
        { name: "Docker", iconClass: "devicon-docker-plain colored" },
        { name: "Kubernetes", iconClass: "devicon-kubernetes-plain colored" }
      ]
    },
    {
      title: "Databases",
      tools: [
        { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
        { name: "Redis", iconClass: "devicon-redis-plain-wordmark colored" },
        { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
        { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" }
      ]
    },
    {
      title: "Agile Product Development",
      tools: [
        { name: "Scrum", iconClass: "fas fa-tasks" },
        { name: "Kanban", iconClass: "fas fa-project-diagram" },
        { name: "Team Collaboration", iconClass: "fas fa-users" },
        { name: "Project Planning", iconClass: "fas fa-calendar-alt" }
      ]
    }
  ]
};

// Populate the Skills Section
const skillsContainer = document.getElementById("skills-container");

skillsData.categories.forEach(category => {
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "col-md-6 d-flex"; // Adjust to fit two cards side by side

  // Create the card
  const card = document.createElement("div");
  card.className = "card mb-4";

  // Create the card body
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // Create the category title
  const categoryTitle = document.createElement("h5");
  categoryTitle.className = "card-title";
  categoryTitle.textContent = category.title;

  // Create the tool icons container
  const toolIconsContainer = document.createElement("div");
  toolIconsContainer.className = "tool-icons";

  // Add each tool
  category.tools.forEach(tool => {
    const toolItem = document.createElement("div");
    toolItem.className = "tool-item";

    // Add icon]
    //------------
    if (tool.iconClass) {
      const icon = document.createElement("i");
      icon.className = tool.iconClass; // Use the tool's class name
      toolItem.appendChild(icon);
    } else if (tool.imagePath) {
      // Use an image as a fallback for missing icons
      const img = document.createElement("img");
      img.src = tool.imagePath;
      img.alt = tool.name;
      img.style.width = "32px"; // Optional: Adjust size
      toolItem.appendChild(img);
    }
    //-----------

    // Add tool name
    const toolName = document.createElement("p");
    toolName.textContent = tool.name;

    // Append icon and name to the tool item
   // toolItem.appendChild(icon);
    toolItem.appendChild(toolName);

    // Append tool item to the tool icons container
    toolIconsContainer.appendChild(toolItem);
  });

  // Append the category title and tools container to the card body
  cardBody.appendChild(categoryTitle);
  cardBody.appendChild(toolIconsContainer);

  // Append the card body to the card
  card.appendChild(cardBody);

  // Append the card to the category div
  categoryDiv.appendChild(card);

  // Append the category div to the main skills container
  skillsContainer.appendChild(categoryDiv);
});

  document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.getElementById('projects-container');

    fetch('https://api.github.com/users/RakshitVahi/repos')
      .then(response => response.json())
      .then(data => {
        data.forEach(repo => {
          const projectCard = document.createElement('div');
          projectCard.classList.add('col-md-4');
          projectCard.classList.add('d-flex');

          projectCard.innerHTML = `
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title-projects">${repo.name}</h5>
              <!--<p class="card-details">${repo.description || 'No description available'}</p>-->
              <a href="${repo.html_url}" target="_blank"><button class="read-more-btn">View on GitHub</button></a>
            </div>
          </div>
          `;

          projectsContainer.appendChild(projectCard);
        });
      })
      .catch(error => console.error('Error fetching GitHub repos:', error));
  });