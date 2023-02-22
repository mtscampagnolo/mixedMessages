const getRandom = num => Math.floor(Math.random() * num);
//Gets Number returns 0 -> Number -1

//Options for the messages
const quantunLuck = {
    animalSpirit:['Dog', 'Cat', 'Horse', 'Turttle'],
    luck:['Realy bad', 'Bad', 'Good', 'Very good'],
    action:['Start something new', 'Read a book', 'Retake an old project', 'Ignore this']
}

//Goes throug the object and save the random result into messages
const messages = []

for(let key in quantunLuck){
    let num = quantunLuck[key].length;

    switch(key){
        case "animalSpirit":
            messages.push(`Your animal spirit is a ${quantunLuck[key][getRandom(num)]}`);
            break;

        case "luck":
            messages.push(`Your luck today seems ${quantunLuck[key][getRandom(num)]}`);
            break;

        case "action":
            messages.push(`Today is a good day to ${quantunLuck[key][getRandom(num)]}`);
            break;

        default:
            console.log('invalid Option');
            break;
    }
}

//Printing the result
console.log(messages.join('\n'))