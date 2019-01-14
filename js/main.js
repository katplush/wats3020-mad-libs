//Mad Libs Prompts.

let honorific = prompt('Please enter an honorific title (e.g. Mister or Colonel).','Madame');

let authorName = prompt('What is your full name?','Kat Plush');

let adjective1 = prompt('Give me a descriptive term','beautiful');

let vehicle = prompt ('Give me a vehicle type','bicycle');

let vehiclePart = prompt ('Give me a vehicle part','handle bars');

let parking = prompt ('Give me a location of where you park the vehicle you just named','garage');

let precious = prompt('Give me a precious object','wedding ring');

let noiseMaker = prompt('Give me an object that makes some sort of sound','harmonica');

let crowdBehavior = prompt('Name a behavior or action that people do together or in a crowd','the wave');

let adjective2 = prompt('Give me a descriptive term','muscular');

let adjective3 = prompt('Give me a another descriptive term','silky smooth');

let color = prompt('Name a color','forest green');

let familyMember = prompt('Name a family member relationship type','second cousin');

let organ = prompt('Give me the name of a body organ','pancreas');

let bodyPart1 = prompt('Give me the name of a body part','elbow');

let bodyPart2 = prompt('Give me the name of another body part','big toe');

let bodyPart3 = prompt('Give me the name of another body part','knee');

let thing = prompt('Give me an object','shoe');

let thing2 = prompt('Give me an object that you might give somebody you love','box of chocolates');

let thing3 = prompt('Give me an object that you might give somebody you like','gift card');

let adjective4 = prompt('Give me a descriptive word for a vehicle','sleek');

let adjective5 = prompt('Give me a descriptive word for a vehicle','shiny');


////////////////////////////////////////////////////////////////////////
// Section Numbers
//

let userNumber = prompt('Enter your lucky number; zero not allowed','7');

userNumber = parseInt(userNumber);

let number2 = userNumber + 3;
let number3 = userNumber * 2;



// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector('#madlib-title');
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector('#madlib-text');
storyParagraph.innerHTML = storyText;