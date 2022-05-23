const OpenCalendarModal = (modalid) => {
  let calendarmodal = document.getElementById(modalid);
  calendarmodal.style.display = 'flex';
};
const CloseCalendarModal = (modalid) => {
    let calendarmodal = document.getElementById(modalid);
    calendarmodal.style.display = 'none';
  };
  
const OpenTeams = () =>{
    alert("Opening Teams and joining the meeting");
}