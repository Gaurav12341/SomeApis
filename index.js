const express= require ('express');
const app= express();
const PORT = 7000;
app.use(express.json())

const d= new Date();
const month= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug", "Sept", "Oct","Nov", "Dec"]
const finalDate=d.getDate()+" "+month[d.getMonth()]+" "+d.getFullYear();
const weekday= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day=weekday[d.getDay()];

const about= `What We Do
We Have Been Innovating For More Than 100 Years – And Now We’re Creating What’s Next.
AEROSPACE TECHNOLOGIES
Our products and services are used on virtually every commercial, defense, and space aircraft. We build aircraft engines, cockpit and cabin electronics, wireless connectivity systems and mechanical...
BUILDING AUTOMATION
Commercial building owners and operators depend on our operational technology hardware, software and analytics to help create safer and more efficient and productive facilities. Our solutions and...
ENERGY & SUSTAINABILITY SOLUTIONS​
We can help solve tough sustainability and energy transition challenges across our end markets while seizing new opportunities to deliver outstanding value to our clients and shareholders.​
INDUSTRIAL AUTOMATION​
We provide solutions to support our customers to help deliver results with enhanced productivity and safety standards. Our innovation powers process solutions, asset performance management,...`

const currency= `1 US Dollars = 83.01 Indian Rupees`
const bestCar= `Koenigsegg Regera with the top speed of 251 MPH is the best car in the world. Period!!! `
app.get('/car',(req,res)=>{
    res.status(200).send({
        bestCar
    })
});

app.get('/currency',(req,res)=>{
    res.status(200).send(
    currency)
})

app.get('/date',(req,res)=>{
    res.status(200).send({
        finalDate
    })
})

app.get('/day',(req,res)=>{
    res.status(200).send({
        day
    })
})

app.get('/about',(req,res)=>{
    res.status(200).send({
        about
    })
})

app.listen(
    PORT,
    ()=> console.log(`It's alive on http://localhost:${PORT}`)
);