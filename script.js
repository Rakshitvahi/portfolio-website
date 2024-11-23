// Typing Effect
const texts = ["a Software Engineer", "a Product Enthusiast", "a Scrum Master"];
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
    setTimeout(type, 1000); // Pause before typing the next text
  } else {
    setTimeout(type, 100); // Typing speed
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
document.getElementById('about-heading').textContent = data.about.heading;
document.getElementById('about-content').textContent = data.about.content;

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
