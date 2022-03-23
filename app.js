let theme=document.getElementById("theme");



function change()
{
    let css=document.getElementById("style");

    let themetext=theme.innerHTML;

    if(themetext=="Light Theme"){
    css.setAttribute("href", "css\\styles1.css")
    theme.innerHTML="Dark Theme"
    }
    else{
        css.setAttribute("href", "css\\style2.css")
        theme.innerHTML="Light Theme"
    }
}