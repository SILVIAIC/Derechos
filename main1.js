const randomize = document.querySelector('.randomize');
const para = document.createElement('p');
let xItem;

function randomValueFromArray(array) {
    var list = document.querySelectorAll('p');
    let i = list.length; 
    if(list.length < 9)
        {return  array[i];}
    else { dispatchEvent()}
}

let insertx = ["a la protección de su salud, seguridad e intereses económicos;",
    "a una información adecuada y veraz;",
    "a la libertad de elección;",
    'a condiciones de trato equitativo y digno;',
    'a la educación para el consumo;',
    'a la defensa de la competencia;',
    'a la calidad y eficiencia de los servicios públicos;',
    'a la constitución de asociaciones de consumidores y de usuarios;',
    'a la participación en asociaciones y otros entes de control de los servicios públicos.'];

    randomize.addEventListener('click', result);


    function result() {
    
       
        xItem = randomValueFromArray(insertx);

        const para = document.createElement('p');
            para.textContent = xItem;
            document.body.appendChild(para);
            
    
       

        /*let newStory = xItem;
        story.textContent = newStory;
        story.style.visibility = 'visible'; */
    }
    
