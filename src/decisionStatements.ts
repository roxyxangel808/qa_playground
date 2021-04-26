if (true) console.log("Beer!")

if (false) {
    console.log("Won't work")
}
if (false) {
    console.log("Won't work")
} else {
    console.log("Beer!")
}
if (false) {
    console.log ("Tired")
} else if (false) {
    console.log ("I'm awake!")
} else if (true) {
    console.log ("Beer!")
}
let Oranges = "Juice"
switch (Oranges) {
    case "water":
        console.log ("That's not juice!")
    break
    case "champagne":
        console.log ("That's not juice!")
    break
    case "juice":
        console.log ("This is juice!")
    break
    default:
        console.log ("That's not juice!")
}