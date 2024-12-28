// Typing Effect
const texts = ["a Software Engineer", "a Product Enthusiast", "an Agile Expert"];
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
        title: "Lead Graduate Teaching Assistant",
        description: "Northeastern University"
      },
      {
        title: "Subject Matter Expert",
        description: "Northeastern University"
      },
      {
        title: "Software Engineer",
        description: "GE Healthcare"
      },
      {
        title: "Software Engineering Specialist",
        description: "GE Healthcare"
      },
      {
        title: "Grduate Software Engineer",
        description: "Eka Software Solutions"
      },
      {
        title: "Software Engineer Intern",
        description: "CGI"
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
  workCard.className = 'col-md-4'; // Bootstrap column for responsive layout
  workCard.innerHTML = `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
      </div>
    </div>
  `;
  workContainer.appendChild(workCard);
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
  categoryDiv.className = "col-md-6"; // Adjust to fit two cards side by side

  // Create the card
  const card = document.createElement("div");
  card.className = "card mb-4";

  // Create the card body
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // Create the category title
  const categoryTitle = document.createElement("h3");
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