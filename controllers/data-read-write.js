import {readFile, writeFile} from "fs/promises";
import chalk from "chalk";

export const readFileFunc = async () => {
    try{
        const response = await readFile("./data.json"); 
        return JSON.parse(response);
    }
    catch(error){
        console.log(chalk.red.inverse(error.message));
    }
};

export const writeFileFunc = async (data) => {
    try{
        const response = await writeFile("./data.json", JSON.stringify(data));
    }
    catch(error){
        console.log(chalk.red.inverse(error.message));
    }
};

