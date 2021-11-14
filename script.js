let menu_btn = document.getElementById('menubtn')
let content = document.getElementById('main')
// let home = document.getElementById('home')
// let about = document.getElementById('about')
// let services = document.getElementById('services')
// let contacts = document.getElementById('contacts')
let menu=document.getElementById('navbarmenu')
let footer =document.getElementById('footbarmenu')
let access = true;

menu_btn.addEventListener('click', swipe)

function animation_add_menu(){
    menu.style.display='flex';
}

function animation_add_content(){
    menu.style.display='none';
}

function change_icon(path){
    menu_btn.style.opacity = '0';
    setTimeout(function (){menu_btn.src = path}, 1000);
    setTimeout(function (){menu_btn.style.opacity = '1'}, 1000);
}

// function waiting(){
//     access = false;
//     setTimeout(function (){access = true}, 2100);
// }

function swipe(){
    if (access){
        if (menu_btn.src.includes('/images/menu')) {
            change_icon('./images/x_button.svg');
            setTimeout(animation_add_menu, 1000);
            menu.style.opacity='1'
            // waiting();
        } else {
            change_icon('/images/menu.png');
            menu.style.opacity='0'
            setTimeout(animation_add_content, 1000);
            // waiting();
        }
    }
}