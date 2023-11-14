let championOverwatch = ['Ashe', 'Echo', 'Tracer', 'Reaper', 'Phara', 'McCree', 'Soldier:76', 'Genji', 'Sombra', 'Doomfist', 'Widowmaker', 'Torbjorn', 'Hanzo', 'Bastion', 'Junkrat', 'Mei', 'Symmetra'];

console.log(championOverwatch[2]);
console.log(championOverwatch[15]);

championOverwatch[5] = "Cole Cassidy";
console.log(championOverwatch[5]);
//  let nouveauTab = 
 championOverwatch.push('Ramattra')
 console.log(championOverwatch)
//  let newarray = 
 championOverwatch.push('nop');
 console.log(championOverwatch);
championOverwatch.pop();
console.log(championOverwatch);
// --------------------------------------------------------------
console.log(championOverwatch.toString())
// -----------------------------------------------------------
console.log(championOverwatch.slice(7,13))
// ------------------------------------------------------------
championOverwatch.unshift('champion:0')
console.log(championOverwatch)
// -------------------------------------
championOverwatch[14]=championOverwatch[14].toUpperCase()

console.log(championOverwatch)
// -------------------------------------------------
console.log(championOverwatch.length)
// ----------------------------
championOverwatch.forEach(element => {
    // element = console.log(`les héros d'Overwatch sont:${(championOverwatch.toString())}`)
    // element = console.log('les héros d\'Overwatch sont:'+ element)
     element = console.log(`les héros d'Overwatch sont:${(championOverwatch.join())}`)

});
