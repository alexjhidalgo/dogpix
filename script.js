'use strict';

function getDogz() {
    const lim = document.getElementById("dognum").value;
    console.log(lim)
        if (lim <=50 && lim > 0){
            for (let i = 0; i < lim; i++){
                fetch('https://dog.ceo/api/breeds/image/random')
                    .then(response => response.json() ) 
                    .then(responseJson => 
                        showDogz(responseJson));
                    // .catch(error => alert('whoa buddy!');
            }
        }
        else if (lim < 0 || lim > 50){
            alert('Please choose a number between 1 and 50')
        }
    
    
}
function showDogz(responseJson) {
    console.log(responseJson);
    console.log(responseJson.message); //This still needs to display the image in the console
    $('.picture').append(`<img src="${responseJson.message}" class="imagen">`)
    // $('.picture').removeClass('hidden')
}

function itsHappening() {
    $('.ask-doggos').on('submit', function(){
        event.preventDefault();
        getDogz(); 
    })
}

$(function runIt() {
    $(document).ready() 
    console.log('Locked n Loaded');
    itsHappening();
    
});















// 'use strict';

// function getDogz() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json() ) /* why can't it just be .then(response => console.log(response.json() ) ) ?*/
//         .then(responseJson => 
//             showDogz(responseJson))
//         // .catch(error => alert('whoa buddy!'))
// }
// function showDogz(responseJson) {
//     console.log(responseJson);
//     $('.imagen').replaceWith(`<img src="${responseJson.message}" class="imagen">`)
//     $('.picture').removeClass('hidden')
// }

// function itsHappening() {
//     $('.ask-doggos').on('submit', function(){
//         event.preventDefault();
//         getDogz();   
//     })
// }

// $(function runIt() {
//     $(document).ready() 
//     console.log('Locked n Loaded');
//     itsHappening();
    
// });
