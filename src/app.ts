import express from 'express';

const app = express();
const addTwoNumber = (a: number,b:number):number => a + b;
app.get('/', (req,res) => {
    const result = addTwoNumber(3,4)
    res.send('Sum to numbers :'+result);
});
app.listen(3000, ()=> console.log('server is running'));