const lunchBtn = document.querySelector(".Lunch");
const left = document.querySelector(".left");
const rocket = document.querySelector(".rocket-container");
const fires = [...document.querySelectorAll(".fire")];
let lunchCounter = 10;

lunchBtn.addEventListener("click", (e) => rocketlunch());

const rocketlunch = () => {
  lunchBtn.style.display = "none";
  creatElement("div", lunchCounter, "timer", left);
  creatElement("button", "Abort", "Abort", left);
  const timer = setInterval(() => {
      if (lunchCounter <= 0) {
          clearInterval(timer);
          fires.forEach((item) => (item.style.display = "block"));
          rocket.classList.add("fly")
          document.querySelector(".Abort").style.display = "none";
          creatElement("button", "reset", "reset", left);
          document.querySelector(".reset").addEventListener("click",resetProject)
        } else {
            --lunchCounter;
            document.querySelector(".timer").innerHTML = lunchCounter;
        }
    }, 500);
    document.querySelector(".Abort").addEventListener("click" , () => abortProject(timer));
};

const abortProject = (Interval) => {
    clearInterval(Interval);
    creatElement(
      "div",
      `<h3>Do You want to cancel the Project ?!</h3><div class="modal-btns"><button class="yes-btn">Yes</button><button class="no-btn">No</button></div>`,
      "modal",
      document.body
      );
    creatElement("div","","dark",document.body);
    document.body.querySelector(".no-btn").addEventListener("click", () => {
        left.querySelector(".timer").remove();
        left.querySelector(".Abort").remove();
        document.body.querySelector(".modal").remove();
        document.body.querySelector(".dark").remove();
        rocketlunch();
    })
    document.body.querySelector(".yes-btn").addEventListener("click", () => {
        document.body.querySelector(".modal").remove();
        document.body.querySelector(".dark").remove();
        resetProject();
    })
};
const resetProject = () => {
    lunchCounter = 10;
    rocket.classList.remove("fly");
    fires.forEach((item) => (item.style.display = "none"));
    lunchBtn.style.display = "block";
    left.querySelector(".timer").remove();
    left.querySelector(".Abort").remove();
    left.querySelector(".reset").remove();
};
const creatElement = (tagName, value, className, appendParent) => {
  const Element = document.createElement(`${tagName}`);
  Element.innerHTML = value;
  Element.classList.add(`${className}`);
  appendParent.append(Element);
};
