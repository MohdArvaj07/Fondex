// var updateBtns = document.getElementsByClassName('update-cart')

// for (var i = 0; i < updateBtns.length; i++) {
//     updateBtns[i].addEventListener('click', function(){
//         var productId = this.dataset.product
//         var action = this.dataset.action
//         console.log('productId:', productId, 'action:', action)

//         console.log('USER:', user)
//         if (user == 'AnonymousUser') {
//             console.log('User is not Authenticated')
//         }
//         else{
//             updateUserOrder(productId,action)
//         }
//     })

// }

// function updateUserOrder(productId, action){
//     console.log('User is logged in, sending data..')
//     var url = '/update_item/'
//     fetch(url,{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json',
//             'X-CSRFToken':csrftoken,
//         },
//         body:JSON.stringify({'productId':productId, 'action':action})
//     })

//     .then((response)=>{
//         return response.json()
//     })
//     .then((data)=>{
//         location.reload()
//     })
// }



// var addItemId = 0
// function addToCart(item){
//     addItemId += 1
//     var selectedItem  = document.createElement('div')
//     selectedItem.classList.add('cartImg')
//     selectedItem.setAttribute('id',addItemId)
//     var img = document.createElement('img')
//     img.setAttribute('src',item.children[0].currentSrc )
//     var title
//     var cartItems = document.getElementById('title')
//     selectedItem.append
//     cartItems.append(selectedItem)

// }



// First request - to server to create an order

const paymentStart = () =>{
    console.log("Payment Started...");
    let amount = $("#payment_field").val();
    console.log(amount);
    if (amount == "" || amount==null ) {
        alert("amount is required !!")
        return;
    }

    // We will use ajax to send request to server to create order

    // $.ajax(
    //     {
    //     url ='/user/create_order',
    //     data:JSON.stringify({amount:amount,infor:'order_request'}),
    //     contentType:'application/json',
    //     type:'POST',
    //     dataType:'json',
    //     success:function(response){
    //         // involved when success
    //         console.log(response)
    //     },
    //     error:function(error){
    //         // involved when error
    //         console.log(error)
    //         alert("Something went Wrong !!")
    //     }
    //     }
    // )
}
