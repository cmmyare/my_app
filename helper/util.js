import {promises as fs} from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(),  '/helper/data.json');

export const readData = async ()=>{
    const jsonData = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(jsonData);
}
export const writeData = async (data)=>{
    const jsonData = JSON.stringify(data);
    await fs.writeFile(dataFilePath, jsonData, 'utf-8');
    //return jsonData;
}