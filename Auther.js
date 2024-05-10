const Datas = new XMLHttpRequest();
const users = new XMLHttpRequest();
const allpruducts = document.getElementById("allpruducts");

Datas.open("GET", "https://dummyjson.com/products");
Datas.send();
users.open("GET", "https://dummyjson.com/users");
users.send();

const search = document.getElementById("search");

Datas.onload = function () {
  let Data = JSON.parse(Datas.response);
  console.log(Data.products);
  users.onload = function usersload() {
    let user = JSON.parse(users.response);
    console.log(user.users);
    showdata(Data, user)
    console.log(okkk[1].innerText)
  }
  console.log(JSON.parse(Datas.response))
}

function showdata(pruduct,user) {
  console.log(pruduct);
  allpruducts.innerHTML= ""
  let d = 29;
  for (let i = 0; i < pruduct.products.length; i++) {
    
      allpruducts.innerHTML += `
      <div class="col-12 col-md-6 col-xl-4 mb-3" id="okkk" >
          <div class="card justify-content-between" id="hight">
            <div class="img">
              <div class="pruductImg" style="background-image:url(${pruduct.products[i].images[0]});"></div>
            </div>
            <div class="card-body">
              <div class="users d-flex justify-content-start align-items-center mb-3">
                <div class="user d-flex align-items-center">
                  <div class="userimg">
                    <img src="${user.users[i].image}" alt="" />
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <span>${user.users[i].username}</span>
                </div>
                <div class="user d-flex align-items-center">
                  <div class="userimg">
                    <img src="${user.users[d].image}" alt="" />
                    <i class="fa-regular fa-circle-check" id="dif"></i>
                  </div>
                  <span>${user.users[d].username}</span>
                </div>
              </div>
              <h5 class="card-title">"${pruduct.products[i].category}" | "${pruduct.products[i].brand}" | "${pruduct.products[i].title}" </h5>
              <h6>${(pruduct.products[i].description).slice(0,50)+"..."}</h6>
              <div class="social d-flex align-items-center justify-content-start py-2 ">
                <div class="socialLogo">
                  <a href="#"><i class="fa-regular fa-file-lines"></i></a>
                  <a href="#"><i class="fa-solid fa-share-nodes"></i></a>
                  <a href="#"><i class="fa-solid fa-flag mt-2 mt-lg-0"></i></a>
                </div>
                <div class="inform">
                  <span>Dis : "${pruduct.products[i].discountPercentage}%" | Stock : "${pruduct.products[i].stock}"</span>
                </div>
              </div>
              <div class="lastInfo d-flex justify-content-start position-relative">
                <span>price : ${pruduct.products[i].price}.EGP </span>
                <div class="makebtn">
                  <a href="#">Bid Now</a>
                </div>
              </div>
            </div>
            <div class="befor"><span>Auction ended</span></div>
            <div class="after">
              <span><i class="fa-regular fa-heart" id="red"></i> ${pruduct.products[i].rating}</span>
            </div>
          </div>
          </div>
      `
      d -= 1
    
  }
  const red = document.querySelectorAll("#red");
  console.log(red)
  red.forEach((e) => {
    e.onclick = function (e) {
      if (e.target.classList.contains("on")) {
        e.target.classList.remove("on");
      } else {
        e.target.classList.add("on");
      }
    };
  });
}

search.addEventListener("keyup", function (e) { 
  const Cards = document.querySelectorAll(".card-title")
  const okkk = document.querySelectorAll("#okkk")
  console.log(okkk)
  let x = search.value
  let D = JSON.parse(Datas.response)
  for (let i = 0; i < okkk.length; i++) {
    if ((okkk[i].innerText.toLowerCase()).includes(x) && x !== undefined && x !== " ") {
      okkk[i].style = "display: block !important"
      console.log(true)
    } else {
      okkk[i].style = "display:none !important"
      console.log(false)
    }
  }
  console.log(typeof x)
})























































  // console.log(CardsTitle[0].innerHTML);
  // let x =[]
  // CardsTitle.forEach((e) => {
  //   x.push(e.innerHTML);
  // })
  // console.log(x);
  // let m = ["sami","mohamed"]
  // console.log(m[0].includes("s"))
  // let y = x.map((e) => {
  //   return e.includes("|") ? e.split("|") : e 
  // }).reduce((acc, e) => {
  //   return acc + e
  // }).split("").filter((e) => e !== '"').reduce((acc, e) => {
  //   return acc + e
  // }).split(",")
  
  // if (y[0].includes("smartphones")) {
  //   console.log("true")
  // } else {
  //   console.log("false")
  // }
  
  // for (let i = 0; i < y.length; i++) {
  //   console.log(y[i])
  //   console.log(y[i].trim().split(""))
  //   if ((y[i].trim().split("")).indexOf(ser.value) >= 0) {
  //     console.log(true)
  //   } else {
  //     console.log(false)
  //   }
  // }