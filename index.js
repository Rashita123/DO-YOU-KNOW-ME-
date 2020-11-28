var readlineSync=require('readline-sync');

const chalk=require('chalk');

var name=readlineSync.question(chalk.red('Hey! Whats your name? '));
console.log();
console.log(chalk.cyan('Welcome '+chalk.red(name)+' to '+chalk.red('[DO YOU KNOW Rashita]')+ ' Game!'));
console.log();
console.log(chalk.cyan("lets Play!"));

console.log("************************************");

console.log();
var score=0;
function play(question, answer){
  var user_ans=readlineSync.question(chalk.red(question));
  if(user_ans===answer){
    console.log(chalk.cyan("You are Right! "));
    score++;
  }else{
    console.log(chalk.blue.bgGreen("Oops! You are wrong!"));
  }
}


var quest_ans = [
  {
    quest:"Who is more close to me? (Mom Or Mad Angles ;-)",
    ans: "Mom",
  },
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
console.log();
console.log(chalk.cyan("Hey!! Your final score is: "+chalk.red(score)));
console.log();
console.log(chalk.blue.bgGreen("Congrats! This is how much you know me ;-)"));
