import { db } from '../firebase/firebase.config.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js';

const teamMembersRef = collection(db, 'team-members');

const storedTeamMembers = JSON.parse(sessionStorage.getItem('teamMembers')); /* prevents uncessry calls */
if (storedTeamMembers) {
    RenderMemberCards(storedTeamMembers);
} else {
    getDocs(teamMembersRef).then(snapshot => {
        let teamMembers = [];
        snapshot.forEach(doc => {
            teamMembers.push(doc.data());
        });
        sessionStorage.setItem('teamMembers', JSON.stringify(teamMembers));  /* stores member data on session storage */
        RenderMemberCards(teamMembers);
        })
        .catch(error => {
        console.error("Error getting Members: ", error);
    });
}


function RenderMemberCards(membersData) {  
    let mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';

    let container = document.createElement('div');
    container.className = 'member-cards-container';

    membersData.forEach((member, idx) => {
        if (idx == 2 || (idx >= 5 && (idx+1) % 3 == 0)) {   /* ordering of card renders */
            mainContainer.appendChild(container);
            container = document.createElement('div');
            container.className = 'member-cards-container';
        }
        let socialLinks = '';
        if (member.github != null)
        socialLinks += `<a href="${member.github}"><i class="fa-brands fa-github" style="color: grey;"></i></a>`
        if (member.linkedin != null)
        socialLinks += `<a href="${member.linkedin}"><i class="fa-brands fa-linkedin" style="color: rgb(0, 116, 249);"></i></a>`
        if (member.instagram != null)
        socialLinks += `<a href="${member.instagram}"><i class="fa-brands fa-instagram" style="color: rgb(255, 0, 153);"></i></a>`
        if (member.facebook != null)
        socialLinks += `<a href="${member.facebook}"><i class="fa-brands fa-facebook" style="color: blue;"></i></a>`

        const memberCardHTML = `
        <div class="member-card">
            <img class="member-img" src="${member.image}" alt="${member.name}">
            <div class="member-info">
            <div class="member-who">
                <p class="member-name" style="color: whitesmoke;">${member.name}</p>
                <p class="member-position" style="color: rgb(0, 166, 255);">${member.position}</p>
            </div>
            <div class="member-socials">
                ${socialLinks}
            </div>
            </div>
        </div>
        `;
        container.innerHTML += memberCardHTML;
    });

    mainContainer.appendChild(container);

    let teammain = document.querySelector('#team-member-cards');  //  Inside teammain class
    teammain.appendChild(mainContainer);
}
