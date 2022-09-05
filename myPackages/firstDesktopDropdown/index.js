const dropDownMenu = (function () {
    const menu = document.querySelector('.menu');
    const logo = document.querySelector('.logo');
    const select = document.querySelector('.select');
    const single = document.querySelectorAll('.single');
    const options = document.querySelectorAll('.option');
    const more = document.querySelector('.more');
    const single1 = document.querySelector('#single1');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const optionMore = document.querySelector('#option-more');
    const dropdown1 = document.querySelector('#dropdown1');
    const dropdown2 = document.querySelector('#dropdown2');
    const dropdown3 = document.querySelector('#dropdown3');
    const dropdownMore= document.querySelector('#dropdown-more');
    
    single.forEach(div => {
        let line = div.children[0]; // selects the dropdown line
    
        div.addEventListener('mouseover', () => {
            div.style.color = 'white';
            line.style.background = 'white';
        });
        div.addEventListener('mouseout', () => {
            div.style.color = 'rgb(23, 255, 73)';
            line.style.background = 'rgb(23, 255, 73)';
        });

        div.addEventListener('click', () => { // place holder to add click events to drop down menu options
            console.log(div.textContent);
        });
    });
    
    options.forEach(option => { //css & dom
        const dropdown = option.children[0];
        let dropdownOptions = dropdown.children; 
    
        option.addEventListener('mouseover', () => {
            dropdown.style.width = '12rem';
            dropdown.style.height = '30%';
            
    
            for (let i = 0; i < dropdown.children.length; i++) {
    
                dropdown.children[i].classList.add('dropdown-option');
                dropdown.children[i].classList.remove('hidden');
    
                dropdown.children[i].addEventListener('mouseover', () => {
                    dropdown.children[i].style.color =  'white'; //'rgb(97, 255, 132)'; <-- previous value
                });
    
                dropdown.children[i].addEventListener('mouseout', () => {
                    // dropdown.children[i].style.background = 'rgb(23, 255, 73)';
                    dropdown.children[i].style.color = 'black';
                });
            };
        });
    
        option.addEventListener('mouseout', () => {
            dropdown.style.width = '8rem';
            dropdown.style.height = '0.2rem';
    
            for (let i = 0; i < dropdown.children.length; i++) {
                dropdown.children[i].classList.remove('dropdown-option');
                dropdown.children[i].classList.add('hidden');
            };
        });

            
        for (const div of dropdownOptions) { // place holder to add click events to drop down menu options
            if(div.textContent === '> Text'){
                div.addEventListener('click', () => {
                    console.log(div.textContent);
                });
            };
        }; 
    });
    
    return { menu, select, options, more, logo, single, 
        single1, option1, option2, option3, optionMore, dropdown1, dropdown2, dropdown3, dropdownMore };

})();
