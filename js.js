function wakeUp()
{
    return new Promise((resolve , reject) =>
    {
        setTimeout(() => {
            console.log('wake up');
            
            resolve({id:1 , name:'jam & bread' , drink:"milk"})
        }, 2000);
    })
}
function eatBreakFast(food)
{
    return new Promise((resolve , reject) =>
    {
        setTimeout(() => {
            console.log(`wow my fod is ${food.name} and with ${food.drink} , thanks for god💕`);
            resolve('24 min & 39 sec')
        }, 2000);
    })
}
function goWork(time)
{
    return new Promise((resolve , reject) =>
    {
        setTimeout(() => {
          console.log(`oh no ! my eating long ${time} , i must go to work`);
          resolve("finished !")
        }, 2000);
    })
}
wakeUp()
.then(eatBreakFast

)
.then(goWork)
.then(response3 => console.log(response3))