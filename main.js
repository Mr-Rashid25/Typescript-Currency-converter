#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.greenBright.bgGray("\n\t>>>>>>>>>> Wellcome To Rashid Currency Converter <<<<<<<<<<"));
console.log(chalk.redBright("\nNote: Base currency is USD."));
const currency = {
    USD: 1, // main US Dollar
    EUR: 0.93, // Euro
    KWD: 0.31, // Kuwaiti Dinar
    BHD: 0.38, // Bahraini Dinar
    PKR: 280, // Pakistani Rupees
};
let UserAnswer = await inquirer.prompt([
    {
        name: "From",
        message: chalk.blueBright("Select Currency to convert From :"),
        type: "list",
        choices: ["USD", "EUR", "KWD", "BHD", "PKR"],
    },
    {
        name: "To",
        message: chalk.bold.blueBright("Select Currency To convert into :"),
        type: "list",
        choices: ["USD", "EUR", "KWD", "BHD", "PKR"],
    },
    {
        name: "Amount",
        message: chalk.greenBright.bold("Enter Your Amount please:"),
        type: "number",
        choices: ["USD", "EUR", "KWD", "BHD", "PKR"],
    },
]);
let userfromCurrency = UserAnswer.From;
let userToCurrency = UserAnswer.To;
let fromAmount = currency[userfromCurrency];
let toAmount = currency[userToCurrency];
let Amount = UserAnswer.Amount;
let baseAmount = Amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(chalk.bold.green(`From ${userfromCurrency}, Currency rate: ${fromAmount}`));
console.log(chalk.bold.magenta(`To ${userToCurrency}, Currency rate: ${toAmount}`));
console.log(chalk.bold.cyanBright(`Entered Amount to convert : ${Amount}`));
console.log(chalk.bold.yellowBright.bgGray(`Converted Amount : ${convertAmount.toFixed(2)}  ${chalk.greenBright(userToCurrency)}`));
