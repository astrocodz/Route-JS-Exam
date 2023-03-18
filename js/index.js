
let searchedData = document.getElementById("searchedData");









// At App ready - we search for random meal - remove the loading - body overflow auto
$(document).ready(() => {
    searchByName("").then(() => {
        $(".loading-screen").fadeOut(500)
        $("body").css("overflow", "visible")

    })
})










// sideBar open and close
function sideBarOpen() {
    $(".side-nav-bar").animate({
        left: 0
    }, 500)


    $(".toggle-button").removeClass("fa-arrow-right");
    $(".toggle-button").addClass("fa-arrow-left");

    // For links animation when nave open
    for (let i = 0; i < 5; i++) {
        $(".links li").eq(i).animate({
            top: 0
        }, (i) * 250)
    }
}

function sideBarClose() {
    let boxWidth = $(".side-nav-bar .nav-tab").outerWidth()
    $(".side-nav-bar").animate({
        left: -boxWidth
    }, 500)

    $(".toggle-button").addClass("fa-arrow-right");
    $(".toggle-button").removeClass("fa-arrow-left");


    $(".links li").animate({
        top: 300
    }, 500)
}

sideBarClose()
$(".side-nav-bar i.toggle-button").click(() => {
    if ($(".side-nav-bar").css("left") == "0px") {
        sideBarClose()
    } else {
        sideBarOpen()
    }
})

























//Contact Us Form



let submitButton;

function displayContactUs() {
    displayContainer.innerHTML = `<div>
    <div class="container w-75 text-center">
        <div class="row g-3">

        <h3 class="text-center py-4 fw-bold"> Fill Our Your Information</h3>
            <div class="col-md-6">



                <input id="name" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                Name can only have alphabets <br> total characters in the field should be in between 3 and 20.
                </div>
            </div>
            <div class="col-md-6">



                <input id="email" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                   Please use a valid email
                </div>
            </div>
            <div class="col-md-6">



                <input id="phone" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                Please Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">



                <input id="age" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                Please Enter valid age
                </div>
            </div>
            <div class="col-md-6">



                <input  id="password" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                Please Enter valid password <br> Minimum 6 characters, Maximum 12 characters <br> at least 1 letter and 1 number <br> at least 1 special character
                </div>
            </div>


            <div class="col-md-6">



                <input  id="repassword" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>

                
            </div>
        </div>
        <button id="submitButton" disabled class="btn btn-success px-2 mt-3 w-100">Submit</button>
    </div>



</div> 


`






    document.getElementById("name").addEventListener("focus", () => {
        nameOnFocus = true
    })

    document.getElementById("email").addEventListener("focus", () => {
        emailOnFocus = true
    })

    document.getElementById("phone").addEventListener("focus", () => {
        phoneOnFocus = true
    })

    document.getElementById("age").addEventListener("focus", () => {
        ageOnFocus = true
    })

    document.getElementById("password").addEventListener("focus", () => {
        passwordOnFocus = true
    })

    document.getElementById("repassword").addEventListener("focus", () => {
        repasswordOnFocus = true
    })
}

let nameOnFocus = false;
let emailOnFocus = false;
let phoneOnFocus = false;
let ageOnFocus = false;
let passwordOnFocus = false;
let repasswordOnFocus = false;



submitButton = document.getElementById("submitButton");

function inputsValidation() {
    if (nameOnFocus) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailOnFocus) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneOnFocus) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageOnFocus) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordOnFocus) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordOnFocus) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitButton.removeAttribute("disabled")
    } else {
        submitButton.setAttribute("disabled", true)
    }
}

function nameValidation() {
    //Regular expression for name field that will accept alphabets only and total characters in the field should be in between 3 and 20.
    return (/^[a-zA-Z ]{3,20}$/.test(document.getElementById("name").value))
}

function emailValidation() {
    //Regular expression for email field
    return (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(document.getElementById("email").value))
}

function phoneValidation() {
    //Regular expression for phone field

    return (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,6})$/.test(document.getElementById("phone").value))
}

function ageValidation() {
    //Regular expression for age field ---> to 150
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/.test(document.getElementById("age").value))
}

