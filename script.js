// Sample data (replace with your own)
const projects = [
  { title: "Project 1", description: "Git and GitHub", technologies: "Git" },
  { title: "Project 2", description: "Personal Portfolio Page", technologies: "HTML, CSS, JavaScript, Bootstrap" },
]

const skills = ["HTML", "CSS", "JavaScript", "Python"]

const workExperience = [
  {
    title: "Internship",
    company: "Canspirit.Ai",
    duration: "June 2024 - December 2024",
    responsibilities: ["GitOps", "Live Video Feed Processing on RasPi5"],
  }
]

// Populate projects
const projectsList = document.getElementById("projectsList")
projects.forEach((project) => {
  const projectCard = document.createElement("div")
  projectCard.className = "col-md-6 mb-4"
  projectCard.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <p class="card-text"><small class="text-muted">Technologies: ${project.technologies}</small></p>
            </div>
        </div>
    `
  projectsList.appendChild(projectCard)
})

// Populate skills
const skillsList = document.getElementById("skillsList")
skills.forEach((skill) => {
  const skillItem = document.createElement("li")
  skillItem.textContent = skill
  skillsList.appendChild(skillItem)
})

// Populate work experience
const workExperienceSection = document.getElementById("workExperience")
workExperience.forEach((job) => {
  const jobElement = document.createElement("div")
  jobElement.className = "mb-4"
  jobElement.innerHTML = `
        <h4>${job.title}</h4>
        <h5>${job.company}</h5>
        <p>${job.duration}</p>
        <ul>
            ${job.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
        </ul>
    `
  workExperienceSection.appendChild(jobElement)
})

