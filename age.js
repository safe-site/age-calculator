const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function calculateAge() {
  const birthDate = new Date(document.getElementById("birthdate").value);
  const today = new Date();
  const ageInMs = today - birthDate;
  const ageInYears = Math.floor(ageInMs / (365.25 * 24 * 60 * 60 * 1000));

  const birthDay = birthDate.getDate();
  const birthMonth = birthDate.getMonth();
  const birthYear = birthDate.getFullYear();
  const birthDayOfWeek = birthDate.getDay();

  const ageDateString = `${ageInYears} years ${today.getMonth() - birthMonth} months ${today.getDate() - birthDay} days`;
  const ageInMonths = ageInYears * 12 + (today.getMonth() - birthMonth);
  const ageInDays = Math.floor(ageInMs / (24 * 60 * 60 * 1000));
  const ageInHours = ageInMs / (60 * 60 * 1000);
  const ageInMinutes = ageInMs / (60 * 1000);
  const ageInSeconds = ageInMs / 1000;

  document.getElementById("ageResult").textContent = `Age = ${ageInYears} years`;
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  document.getElementById("bornOnResult").textContent = `Born on: ${dayNames[birthDate.getDay()]}, ${monthNames[birthMonth]} ${birthDay}, ${birthYear}`;
  document.getElementById("ageOnResult").textContent = `Age on: ${dayNames[today.getDay()]}, ${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
  
  document.getElementById("durationResult").textContent = `= ${ageInYears} years ${today.getMonth() - birthMonth} months ${today.getDate() - birthDay} days`;
  document.getElementById("durationInMonthsResult").textContent = `= ${ageInMonths} months ${today.getDate() - birthDay} days`;
  document.getElementById("durationInDaysResult").textContent = `= ${ageInDays} days`;
  document.getElementById("durationInHoursResult").textContent = `= ${Math.floor(ageInHours).toLocaleString()} hours`;
  document.getElementById("durationInMinutesResult").textContent = `= ${Math.floor(ageInMinutes).toLocaleString()} minutes`;
  document.getElementById("durationInSecondsResult").textContent = `= ${Math.floor(ageInSeconds).toLocaleString()} seconds`;
}

const calculateBtn = document.getElementById('calculate-btn');
  const result = document.getElementById('result');

  calculateBtn.addEventListener('click', () => {
    // Code to calculate the result goes here

    // Show the result
    result.classList.add('show');
  });
// Attach calculateAge function to button click event
document.getElementById("calculate-btn").addEventListener("click", calculateAge);
