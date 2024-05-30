const Datas = new XMLHttpRequest();
const users = new XMLHttpRequest();
const body = document.querySelector("body");
const container = document.getElementById("container");
const ser = document.getElementById("ser");
const serbtn = document.getElementById("serbtn");
const segr = document.getElementsByClassName("segr");
const sml1 = document.getElementById("sml1");
const sml2 = document.getElementById("sml2");
const sml3 = document.getElementById("sml3");
const a = parseInt(sml1.innerText);
const b = parseInt(sml2.innerText);
const c = parseInt(sml3.innerText);
const categ = document.getElementById("categ");
const showAera = document.getElementById("showAera");
const showAuther = document.getElementById("showAuther");
const shoWslider1 = document.getElementById("shoWslider1");
const shoWslider2 = document.getElementById("shoWslider2");
const shoWslider3 = document.getElementById("shoWslider3");
const shoWslider4 = document.getElementById("shoWslider4");
const ninthslid1 = document.getElementById("ninthslid1")
const ninthslid2 = document.getElementById("ninthslid2")
const ninthslid3 = document.getElementById("ninthslid3")
const TenthShowAuther = document.getElementById("TenthShowAuther")

console.log(TenthShowAuther)
console.log(ninthslid1,ninthslid2,ninthslid3 )
console.log(showAuther)
console.log(a, b, c);
console.log(window.innerWidth);
function samcount() {
  let s = 1900;
  setInterval((e) => {
    sml1.innerText = " ";
    sml1.innerText = `${s}`;
    s += 1;
    if (s >= a) {
      sml1.innerText = `${a}`;
      clearInterval(e);
    }
  }, 1);
  samcount2();
  samcount3();
}
function samcount2() {
  let f = 700;
  setInterval((l) => {
    sml2.innerText = " ";
    sml2.innerText = `${f}`;
    f += 1;
    if (f >= b) {
      sml2.innerText = `${b}`;
      clearInterval(l);
    }
  }, 20);
}
function samcount3() {
  let f = 100;
  setInterval((l) => {
    sml3.innerText = " ";
    sml3.innerText = `${f}`;
    f += 1;
    if (f >= c) {
      sml3.innerText = `${c}`;
      clearInterval(l);
    }
  }, 30);
}
ser.onfocus = function (e) {
  serbtn.style.display = "none";
};
window.addEventListener("load", samcount());




ser.onblur = function (e) {
  serbtn.style.display = "block";
};
serbtn.onclick = (e) => {
  e.preventDefault();
  serbtn.classList.toggle("yalla");
  if (serbtn.classList.contains("yalla")) {
    ser.classList.add("now");
  } else {
    ser.classList.remove("now");
  }
};

console.log(serbtn);
console.log(ser);
console.log(window.innerWidth);

Datas.open("GET", "https://dummyjson.com/products");
Datas.send();
users.open("GET", "https://dummyjson.com/users");
users.send();


