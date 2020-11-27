var readlineSync=require('readline-sync');

var name=readlineSync.question('Hey! Whats your name? ');
console.log('Welcome '+name+' to [DO YOU KNOW Rashita]- Game!');
console.log("lets Play!");

console.log();
var score=0;
function play(question, answer){
  var user_ans=readlineSync.question(question);
  if(user_ans===answer){
    console.log("You are Right! ");
    score++;
  }else{
    console.log("Oops! You are wrong!");
  }
}


var quest_ans = [
  {
  quest: "Do you know my Best Friend's name? ",
  ans: "Swastika",
  },
  {
    quest: "What do you think I love doing? (cooking Or coding) ",
    ans: "coding",
  },
  {
    quest:"Which language I am currently into? (JAVA Or JavaScript)",
    ans: "JavaScript"
  },
  {
    quest: "Which language is used to make this fun Game? ",
    ans: "JavaScript"
  }
];
for(var i=0;i<quest_ans.length;i++)
{
  play(quest_ans[i].quest,quest_ans[i].ans);
  console.log("----------------------");
}

console.log("Hey!! Your final score is: "+score);
console.log("Congrats! This is how much you know me ;-)");
