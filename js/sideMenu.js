const Ham = {
    $selector: document.querySelector('.menu-ham'),
    $bar1: document.querySelector('.bar-1'),
    $bar2: document.querySelector('.bar-2'),
    $bar3: document.querySelector('.bar-3'),
    $menu: document.querySelector('.menu-popup'),
    isActive: false,
}

Ham.$selector.addEventListener('click', () => {
    if(!Ham.isActive){
        //Hambuger animation ON
        Ham.$bar2.style.opacity = 0;
        Ham.$bar1.classList.add('bar-1-anim')
        Ham.$bar3.classList.add('bar-3-anim')
        Ham.isActive = true
        
        //Show menu
        Ham.$menu.classList.toggle('popin')
    }else{
        //Hambuger animation OFF
        Ham.$bar2.style.opacity = 1;
        Ham.$bar1.classList.remove('bar-1-anim')
        Ham.$bar3.classList.remove('bar-3-anim')
        Ham.isActive = false

        //Hide menu
        Ham.$menu.classList.toggle('popin')
    }
})
