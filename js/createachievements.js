const achievements = Data;
console.log(achievements);

let modal = document.getElementById('achmodal');
let modalimg = document.getElementById('modalimg');
let modaltitle = document.getElementById('modaltitle');
let modalexplanation = document.getElementById('modalexplanation');

const createAchievements = () =>{
    achievements.forEach(element => {
        let achdiv = document.createElement('div');
        let achtitle = document.createElement('p');
        let achimg = document.createElement('img');

        
        achdiv.className = 'ach';
        if(element.locked == 'locked'){
            console.log(element.title + " is " + "locked");
            achdiv.classList.add('locked')
        }

        achdiv.onclick = () =>{
            modal.style.display = 'flex';
            modalimg.src = element.image;
            modaltitle.innerHTML = element.title;
            modalexplanation.innerHTML = element.explanation;
        }

        achtitle.className = 'achtitle';
        achtitle.innerHTML = element.title;

        achimg.className = 'achimg'
        achimg.src = element.image;

        achdiv.appendChild(achtitle);
        achdiv.appendChild(achimg);
        document.getElementById('achcontainer').appendChild(achdiv);
    });
}

const closeModal = () =>{
    modal.style.display = "none";
}

createAchievements();