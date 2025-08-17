// بسم تعالی

function wakeUp()
{
    return new Promise((resolve , reject) =>
    {
        setTimeout(() => {
            console.log('wake up');
            resolve('i am wake up at 07:00')
        }, 2000);
    })
}
function eatBreakFat(msg)
{
    return new Promise((resolve , reject) =>
        {
            setTimeout(() => {
                console.log(msg + " and eat BreakFast");
                resolve('finish eating in 07:40')
            }, 2000);
        })   
}
function goWork(msg)
{
    return new Promise((resolve , reject) =>
        {
            setTimeout(() => {
                console.log(msg + " and go work");
                resolve('finish all work')
            }, 2000);
        })   
}
wakeUp()
    .then(eatBreakFat)
    .then(goWork)
    .then(msg => console.log(msg))