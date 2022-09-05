let dropDownDashboard = (function () {
    const menu = document.querySelector('.menu');
    const logo = document.querySelector('.logo');
    const select = document.querySelector('.select');
    const single = document.querySelectorAll('.single');
    const options = document.querySelectorAll('.option');
    const more = document.querySelector('.more');
    const single1 = document.querySelector('#single1');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const optionMore = document.querySelector('#option-more');

    
    single.forEach(div => { 
        div.addEventListener('mouseover', () => {
            div.style.color = 'black';
            div.style.background = 'rgb(23, 255, 73)';
        });
    
        div.addEventListener('mouseout', () => {
            div.style.color = 'rgb(23, 255, 73)';
            div.style.background = 'black';
        });

        div.addEventListener('click', () => { // place holder to add click events to drop down menu options
            console.log(div.textContent);
        });

    });
    
    options.forEach(option => {
        let dropdownOptions = option.children;

        for (const div of dropdownOptions) { // place holder to add click events to drop down menu options
            if(div.textContent === 'Text'){
                div.addEventListener('click', () => {
                    console.log(div.textContent);
                });
            };
        }; 
        
        function showDropdownOptions () {
            for (let i = 0; i < option.children.length; i++) {
                option.children[i].classList.remove('hidden');
                option.children[i].classList.remove('inactive');

                option.children[i].addEventListener('mouseover', () => {
                    option.children[i].style.color = 'white';
                });

                option.children[i].addEventListener('mouseout', () => {
                    option.children[i].style.color = 'black';
                });
            };
        };

        function hideDropdownOptions () {
            for (let i = 0; i < option.children.length; i++) {
                option.children[i].classList.add('hidden');
                option.children[i].classList.add('inactive');
            };
        };

        option.addEventListener('mouseover', () => {
            option.style.color = 'black';
            option.style.background = 'rgb(23, 255, 73)';
            option.style.height = '10rem';
            showDropdownOptions();
        });

        option.addEventListener('mouseout', () => {
            option.style.color = 'rgb(23, 255, 73)';
            option.style.background = 'black';
            option.style.height = '';
            hideDropdownOptions();
        });
    });

    return { menu, logo, select, single, options, more, single1, option1, option2, optionMore }
})();