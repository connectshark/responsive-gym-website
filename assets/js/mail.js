const subscribeForm = document.querySelector('.subscribe')

function sendSubscribe (event) {
  event.preventDefault()
  const result  = document.querySelector('.email-result')
  const emailBar = document.querySelector('.email-bar')
  result.innerHTML = ''
  emailjs.send("service_r2cq9xy","template_9dcd5ef", {
    user_email: emailBar.value
  }).then(() => {
      emailBar.value = ''
      result.innerHTML = 'Subscribe Success!!'
    })
    .err(() => {
      result.innerHTML = 'Subscribe Error!!'
    })
}

subscribeForm.addEventListener('submit', sendSubscribe)
