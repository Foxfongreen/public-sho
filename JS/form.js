const contactUsForm = document.querySelector(".contact-us-form")

const TOKEN = "7428299170:AAE0djA_kcwAMzzQFa1dK6rFi6mIsIw7Tgg"
const CHAT_ID = "-1002179658365"
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`

contactUsForm.addEventListener("submit", handleContactUsFormSubmit)
function handleContactUsFormSubmit (event){
event.preventDefault()
const form = event.currentTarget
let message = `Заявка з сайта\n`
message+=`Імʼя: ${form.name.value}\n`
message+=`Телефон: ${form.phone.value}\n`
message+=`Питання: ${form.question.value}\n`

const data = JSON.stringify({chat_id: CHAT_ID, parse_model:"html", text: message})

fetch(URL, {method: "POST", headers: {"Content-Type":"application/json", "Content-Length":data.length}, body:data}).catch((error)=>{console.log(error.message);})
}


