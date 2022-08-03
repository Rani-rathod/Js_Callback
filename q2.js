

const perOne = (friend,callfrnd) => {
    console.log(`I am busy right now.I am talking to ${friend}.I will call you back`);
    callfrnd();
}
const perTwo = () => {
    console.log(`Hey  what's up. I call back you.`)
}
perOne("Rani",perTwo)