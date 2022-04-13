const achievements = Data;
console.log(achievements);

let modal = document.getElementById("achmodal");
let modalimg = document.getElementById("modalimg");
let modaltitle = document.getElementById("modaltitle");
let modalexplanation = document.getElementById("modalexplanation");
let aopbutton = document.getElementById("achonprofile");

const createAchievements = () => {
  achievements.forEach((element) => {
    let achdiv = document.createElement("div");
    let achtitle = document.createElement("p");
    let achimg = document.createElement("img");

    achdiv.className = "ach";
    if (element.locked == "locked") {
      console.log(element.title + " is " + "locked");
      achdiv.classList.add("locked");
    }

    achdiv.onclick = () => {
      modal.style.display = "flex";
      modalimg.src = element.image;
      modaltitle.innerHTML = element.title;
      modalexplanation.innerHTML = element.explanation;
    };

    achtitle.className = "achtitle";
    achtitle.innerHTML = element.title;

    achimg.className = "achimg";
    achimg.src = element.image;

    // open aopmodal
    aopbutton.onclick = () => {
      newaop.src = element.image;
      OpenAOPModal();
    };
    
    console.log(element.image);

    // append all
    achdiv.appendChild(achtitle);
    achdiv.appendChild(achimg);
    document.getElementById("achcontainer").appendChild(achdiv);
  });
};

const closeModal = (id) => {
  document.getElementById(id).style.display = "none";
};

// open achievement on profile (aop)
let aopmodal = document.getElementById("aopmodal");
let aop1 = document.getElementById("aop1");
let aop2 = document.getElementById("aop2");
let aop3 = document.getElementById("aop3");
let newaop = document.getElementById("newaop");

const OpenAOPModal = () => {
  aop1.src = "../static/achievementimages/books.png";
  aop2.src = "../static/achievementimages/educated.png";
  aop3.src = "../static/achievementimages/lesson.png";

  // newaop.src = image;

  aopmodal.style.display = "flex";
};
createAchievements();
