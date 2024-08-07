

const cartList = document.querySelector(".cart-list");
const emptyCartTitle = document.querySelector(".empty-cart")
const totalCartPrice = document.querySelector(".cart-total-price")
const cartBtnWrapper = document.querySelector(".actions-button-wrapper")
const cartTotalPriceValue = document.querySelector(".cart-total-price-value")
const notification = document.querySelector(".notification")
const notificationText = document.querySelector(".notification-text")
const filterForm = document.querySelector(".filter-form")
const filterClearButton = document.querySelector(".clear-filter")
const filterPowerForm = document.querySelector(".power-form-js")
const availableForm = document.querySelector(".available-form-js")
const clearCartBtn = document.querySelector(".clear-button")
const cartInnerWrapper = document.querySelector(".cart-inner-counter")


export const cartArr = JSON.parse(localStorage.getItem("cartArr")) || [] 
if(cartArr.length){
    cartInnerWrapper.style.display = "flex"
}else{
    cartInnerWrapper.style.display = "none"
}
cartInnerWrapper.textContent = cartArr.reduce((acc, item)=>{
    acc+=item.quantity
    return acc

},0)

export function onRemoveBtnClick(event){
    if (event.target.classList.contains("remove-button")){
    const id = Number(event.currentTarget.id)
    event.currentTarget.remove()
    const indexToRemove = cartArr.findIndex((item)=>{
    return item.id===id
    })
    cartArr.splice(indexToRemove, 1)
    const totalPrice = cartArr.reduce((acc, item)=>{
        acc+=item.quantity*Number(item.price)
        return acc
    },0) 
    cartTotalPriceValue.textContent = `${totalPrice},00₴`
    }
    if (!cartArr.length){
        cartBtnWrapper.classList.remove("active")
        totalCartPrice.classList.remove("show")
        emptyCartTitle.classList.add("show")
    }
    if(cartArr.length){
        cartInnerWrapper.style.display = "flex"
    }else{
        cartInnerWrapper.style.display = "none"
    }
    cartInnerWrapper.textContent = cartArr.reduce((acc, item)=>{
        acc+=item.quantity
        return acc
    
    },0)
    localStorage.setItem("cartArr", JSON.stringify(cartArr))
    }

    export function onDecrementBtnClick(event){
        if (event.target.classList.contains("counter-decrement")){
            const id = Number(event.currentTarget.id)
            const objectToIncrement = cartArr.find((item)=>{
                return item.id === id
            })
            objectToIncrement.quantity-=1
            if (objectToIncrement.quantity===0){
                event.currentTarget.remove()
                const indexToRemove = cartArr.findIndex((item)=>{
                    return item.id===id
                    
                    })
                    cartArr.splice(indexToRemove, 1)
                    const totalPrice = cartArr.reduce((acc, item)=>{
                        acc+=item.quantity*Number(item.price)
                        return acc
                    },0) 
                    cartTotalPriceValue.textContent = `${totalPrice},00₴.`
                    if(cartArr.length){
                        cartInnerWrapper.style.display = "flex"
                    }else{
                        cartInnerWrapper.style.display = "none"
                    }
                    cartInnerWrapper.textContent = cartArr.reduce((acc, item)=>{
                        acc+=item.quantity
                        return acc
                    
                    },0)
                    if (!cartArr.length){
                        cartBtnWrapper.classList.remove("active")
                        totalCartPrice.classList.remove("show")
                        emptyCartTitle.classList.add("show")
                    } return
            }
           
            const cartMarkup = createNoteCartMarkup(objectToIncrement)
            cartList.replaceChild(cartMarkup, event.currentTarget)
            const totalPrice = cartArr.reduce((acc, item)=>{
                acc+=item.quantity*Number(item.price) 
                return acc   
                },0)
                cartTotalPriceValue.textContent = `${totalPrice},00₴`
            cartList.querySelector(`[id="${id}"]`).addEventListener("click",onRemoveBtnClick)
            cartList.querySelector(`[id="${id}"]`).addEventListener("click",onDecrementBtnClick)
            cartList.querySelector(`[id="${id}"]`).addEventListener("click",onIncrementBtnClick)
            if(cartArr.length){
                cartInnerWrapper.style.display = "flex"
            }else{
                cartInnerWrapper.style.display = "none"
            }
            cartInnerWrapper.textContent = cartArr.reduce((acc, item)=>{
                acc+=item.quantity
                return acc
            
            },0)
            
        }
      localStorage.setItem("cartArr", JSON.stringify(cartArr))
    }
    export function onIncrementBtnClick(event){
    if (event.target.classList.contains("counter-increment")){
        const id = Number(event.currentTarget.id)
        const objectToIncrement = cartArr.find((item)=>{
            return item.id === id
        })
        objectToIncrement.quantity+=1
        const cartMarkup = createNoteCartMarkup(objectToIncrement)
        cartList.replaceChild(cartMarkup, event.currentTarget)
        const totalPrice = cartArr.reduce((acc, item)=>{
        acc+=item.quantity*Number(item.price) 
        return acc   
        },0)
        cartTotalPriceValue.textContent = `${totalPrice},00₴`
        cartList.querySelector(`[id="${id}"]`).addEventListener("click",onRemoveBtnClick)
        cartList.querySelector(`[id="${id}"]`).addEventListener("click",onDecrementBtnClick)
        cartList.querySelector(`[id="${id}"]`).addEventListener("click",onIncrementBtnClick)
        if(cartArr.length){
            cartInnerWrapper.style.display = "flex"
        }else{
            cartInnerWrapper.style.display = "none"
        }
        cartInnerWrapper.textContent = cartArr.reduce((acc, item)=>{
            acc+=item.quantity
            return acc
        
        },0)
        
    }
    localStorage.setItem("cartArr", JSON.stringify(cartArr))
    }
    
    function createNoteCartMarkup(item){
        const cartItem = document.createElement("li")
        cartItem.classList.add("cart-list-item")
        cartItem.id = `${item.id}`
        const cartImg = document.createElement("img")
        cartImg.width = "100"
        cartImg.height = "100"
        cartImg.src = "./images/Fjord-cond.jpg"
        cartImg.alt = "конндиціонер Bergen Fjord"
        const cartTitle = document.createElement("p")
        cartTitle.classList.add("cart-item-title")
        cartTitle.textContent = `Інверторний кондиціонер ${item.name}`
        const counterWrapper = document.createElement("div")
        counterWrapper.classList.add("cart-item-counter-wrapper")
        const dicrementBtn = document.createElement("button")
        dicrementBtn.classList.add("counter-decrement")
        dicrementBtn.textContent = "-"
        const incrementBtn = document.createElement("button")
        incrementBtn.classList.add("counter-increment")
        incrementBtn.textContent = "+"
        const counter = document.createElement("span")
        counter.classList.add("cart-item-counter")
        counter.textContent = `${item.quantity}`
        counterWrapper.append(dicrementBtn, counter,incrementBtn)
        const itemPrice = document.createElement("p")
        itemPrice.classList.add("cart-item-total-price")
        itemPrice.textContent=`${item.price*item.quantity}₴`
        const removeBtn = document.createElement("button")
        removeBtn.classList.add("remove-button")
        removeBtn.innerHTML = "&#x2717"
        cartItem.append(cartImg, cartTitle, counterWrapper, itemPrice, removeBtn)
        return cartItem
    }
    
    export function createCartMarkup(item) {
       return ` <li id=${item.id} class="cart-list-item">
                             <img class="cart-item-img" width="100" height="100" src="./images/Fjord-cond.jpg"
                                        alt="конндиціонер Bergen Fjord">
                                <p class="cart-item-title">Інверторний кондиціонер ${item.name}</p>
                                <div class="cart-item-counter-wrapper">
                                <button class="counter-decrement">-</button>
                                <span class="cart-item-counter">${item.quantity}</span>
                                <button class="counter-increment">+</button>
                                </div>                     
                                <p class="cart-item-total-price">${item.price}₴</p>
                                <button class="remove-button">&#x2717</button>
                                </li>`;
        }
    
        clearCartBtn.addEventListener("click", onClearBtnClick)
        export function onClearBtnClick(){
        cartList.innerHTML = ""
        cartBtnWrapper.classList.remove("active")
        totalCartPrice.classList.remove("show")
        emptyCartTitle.classList.add("show")
        cartArr.length = 0
        }
            