let switchTheme = document.getElementById('switchTheme');
const themeIcon = document.getElementById('theme-icon');

switchTheme.onclick = function(){
    let theme = document.getElementById('theme');

    if (theme.getAttribute("href") == "css/light.css"){
        theme.href = "css/styles.css";
        themeIcon.textContent = 'dark_mode';
        
        
    } else {
        theme.href = "css/light.css";
        themeIcon.textContent = 'light_mode';
    }
}
