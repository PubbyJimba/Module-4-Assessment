const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const form = document.getElementById("form");
const goalsInput = document.getElementById("goals-input");
const goalsList = document.getElementById("goals-list");

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
  const goal = { goal: goalsInput.value };
  axios.post("http://localhost:4000/api/goals/", goal).then((res) => {
    const data = res.data;
    console.log(data);

    if (goalsList.hasChildNodes()) {
      goalsList.removeChild(goalsList.childNodes[0]);
    }

    let ul = document.createElement("ul");
    goalsList.append(ul);
    for (let i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      li.append(res.data[i]);
      ul.append(li);
    }
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
form.addEventListener("submit", postGoals);