function passwordValidation() {
    //Regular expression for password field
    return (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/.test(document.getElementById("password").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("password").value
}






















let displayContainer = document.getElementById("displayContainer");



function displayMeals(arr) {
    let appCartoona = "";

    for (let i = 0; i < arr.length; i++) {
        appCartoona += `
        <div class="col-md-3">
                <div onclick="getMealDetails('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-1 cursor-pointer">
                    <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${arr[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
    }

    displayContainer.innerHTML = appCartoona;
}


//Categories
async function getCategories() {
    //Clear content to recive new content
    displayContainer.innerHTML = ""
    $(".items-loading-screen").fadeIn(500)
    searchedData.innerHTML = "";

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response = await response.json()

    displayCategories(response.categories)
    $(".items-loading-screen").fadeOut(500)

}

function displayCategories(arr) {
    let appCartoona = "";

    for (let i = 0; i < arr.length; i++) {
        appCartoona += `
        <div class="col-md-4">
                <div onclick="getCategoryMeals('${arr[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${arr[i].strCategoryThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${arr[i].strCategory}</h3>
                    </div>
                </div>
        </div>
        `
    }

    displayContainer.innerHTML = appCartoona
}















//Areas
async function getArea() {
    //Clear content to recive new content
    displayContainer.innerHTML = ""
    $(".items-loading-screen").fadeIn(500)

    searchedData.innerHTML = "";

    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    respone = await respone.json()
    console.log(respone.meals);

    displayArea(respone.meals)
    $(".items-loading-screen").fadeOut(500)

}


function displayArea(arr) {
    let appCartoona = "";

    for (let i = 0; i < arr.length; i++) {
        appCartoona += `
        
        <div class="col-md-3">
        

      
                <div onclick="getAreaMeals('${arr[i].strArea}')" class=" country rounded-2 text-center cursor-pointer py-3">
                         <i class="fa-solid fa-earth-americas fa-3x"></i>
                        <h3>${arr[i].strArea}</h3>
                </div>

               
        </div>
        `
    }

    displayContainer.innerHTML = appCartoona
}















//Ingredients
async function getIngredients() {
    //Clear content to recive new content
    displayContainer.innerHTML = ""
    $(".items-loading-screen").fadeIn(500)

    searchedData.innerHTML = "";

    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    respone = await respone.json()
    console.log(respone.meals);

    displayIngredients(respone.meals.slice(0, 20))
    $(".items-loading-screen").fadeOut(500)

}


function displayIngredients(arr) {
    let appCartoona = "";

    for (let i = 0; i < arr.length; i++) {
        appCartoona += `
        <div class="col-md-3">
                <div onclick="getIngredientsMeals('${arr[i].strIngredient}')" class=" ingredients rounded-2 text-center cursor-pointer">
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_1ybf5iqh.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
                        <h3>${arr[i].strIngredient}</h3>
                        <p>${arr[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
                </div>
        </div>
        `
    }

    displayContainer.innerHTML = appCartoona
}













//Meals from Category
async function getCategoryMeals(category) {
    //Clear content to recive new content
    displayContainer.innerHTML = ""
    $(".items-loading-screen").fadeIn(500)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    response = await response.json()


    displayMeals(response.meals.slice(0, 20))
    $(".items-loading-screen").fadeOut(500)

}



//Meals from Area
async function getAreaMeals(area) {
    //Clear content to recive new content
    displayContainer.innerHTML = ""
    $(".items-loading-screen").fadeIn(500)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    response = await response.json()


    displayMeals(response.meals.slice(0, 20))
    $(".items-loading-screen").fadeOut(500)

}










//Meals from Ingredients

async function getIngredientsMeals(ingredients) {
    //Clear content to recive new content
    displayContainer.innerHTML = ""
    $(".items-loading-screen").fadeIn(500)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    response = await response.json()


    displayMeals(response.meals.slice(0, 20))
    $(".items-loading-screen").fadeOut(500)

}









async function getMealDetails(mealID) {
    sideBarClose()
    //Clear content to recive new content
    displayContainer.innerHTML = ""
    $(".items-loading-screen").fadeIn(500)

    searchedData.innerHTML = "";
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    respone = await respone.json();

    console.log(respone);

    displayMealDetails(respone.meals[0])
    $(".items-loading-screen").fadeOut(500)

}








//Show Meal Data

function displayMealDetails(meal) {

    searchedData.innerHTML = "";


    let ingredients = ``


    for (let i = 1; i <= 10; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients += `<li class=" recipes ">   ${meal[`strMeasure${i}`]}  ${meal[`strIngredient${i}`]}     </li>`
        }
    }

    let tags = meal.strTags?.split(",")

    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="tags">${tags[i]}</li>`
    }



    let appCartoona = `
    <div class="col-md-4">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h3 class="py-4 fw-bold">${meal.strMeal}</h3>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${ingredients}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>

                <a target="_blank" href="${meal.strSource}" class="btn btn-primary"><i class="fa-solid fa-link"></i> Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger"> <i class="fa-brands fa-youtube"></i> Youtube</a>
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_unycsfzn.json"  background="transparent"  speed="1"  style="width: 500px; height: 300px;"  loop  autoplay></lottie-player>
            </div>`

    displayContainer.innerHTML = appCartoona
}


function showSearchForm() {
    searchedData.innerHTML = `
    <div class="row py-5 ">
        <div class="col-md-6 ">
            <input onkeyup="searchByName(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchByFirstLetter(this.value)" maxlength = "1"  class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    </div>`
//Clear content to recive new content
    displayContainer.innerHTML = ""
}

async function searchByName(mealName) {
    sideBarClose()
    //Clear content to recive new content
    displayContainer.innerHTML = ""
    $(".items-loading-screen").fadeIn(500)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    response = await response.json()

    response.meals ? displayMeals(response.meals) : displayMeals([])
    $(".items-loading-screen").fadeOut(500)

}

async function searchByFirstLetter(firstLetter) {
    sideBarClose()
    //Clear content to recive new content
    displayContainer.innerHTML = ""
    $(".items-loading-screen").fadeIn(500)

    firstLetter == "" ? firstLetter = "r" : "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    response = await response.json()

    response.meals ? displayMeals(response.meals) : displayMeals([])
    $(".items-loading-screen").fadeOut(500)

}
