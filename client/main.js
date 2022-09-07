const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const formBtn = document.getElementById("form");
const goalsInput = document.getElementById("goals-input");
const section = document.getElementById("section");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const postGoals = (e) => {
  e.preventDefault();
  const inputValue = goalsInput.value;
  const body = { inputValue };
  axios.post("http://localhost:4000/api/goals/", body).then((res) => {
    let goalsListing = document.createElement("div");
    goalsListing.innerHTML = `<h3>${res.data}</h3>`;
    section.appendChild(goalsListing);
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
formBtn.addEventListener("submit", postGoals);
