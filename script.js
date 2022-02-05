const coffee = document.querySelector('.thumb')

coffee.onmouseover = (e) => {
    if (e.target.src) {
        document.getElementById('starbucks').src = e.target.src
        document.getElementById('circle').style.background = e.target.id
    }
}

toggleMenu = () => {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation')
    
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}