var jonSnowAttack = 25
var jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack){
    console.log ("Jon Snow has a better attack than Jamie Lannister")
} else if (jonSnowAttack === jamieLannisterAttack){
    console.log ("They have the same attack.")
} else {
    console.log("Jamie Lannister has a better attack than Jon Snow")
}

var jonSnowHealth = 100
var jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log ("Jon Snow is slain.")
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow's health is now ${jonSnowHealth}`)
}

jonSnowDefense += 25
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
console.log ("Jon Snow is dead.")
} else {
    jonSnowHealth = jonSnowHealth - (jamieLannisterAttack - jonSnowDefense)
    console.log(jonSnowHealth)
}

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log ("Jon Snow has been slain.")
} else {
    jonSnowHealth -= (jamieLannisterAttack -jonSnowDefense)
    console.log (`Jon Snow's health is down to ${jonSnowHealth}`)
}
if ((jonSnowHealth + 50) >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

var coinLandsHeads = false

if (coinLandsHeads === true) {
    console.log ("The fight continues.")
} else {
    console.log ("Jon is allowed to run away.")
}

if (coinLandsHeads !== false) {
    console.log ("The fight continues.")
} else {
    console.log ("Jon is allowed to run away.")
}

// for (let i = 0; i < 5; i++) {
//     jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
//     console.log (`Jon Snow's health is ${jonSnowHealth}`)
// }

// for (let i = 0; i < 5; i ++) {
//     if (jonSnowHealth >= 0) {
//         console.log ("Jon Snow has been slain.")
//     } else {
//         jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
//         console.log (`Jon Snow's health is ${jonSnowHealth}`)
//     }
// }

while (jonSnowHealth > 0) {
jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
console.log (`Jon Snow's health is ${jonSnowHealth}`)
if (jonSnowHealth <=0) {
    console.log ("Jon Snow is slain.")
}
}