Datas.onload = function () {
  let Data = JSON.parse(Datas.response);
  console.log(Data.products);
  // let y = x.filter((z, c) => x[c - 1] != z)
  // console.log(y)
  users.onload = function usersload () {
    let user = JSON.parse(users.response);
    console.log(user.users);
    showdata(Data,user)
    showauther(user)
    sliders(Data, user)
    console.log(x)
    autosliders(user,y,r,t,s,y,r)
  };
  let x = []
  let y = []
  let z = []
  let r = []
  let s = []
  let t = []
  for (let i = 0; i < Data.products.length; i++) {
    if (Data.products[i].category == "smartphones") {
      x.push(Data.products[i])
    } else if (Data.products[i].category == "beauty") {
      y.push(Data.products[i])
    } else if (Data.products[i].category == "laptops") {
      z.push(Data.products[i])
    } else if (Data.products[i].category == "fragrances") {
      r.push(Data.products[i])
    } else if (Data.products[i].category == "groceries") {
      s.push(Data.products[i])
    } else if (Data.products[i].category == "furniture") {
      t.push(Data.products[i])
    }
  
  }
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(r);
  console.log(s);
  console.log(t);

};
function showdata(pruduct,user) {
  console.log(pruduct);
  showAera.innerHTML = "";
  let p = 6;
  for (let i = 0; i < 6; i++) {
    showAera.innerHTML += `
    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-8 mx-md-auto mx-auto col-12 mb-3">
            <div class="card justify-content-between">
              <div class="img">
                <img
                  src="${pruduct.products[i].images[0]}"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <div
                  class="users d-flex justify-content-start flex-column flex-lg-row align-items-center mb-3"
                    >
                  <div class="user d-flex align-items-center">
                    <div class="userimg">
                      <img src="${user.users[i].image}" alt="" />
                      <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <span class="text-wrap text-break">${user.users[i].email}</span>
                  </div>
                  <div class="user d-flex mt-2 mt-lg-0 align-items-center">
                    <div class="userimg">
                      <img src="${user.users[p].image}" alt="" />
                      <i class="fa-regular fa-circle-check" id="dif"></i>
                    </div>
                    <span class="text-wrap text-break">${user.users[p].email}</span>
                  </div>
                </div>
                <h5 class="card-title">${pruduct.products[i].title}</h5>
                <div
                  class="social d-flex align-items-center justify-content-start p-2"
                >
                  <div class="socialLogo">
                    <a href="#"><i class="fa-regular fa-file-lines"></i></a>
                    <a href="#"><i class="fa-solid fa-share-nodes"></i></a>
                    <a href="#"><i class="fa-solid fa-flag  mt-2 mt-lg-0 "></i></a>
                  </div>
                  <div class="inform">
                    <span>Unit : 22.5 ETH 1/12</span>
                  </div>
                </div>
                <div
                  class="lastInfo d-flex justify-content-start position-relative"
                >
                  <span>price : ${pruduct.products[i].price}.EGP </span>
                  <div class="makebtn">
                    <a href="#"><span>Bid Now</span></a>
                  </div>
                </div>
              </div>
              <div class="befor"><span>Auction ended</span></div>
              <div class="after">
                <span ><i class="fa-regular fa-heart" id="red" ></i> ${pruduct.products[i].rating}</span>
              </div>
            </div>
          </div>`;
    p++
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


function showauther(user) {
  showAuther.innerHTML = ""
  TenthShowAuther.innerHTML = ""
  for (let i = 0; i <= 7; i++) {
    showAuther.innerHTML += `
    <div
              class="col-lg-3 col-md-4 p-xl-2 ps-xxl-5 col-sm-8 col-9 mx-auto my-1 mb-xl-0 mt-md-3 mx-md-0"
            >
              <div class="back">
                <div class="row align-items-center">
                  <div
                    class="col d-flex justify-content-around d-md-block ms-0"
                  >
                    <div class="justify-content-around">
                      <img src="${user.users[i].image}" alt="" />
                      <i class="fa-regular fa-circle-check"></i>
                    </div>
                  </div>
                  <div class="col-7 col-md-8 ">
                    <span class="text-break"
                      >${user.users[i].firstName} ${user.users[i].maidenName}</span
                    >
                    <span class=" text-break d-block "
                      >${user.users[i].username}@uni</span
                    >
                    <p class="my-2">Total items : 5</p>
                  </div>
                  <div class="makebtn3 mt-5 text-center">
                    <a href="#">Follow </a>
                  </div>
                </div>
              </div>
            </div>
    `
    TenthShowAuther.innerHTML += `
    <div class="col-lg-3 col-md-5 col-6 mx-auto my-1 my-xl-1 mx-xl-0">
              <div class="back px-1">
                <div class="row align-items-center justify-content-around p-0">
                  <div class="col-5 d-flex justify-content-around ms-0">
                    <div class="d-flex justify-content-around">
                      <div class="divimguser position-relative" style="background-image: url(${user.users[i].image});">
                      <i class="fa-regular fa-circle-check"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 me-0 text-center">
                    <span class="text-wrap text-break" id="userEMAIl">${user.users[i].firstName} ${user.users[i].maidenName}</span>
                    <p class="my-1 overflow-hidden">${user.users[i].username}</p>
                    <p class="my-1 overflow-hidden">${user.users[i].email}</p>
                  </div>
                  
                </div>
              </div>
            </div>
    `
  }
}

function sliders(product,user) {
  shoWslider1.innerHTML = ""
  shoWslider2.innerHTML = ""
  shoWslider3.innerHTML = ""
  shoWslider4.innerHTML = ""
  let c = 3 
  let p = 6
  for (let i = 0; i < 3; i++) {
    shoWslider1.innerHTML += `
      
                    <div class="col-12 col-sm-10 col-md-7 col-lg-7 mx-auto  col-xl-4 px-lg-5 px-xl-3 px-3">
                  <div class="card slidCard position-relative"  id="slidCard">
                    <div class="imgcard">
                    <img src="${product.products[i].images[0]}" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                      <div class="card-title row slidTile">
                        <div class=" sliduser col-2">
                          <!-- <img src="imgs/1.jpg" alt="" /> -->
                          <div class="usersmall" style="background-image: url(${user.users[i].image});"><i class="fa-regular fa-circle-check"></i></div>
                          
                        </div>
                        <div class=" sliduser col-2">
                          <!-- <img src="imgs/1.jpg" alt="" /> -->
                          <div class="usersmall" id="user2" style="background-image: url(${user.users[c].image});"><i class="fa-regular fa-circle-check"></i></div>
                          
                        </div>
                        <div class=" sliduser col-2">
                          <!-- <img src="imgs/1.jpg" alt="" /> -->
                          <div class="usersmall" id="user3" style="background-image: url(${user.users[p].image});"><i class="fa-regular fa-circle-check"></i></div>
                          
                        </div>
                        
                      </div>
                      <h4 class="card-title py-3 mb-1 text-break">${product.products[i].title}</h4>
                      <div class="row pb-5 pt-2 ">
                        <div class="col-9 mx-auto col-lg-6 mx-lg-0 row mb-lg-0 mb-3 " id="slidIcons">
                          <div class="col-4 "><i class="fa-regular fa-file-lines"></i>
                          </div>
                          <div class="col-4 "><i class="fa-solid fa-share-nodes"></i>
                          
                          </div>
                          <div class="col-4 "><i class="fa-solid fa-flag "></i>
                          </div>
                        </div>
                        <div class="makebtn5 col-7 mx-auto col-lg-6 mx-lg-0 text-center pt-2 mt-1">
                          <a href="#">Bid Now</a>
                        </div>
                      </div>
                    </div>
                    <div class="beforCARD"><span>Auction ended</span></div>
                    <div class="afterCARD"><span><i class="fa-regular fa-heart" id="red"></i> ${product.products[i].rating} k</span></div>
                  </div>
                  `
    c++
    p++
  }
  for (let i = 0; i < 3; i++) {
    shoWslider2.innerHTML += `
                    <div class="col-12 col-sm-10 col-md-7 col-lg-7 mx-auto  col-xl-4 px-lg-5 px-xl-3 px-3">
                  <div class="card slidCard position-relative"  id="slidCard">
                    <div class="imgcard">
                    <img src="${product.products[i + 3].images[0]}" class="card-img-top" alt="..."style="object-position: center;">
                    </div>
                    <div class="card-body">
                      <div class="card-title row slidTile">
                        <div class=" sliduser col-2">
                          <!-- <img src="imgs/1.jpg" alt="" /> -->
                          <div class="usersmall"  style="background-image: url(${user.users[i + 9].image});"><i class="fa-regular fa-circle-check"></i></div>
                          
                        </div>
                        <div class=" sliduser col-2">
                          <!-- <img src="imgs/1.jpg" alt="" /> -->
                          <div class="usersmall" id="user2"  style="background-image: url(${user.users[c + 9].image});"><i class="fa-regular fa-circle-check"></i></div>
                          
                        </div>
                        <div class=" sliduser col-2">
                          <!-- <img src="imgs/1.jpg" alt="" /> -->
                          <div class="usersmall" id="user3"  style="background-image: url(${user.users[p + 9].image});"><i class="fa-regular fa-circle-check"></i></div>
                          
                        </div>
                        
                      </div>
                      <h4 class="card-title py-3 mb-1 text-break">${product.products[i + 3].title}</h4>
                      <div class="row pb-5 pt-2 ">
                        <div class="col-9 mx-auto col-lg-6 mx-lg-0 row mb-lg-0 mb-3 " id="slidIcons">
                          <div class="col-4 "><i class="fa-regular fa-file-lines"></i>
                          </div>
                          <div class="col-4 "><i class="fa-solid fa-share-nodes"></i>
                          
                          </div>
                          <div class="col-4 "><i class="fa-solid fa-flag "></i>
                          </div>
                        </div>
                        <div class="makebtn5 col-7 mx-auto col-lg-6 mx-lg-0 text-center pt-2 mt-1">
                          <a href="#">Bid Now</a>
                        </div>
                      </div>
                    </div>
                    <div class="beforCARD"><span>Auction ended</span></div>
                    <div class="afterCARD"><span><i class="fa-regular fa-heart" id="red"></i> ${product.products[i + 3].rating} k</span></div>
                  </div>
                    
    `
    c++
    p++
  }
  for (let i = 0; i < 3; i++) {
    shoWslider3.innerHTML += `
                    <div class="col-12 col-sm-10 col-md-7 col-lg-7 mx-auto  col-xl-4 px-lg-5 px-xl-3 px-3">
                  <div class="card slidCard position-relative"  id="slidCard">
                    <div class="imgcard">
                    <img src="${product.products[i + 6].images[0]}" class="card-img-top" alt="..." style="object-position: center top;">
                    </div>
                    <div class="card-body">
                      <div class="card-title row slidTile">
                        <div class=" sliduser col-2">
                          <!-- <img src="imgs/1.jpg" alt="" /> -->
                          <div class="usersmall" style="background-image: url(${user.users[i].image});"><i class="fa-regular fa-circle-check"></i></div>
                          
                        </div>
                        <div class=" sliduser col-2">
                          <!-- <img src="imgs/1.jpg" alt="" /> -->
                          <div class="usersmall" id="user2" style="background-image: url(${user.users[c].image});"><i class="fa-regular fa-circle-check"></i></div>
                          
                        </div>
                        <div class=" sliduser col-2">
                          <!-- <img src="imgs/1.jpg" alt="" /> -->
                          <div class="usersmall" id="user3" style="background-image: url(${user.users[p].image});"><i class="fa-regular fa-circle-check"></i></div>
                          
                        </div>
                        
                      </div>
                      <h4 class="card-title py-3 mb-1 text-break">${product.products[i + 6].title}</h4>
                      <div class="row pb-5 pt-2 ">
                        <div class="col-9 mx-auto col-lg-6 mx-lg-0 row mb-lg-0 mb-3 " id="slidIcons">
                          <div class="col-4 "><i class="fa-regular fa-file-lines"></i>
                          </div>
                          <div class="col-4 "><i class="fa-solid fa-share-nodes"></i>
                          
                          </div>
                          <div class="col-4 "><i class="fa-solid fa-flag "></i>
                          </div>
                        </div>
                        <div class="makebtn5 col-7 mx-auto col-lg-6 mx-lg-0 text-center pt-2 mt-1">
                          <a href="#">Bid Now</a>
                        </div>
                      </div>
                    </div>
                    <div class="beforCARD"><span>Auction ended</span></div>
                    <div class="afterCARD"><span><i class="fa-regular fa-heart" id="red"></i> ${product.products[i +6].rating} k</span></div>
                  </div>
                  
                    
    `
  }
  for (let i = 0; i < 3; i++) {
    shoWslider4.innerHTML += `
      
                    <div class="col-12 col-sm-10 col-md-7 col-lg-7 mx-auto  col-xl-4 px-lg-5 px-xl-3 px-3">
                  <div class="card slidCard position-relative"  id="slidCard">
                    <div class="imgcard">
                    <img src="${product.products[i + 14].images[0]}" class="card-img-top" alt="..." style="object-position: center;">
                    </div>
                    <div class="card-body">
                      <div class="card-title row slidTile">
                        <div class=" sliduser col-2">
                          <!-- <img src="imgs/1.jpg" alt="" /> -->
                          <div class="usersmall" style="background-image: url(${user.users[i+5].image});"><i class="fa-regular fa-circle-check"></i></div>
                          
                        </div>
                        <div class=" sliduser col-2">
                          <!-- <img src="imgs/1.jpg" alt="" /> -->
                          <div class="usersmall" id="user2" style="background-image: url(${user.users[c+8].image});"><i class="fa-regular fa-circle-check"></i></div>
                          
                        </div>
                        <div class=" sliduser col-2">
                          <!-- <img src="imgs/1.jpg" alt="" /> -->
                          <div class="usersmall" id="user3" style="background-image: url(${user.users[p+10].image});"><i class="fa-regular fa-circle-check"></i></div>
                          
                        </div>
                        
                      </div>
                      <h4 class="card-title py-3 mb-1 text-break">${product.products[i + 14].title}</h4>
                      <div class="row pb-5 pt-2 ">
                        <div class="col-9 mx-auto col-lg-6 mx-lg-0 row mb-lg-0 mb-3 " id="slidIcons">
                          <div class="col-4 "><i class="fa-regular fa-file-lines"></i>
                          </div>
                          <div class="col-4 "><i class="fa-solid fa-share-nodes"></i>
                          
                          </div>
                          <div class="col-4 "><i class="fa-solid fa-flag "></i>
                          </div>
                        </div>
                        <div class="makebtn5 col-7 mx-auto col-lg-6 mx-lg-0 text-center pt-2 mt-1">
                          <a href="#">Bid Now</a>
                        </div>
                      </div>
                    </div>
                    <div class="beforCARD"><span>Auction ended</span></div>
                    <div class="afterCARD"><span><i class="fa-regular fa-heart" id="red"></i> ${product.products[i + 14].rating} k</span></div>
                  </div>
                  
                    
    `
    c++
    p++
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

function autosliders(user,...prudact) {
  ninthslid1.innerHTML = ""
  ninthslid2.innerHTML = ""
  ninthslid3.innerHTML = ""
  let c = 3 
  let p = 6
  for (let i = 0; i < 2; i++) {
    ninthslid1.innerHTML += `
      <div class="col-12 col-sm-10 col-md-7 col-lg-6 col-xl-5 px-lg-5 px-3">
                      <div class="card slidCard position-relative" id="slidCard2">
                        <div class="imgcard">
                          <img src="${prudact[i][i].images[0]}" class="card-img-top" alt="..." style="object-position: center;">
                        </div>
                        <div class="card-body">
                          <div class="div-smallIMG">
                            <div class="contentIMg">
                              <div class="row">
                                <div class="col-4">
                                  <div class="img" style="background-image: url(${prudact[i][i].images[0]});"></div>
                                </div>
                                <div class="col-4"> 
                                  <div class="img" style="background-image: url(${prudact[i][i+2].images[0]});"></div>
                              </div>
                                <div class="col-4">
                                  <div class="img" style="background-image: url(${prudact[i][i+3].images[0]});"></div>
                              </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-title row slidTile" id="ninthslider">
                            <div class="col-5" id="createdITEM">
                              <span>"4" items. loved by</span>
                            </div>
                            <div class=" sliduser col-2">
                              <div class="usersmall" style="background-image: url(${user.users[i].image});"><i class="fa-regular fa-circle-check"></i></div>
                            </div>
                            <div class=" sliduser col-2">
                              <div class="usersmall" style="background-image: url(${user.users[c].image});"><i class="fa-regular fa-circle-check"></i></div>
                            </div>
                            <div class=" sliduser col-2">
                              <div class="usersmall" style="background-image: url(${user.users[p].image});"><i class="fa-regular fa-circle-check"></i></div>
                            </div>
                          </div>
                          <span class="card-title py-3 mb-1 text-break">${prudact[i][0].category}
                          </span>
                          <div class="row pb-5 pt-2 ">
                            <div class="col-12 mx-auto col-lg-9 mx-lg-0 row mb-lg-0 mb-3 " id="slidIcons">
                              <div class="col-2 me-lg-1 "><i class="fa-regular fa-file-lines"></i>
                              </div>
                              <div class="col-2 me-lg-1"><i class="fa-solid fa-share-nodes"></i>
                              </div>
                              <div class="col-2 me-lg-1"><i class="fa-solid fa-flag "></i>
                              </div>
                              <div class="col-2 me-lg-1" id="basket"><i class="fa-solid fa-basket-shopping" style="color: #f7f7f7;"></i>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        <div class="beforCARD"><span>Auction ended</span></div>
                        <div class="afterCARD"><span><i class="fa-regular fa-heart" id="red"></i> ${prudact[i][0].rating} k</span></div>
                      </div>
                    </div>
                  `
    c++
    p++
  }
  for (let i = 2; i < 4; i++) {
    ninthslid2.innerHTML += `
                    <div class="col-12 col-sm-10 col-md-7 col-lg-6 col-xl-5 px-lg-5 px-3">
                      <div class="card slidCard position-relative" id="slidCard2">
                        <div class="imgcard">
                          <img src="${prudact[i][0].images[0]}" class="card-img-top" alt="..." style="object-position: center;">
                        </div>
                        <div class="card-body">
                          <div class="div-smallIMG">
                            <div class="contentIMg">
                              <div class="row">
                                <div class="col-4">
                                  <div class="img" style="background-image: url(${prudact[i][1].images[0]});"></div>
                                </div>
                                <div class="col-4"> 
                                  <div class="img" style="background-image: url(${prudact[i][2].images[0]});"></div>
                              </div>
                                <div class="col-4">
                                  <div class="img" style="background-image: url(${prudact[i][3].images[0]});"></div>
                              </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-title row slidTile" id="ninthslider">
                            <div class="col-5" id="createdITEM">
                              <span>"4" items. loved by</span>
                            </div>
                            <div class=" sliduser col-2">
                              <div class="usersmall" style="background-image: url(${user.users[i].image});"><i class="fa-regular fa-circle-check"></i></div>
                            </div>
                            <div class=" sliduser col-2">
                              <div class="usersmall" style="background-image: url(${user.users[c+2].image});"><i class="fa-regular fa-circle-check"></i></div>
                            </div>
                            <div class=" sliduser col-2">
                              <div class="usersmall" style="background-image: url(${user.users[p+2].image});"><i class="fa-regular fa-circle-check"></i></div>
                            </div>
                          </div>
                          <span class="card-title py-3 mb-1 text-break">${prudact[i][0].category}
                          </span>
                          <div class="row pb-5 pt-2 ">
                            <div class="col-12 mx-auto col-lg-9 mx-lg-0 row mb-lg-0 mb-3 " id="slidIcons">
                              <div class="col-2 me-lg-1"><i class="fa-regular fa-file-lines"></i>
                              </div>
                              <div class="col-2 me-lg-1"><i class="fa-solid fa-share-nodes"></i>
                              </div>
                              <div class="col-2 me-lg-1"><i class="fa-solid fa-flag "></i>
                              </div>
                              <div class="col-2 me-lg-1" id="basket"><i class="fa-solid fa-basket-shopping" style="color: #f7f7f7;"></i>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        <div class="beforCARD"><span>Auction ended</span></div>
                        <div class="afterCARD"><span><i class="fa-regular fa-heart" id="red"></i> ${prudact[i][0].rating} k</span></div>
                      </div>
                    </div>
                  `
    c++
    p++
    }
  for (let i = 4; i < 6; i++) {
    ninthslid3.innerHTML += `
                    <div class="col-12 col-sm-10 col-md-7 col-lg-6 col-xl-5 px-lg-5 px-3">
                      <div class="card slidCard position-relative" id="slidCard2">
                        <div class="imgcard">
                          <img src="${prudact[i][0].images[0]}" class="card-img-top" alt="..." style="object-position: center;">
                        </div>
                        <div class="card-body">
                          <div class="div-smallIMG">
                            <div class="contentIMg">
                              <div class="row">
                                <div class="col-4">
                                  <div class="img" style="background-image: url(${prudact[i][1].images[0]});"></div>
                                </div>
                                <div class="col-4"> 
                                  <div class="img" style="background-image: url(${prudact[i][3].images[0]});"></div>
                              </div>
                                <div class="col-4">
                                  <div class="img" style="background-image: url(${prudact[i][4].images[0]});"></div>
                              </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-title row slidTile" id="ninthslider">
                            <div class="col-5" id="createdITEM">
                              <span>"4" items. loved by</span>
                            </div>
                            <div class=" sliduser col-2">
                              <div class="usersmall" style="background-image: url(${user.users[i].image});"><i class="fa-regular fa-circle-check"></i></div>
                            </div>
                            <div class=" sliduser col-2">
                              <div class="usersmall" style="background-image: url(${user.users[c+8].image});"><i class="fa-regular fa-circle-check"></i></div>
                            </div>
                            <div class=" sliduser col-2">
                              <div class="usersmall" style="background-image: url(${user.users[p+8].image});"><i class="fa-regular fa-circle-check"></i></div>
                            </div>
                          </div>
                          <span class="card-title py-3 mb-1 text-break">${prudact[i][0].category}
                          </span>
                          <div class="row pb-5 pt-2 ">
                            <div class="col-12 mx-auto col-lg-9 mx-lg-0 row mb-lg-0 mb-3 " id="slidIcons">
                              <div class="col-2 me-lg-1"><i class="fa-regular fa-file-lines"></i>
                              </div>
                              <div class="col-2 me-lg-1"><i class="fa-solid fa-share-nodes"></i>
                              </div>
                              <div class="col-2 me-lg-1"><i class="fa-solid fa-flag "></i>
                              </div>
                              <div class="col-2 me-lg-1" id="basket"><i class="fa-solid fa-basket-shopping" style="color: #f7f7f7;"></i>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        <div class="beforCARD"><span>Auction ended</span></div>
                        <div class="afterCARD"><span><i class="fa-regular fa-heart" id="red"></i> ${prudact[i][0].rating} k</span></div>
                      </div>
                    </div>
    `
    c++
    p++
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








// function showprudc(pruduct) {
//   console.log(pruduct)
//   container.innerHTML = ""
//   pruduct.map(function (pruduct) {
//     container.innerHTML += `<div class="col-xl-3 col-lg-6 mb-3">
//           <div class="card  h-100" style="width: 18rem;">
//             <div class="img">
//               <img src="${pruduct.image}" class="card-img-top" alt="...">
//             </div>
//             <div class="card-body">
//               <h5 class="card-title">${pruduct.title}</h5>
//               <p class="card-text">${pruduct.description}
//               </p>
//               <p>price: $ ${pruduct.price}</P>
//             </div>
//           </div>
//         </div>`
//   })
// }
