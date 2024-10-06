const theme_toggle = document.getElementById('theme_toggle');
const text = document.getElementById('text');
const currentTheme = localStorage.getItem('theme')
let webTheme = currentTheme;

if(currentTheme){
    console.log('webTheme: '+currentTheme);
    if(currentTheme == "dark"){
        text.innerHTML = "Current theme (Dark)"
        document.documentElement.setAttribute('data-theme', 'dark')

    }else{
        text.innerHTML = "Current theme (Light)"
        document.documentElement.setAttribute('data-theme', 'light')

    }
}else{
    localStorage.setItem('theme' , 'light')
}

theme_toggle.addEventListener('click' , ()=>{
    console.log('webTheme: '+webTheme);
    
    if(webTheme === "dark"){
        document.documentElement.setAttribute('data-theme', 'light')
        text.innerHTML = "Current theme (Light)"
        localStorage.setItem('theme' , 'light')
        webTheme = 'light'

    }else{
        text.innerHTML = "Current theme (Dark)"
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme' , 'dark')
        webTheme = 'dark'

    }


})