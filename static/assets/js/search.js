const search = () =>{
    const searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product-title")
    const pname = storeitems.getElementsByTagName("ak")

    for (var i = 0; i< pname.length; i++){
        let match = product[i].getElementsByTagName('ak')[0];

        if (match){
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else{
                product[i].style.display = "none";
            }
        }
    }
}



// const userCardTemplate = document.querySelector("[data-user-template]")
// const userCardContainer = document.querySelector("[data-user-cards-container]")
// const searchInput = document.querySelector("[data-search]")

// let users = []

// searchInput.addEventListener("input", e => {
//   const value = e.target.value.toLowerCase()
//   users.forEach(user => {
//     const isVisible =
//       user.name.toLowerCase().includes(value) ||
//       user.email.toLowerCase().includes(value)
//     user.element.classList.toggle("hide", !isVisible)
//   })
// })

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => {
//     users = data.map(user => {
//       const card = userCardTemplate.content.cloneNode(true).children[0]
//       const header = card.querySelector("[data-header]")
//       const body = card.querySelector("[data-body]")
//       header.textContent = user.name
//       body.textContent = user.email
//       userCardContainer.append(card)
//       return { name: user.name, email: user.email, element: card }
//     })
//   })



let availableKeywords= [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'Easy Tutorials',
    'Complete Python',
    'Complete Django',
]

const resultBox = document.querySelector(".result-box")
const inputBox = document.getElementById("input-box")

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
    display(result)
    if (!result.length) {
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "<li>";
    })
    resultBox.innerHTML = "<ul>" + content.join('') + "<ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML
    resultsBox.innerHTML = '';
}