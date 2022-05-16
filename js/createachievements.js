const achievements = Data;
console.log(achievements);

let modal = document.getElementById("achmodal");
let modalimg = document.getElementById("modalimg");
let modaltitle = document.getElementById("modaltitle");
let modalexplanation = document.getElementById("modalexplanation");
let modalachdate = document.getElementById("achievementdate");
let aopbutton = document.getElementById("achonprofile");

const createAchievements = () => {
  achievements.forEach((element) => {
    let achdiv = document.createElement("div");
    let achtitle = document.createElement("p");
    let achimg = document.createElement("img");

    achdiv.className = "ach";
    if (element.locked == "locked") {
      achdiv.classList.add("locked");
    }

    if (element.locked === "unlocked") {
      achdiv.onclick = () => {
        modal.style.display = "flex";
        modalimg.src = element.image;
        modaltitle.innerHTML = element.title;
        modalexplanation.innerHTML = element.explanation;
        modalachdate.innerHTML = "on " + element.date;
        // open aopmodal
console.log("this image: " +element.image);
console.log("img1: " +AchievementsOnProfile.img1);
console.log("img2: " +AchievementsOnProfile.img2);
console.log("img3: " +AchievementsOnProfile.img3);

        if(element.image === AchievementsOnProfile.img1 ||element.image === AchievementsOnProfile.img2 ||element.image === AchievementsOnProfile.img3){
          console.log('is zelfde');
          aopbutton.onclick = null;
          aopbutton.style.display = "none";
        }else{
          aopbutton.style.display = "flex";
          aopbutton.onclick = () => {
            OpenAOPModal(element.image);
          };

        }
      };
    }

    achtitle.className = "achtitle";
    achtitle.innerHTML = element.title;

    achimg.className = "achimg";
    achimg.src = element.image;

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

const OpenAOPModal = (image) => {
  aop1.src = AchievementsOnProfile.img1;
  aop2.src = AchievementsOnProfile.img2;
  aop3.src = AchievementsOnProfile.img3;
  newaop.src = image;

  let newimage;
  let oldimage;
  aopmodal.style.display = "flex";
  console.log(image);
  console.log(achievements.img1);
  console.log(AchievementsOnProfile.img2);
  console.log(AchievementsOnProfile.img3);

  aop1.onclick = () => {
    newimage = image;
    oldimage = AchievementsOnProfile.img1;
    // ach on profile & db -> new image var
    newaop.src = oldimage;

    // new image var -> db & ach on profile
    aop1.src = newimage;
    AchievementsOnProfile.img1 = newimage;
    image = oldimage;
  };
  aop2.onclick = () => {
    newimage = image;
    oldimage = AchievementsOnProfile.img2;
    // ach on profile & db -> new image var
    newaop.src = oldimage;

    // new image var -> db & ach on profile
    aop2.src = newimage;
    AchievementsOnProfile.img2 = newimage;
    image = oldimage;
  };
  aop3.onclick = () => {
    newimage = image;
    oldimage = AchievementsOnProfile.img3;
    // ach on profile & db -> new image var
    newaop.src = oldimage;

    // new image var -> db & ach on profile
    aop3.src = newimage;
    AchievementsOnProfile.img3 = newimage;
    image = oldimage;
  };
};
createAchievements();