$(document).ready(function () {
    // функция отправки формы
    const sendForm = async (message) => {
        const token = bot.token;
        const chat_id = bot.chat_id
        return await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`)
            .then((response) => { return response.json(); })
            .then((data) => { return data })
            .catch((error) => { return error });
    }


    // найти все элементы формы
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const message = document.getElementById('message')
    const btn = document.getElementById('submit')

    btn.addEventListener('click', () => {

        console.log(typeof(name.value.length))

        if (name.value.lenght > 0) {
            console.log('success')
        }
        else {
            console.log('not_success')
        }


        if (name.value.lenght > 0 && email.value.length > 0 && message.value.length > 0) {
            console.log('dgdgd')
        }
        const data = `Name: ${name.value}%0A${email.value}%0A${message.value}`
        // sendForm(data)
    })

});