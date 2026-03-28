messages = [
    "'You unlock your phone and immediately forget why you picked it up'",
    "'You wait all day for a message, then reply instantly like you weren't waiting at all'",
    "'You start doing something important… then randomly decide it's the perfect time to clean your room'",
    "'You reread old chats and feel things you thought you already moved past'",
    "'You say “I'm fine” and hope no one asks follow-up questions'",
    "'You plan your whole day perfectly… in your head'",
    "'You tell yourself you'll sleep early, then suddenly it's 2am and you're watching videos'",
    "'You type a message, delete it, retype it, then decide not to send anything'",
    "'You laugh at something alone and wish someone else was there to get it'",
    "'You remember random facts from years ago but forget what you studied yesterday'",
    "'You want to improve your life, but also want to stay comfortable at the same time'",
    "'You check if someone viewed your message more than once for no real reason'",
    "'You feel motivated for about 10 minutes… and then it disappears like it was never there'",
    "'You overthink simple situations until they feel complicated'",
    "'You miss moments while you're in them, without realizing they'll matter later'",
    "'You get attached to routines, even the ones that aren't good for you'",
    "'You want silence… but also don't want to feel alone'",
    "'You finally start focusing, then something small distracts you and it's over'",
    "'You imagine future versions of yourself who have everything figured out'",
    "'You realize you're growing, but it doesn't always feel like progress'",
    "'You want to be productive, but also want to relax and do nothing'"
];

let fetch_msg = (messages) => {
    let random_index = Math.floor(Math.random() * messages.length);
    return messages[random_index];
}
// const prompt = require('prompt-sync')({sigint: true}); // sigint: true allows Ctrl+C to exit
// let game = prompt("Welcome to the 'Relatable Moments' game! Type 'play' to get a random relatable moment or 'exit' to quit.");

// while (game.toLowerCase() !== 'exit') {
//     if (game.toLowerCase() === 'play') {
//         console.log(fetch_msg(messages));
//         console.log();
//         game = input("Type 'play' to get another relatable moment or 'exit' to quit.");
//     } else {
//         console.log("Invalid input. Please type 'play' to get a random relatable moment or 'exit' to quit.");
//     }
// }

console.log(fetch_msg(messages));
console.log();