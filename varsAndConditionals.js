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
