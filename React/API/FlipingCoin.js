const tossCoin=()=>{
    return Math.random() > 0.5 ? "heads" : "tails";
}

const fiveHeadsSync=()=> {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(attempts)
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        }else {
            headsCount = 0;
        }if (attempts>100) {
            return 'failed'
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}

const fiveHeads=()=>{
    return new Promise( (resolve, reject) => {
        if(fiveHeadsSync()!= 'failed') {
            resolve("This is run after the fiveHeadsSync function completes");
        } else {
            reject("We couldn't get 5 heads in a row");
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
