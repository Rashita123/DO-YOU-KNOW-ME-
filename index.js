var figlet=require('figlet');
console.log(figlet.textSync('Hello Friend!', { horizontalLayout: 'full' }));


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
  var flag=false;

  for(var i=0;i<answer.length;i++){
    if(user_ans===answer[i]){
    console.log(chalk.cyan("You are Right! "));
    score++;
    flag=true;
    }
  }
  
  if(flag===false){
    console.log(chalk.blue.bgGreen("Oops! You are wrong!"));
  }
}


var quest_ans = [
  {
    quest:"Who is more close to me? (Mom Or Mad Angles ;-)",
    ans: ["Mom","mom"],
  },
  {
  quest: "Do you know my Best Friend's name? ",
  ans: ["Swastika","swastika"],
  },
  {
    quest: "What do you think I love doing? (cooking Or coding) ",
    ans: ["Coding","coding"],
  },
  {
    quest:"Which language I am currently into? (JAVA Or JavaScript)",
    ans: ["JavaScript","javascript","Javscript"]
  },
  {
    quest: "Which language is used to make this fun Game? ",
    ans: ["JavaScript","javascript","Javscript"]
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
