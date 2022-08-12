const data = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

let filterArray = [];
let mainbox = document.getElementById("main");

let init = function () {
  for (let i = 0; i < data.length; i++) {
    //creating elements and classes
    let container = document.createElement("div"),
      details = document.createElement("div"),
      status = document.createElement("div"),
      toolsContainer = document.createElement("div"),
      firsline = document.createElement("div"),
      featuredimage = document.createElement("img"),
      companyName = document.createElement("p"),
      new_ = document.createElement("p"),
      featured = document.createElement("p"),
      position = document.createElement("h2"),
      lastposted = document.createElement("p"),
      contractType = document.createElement("p"),
      country = document.createElement("p"),
      role = document.createElement("p"),
      level = document.createElement("p");

    //Data sets
    container.setAttribute("data-role", data[i].role);
    container.setAttribute("data-level", data[i].level);
    container.setAttribute("data-languages", data[i].languages);
    container.setAttribute("data-tools", data[i].tools);
    container.setAttribute("data-contract", data[i].contract);

    //setting classes
    container.classList.add("box1");
    container.classList.add("box");
    details.classList.add("details");
    firsline.classList.add("firstline");
    companyName.classList.add("companyname");
    position.classList.add("career");
    status.classList.add("status");
    lastposted.classList.add("days");
    contractType.classList.add("days");
    contractType.classList.add("fulltime");
    country.classList.add("country");
    country.classList.add("days");
    toolsContainer.classList.add("languages");
    role.classList.add("languagebtn");
    level.classList.add("languagebtn");
    level.classList.add("level");

    //Embeding Dynamic Content
    featuredimage.setAttribute("src", data[i].logo);
    companyName.textContent = data[i].company;
    if (data[i].new == true) {
      new_.textContent = "!New";
      new_.classList.add("btn1");
      new_.classList.add("btn");
    }
    if (data[i].featured == true) {
      featured.textContent = "Featured";
      featured.classList.add("btn2");
      featured.classList.add("btn");
    }
    position.textContent = data[i].position;
    lastposted.textContent = data[i].postedAt;
    contractType.textContent = data[i].contract;
    country.textContent = data[i].country;
    role.textContent = data[i].role;
    level.textContent = data[i].level;

    //Appending ChildElements to each respective parent node
    container.append(featuredimage, details, toolsContainer);
    details.append(firsline, position, status);
    firsline.append(companyName, new_, featured);
    status.append(lastposted, contractType, country);
    toolsContainer.append(role, level);
    mainbox.appendChild(container);
    let languagesArray = data[i].languages;
    languagesArray.forEach((language) => {
      let languages = document.createElement("p");
      languages.classList.add("languagebtn");
      languages.textContent = language;
      toolsContainer.append(languages);
    });

    let toolsArray = data[i].tools;
    toolsArray.forEach((tool) => {
      let tools = document.createElement("p");
      tools.classList.add("languagebtn");
      tools.textContent = tool;
      toolsContainer.append(tools);
    });
  }
};

function categoryGestures() {
  let filterbtn = document.querySelector(".category-container");
  let headers = document.querySelector(".category-head");
  let all = document.querySelector(".all");
  filterbtn.addEventListener("click", () => {
    headers.classList.toggle("open");
    all.classList.toggle("border");
    if (headers.classList.contains("open")) {
      filterbtn.style.backgroundColor = "hsl(180, 29%, 50%)";
      filterbtn.style.color = "white";
      headers.addEventListener("click", (event) => {
        const subcategory = event.target.childNodes[1];

        if (
          !event.target.classList.contains("category-head") &&
          !event.target.classList.contains("individual-categories")
        ) {
          filterbtn.style.alignSelf = "flex-start";
          all.style.alignSelf = "flex-start";
          subcategory.style.display = "flex";
        }
      });
    } else {
      let subCategory = document.querySelectorAll(".sub-category");
      subCategory.forEach((sub) => (sub.style.display = "none"));
      filterbtn.style.alignSelf = "auto";
      all.style.alignSelf = "auto";
      let execution = document.querySelector(".execute");
      execution.classList.remove("execution");
      filterArray = [];
    }
  });
}

function filter() {
  const individualCategories = document.querySelectorAll(
    ".individual-categories"
  );
  const rolecategory = document.querySelectorAll(".role-category");
  const levelcategory = document.querySelectorAll(".level-category");
  const languagecategory = document.querySelectorAll(".language-category");
  const toolscategory = document.querySelectorAll(".tools-category");
  const contractcategory = document.querySelectorAll(".contract-category");
  individualCategories.forEach((category) => {
    category.addEventListener("click", (event) => {
      let element = event.target;
      authenticationEndpoint(element);
      element.classList.add("highlight");
      filterArray.push(element.innerText);
      filterOut();
    });
  });

  function authenticationEndpoint(element) {
    categoryAuthentication(rolecategory, "role", element);
    categoryAuthentication(levelcategory, "level", element);
    categoryAuthentication(languagecategory, "language", element);
    categoryAuthentication(toolscategory, "tools", element);
    categoryAuthentication(contractcategory, "contract", element);
  }
}

function categoryAuthentication(categoryname, firstclass, element) {
  categoryname.forEach((item) => {
    if (
      item.classList.contains("highlight") &&
      element.classList.contains(`${firstclass}-category`)
    ) {
      item.classList.remove("highlight");
      let index = filterArray.indexOf(item.innerText);
      filterArray.splice(index, 1);
    }
  });
}
function filterOut() {
  let execution = document.querySelector(".execute");
  if (filterArray.length >= 1) {
    execution.classList.add("execution");
  }
  execution.addEventListener("click", () => {
    let individualList = document.querySelectorAll(".box");
    individualList.forEach((list) => {
      let { role, level, languages, tools, contract } = list.dataset;
      languages.split(",");
      tools.split(",");
      filterArray.forEach((elem) => {
        if (
          role === elem ||
          level === elem ||
          languages.includes(elem) ||
          tools.includes(elem) ||
          contract === elem
        ) {
          list.style.display = "flex";
        } else {
          list.style.display = "none";
        }
        let all = document.querySelector(".all");
        all.addEventListener("click", () => {
          list.style.display = "flex";
        });
      });
    });
  });
}

filter();
categoryGestures();

init();
