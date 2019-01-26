var kittens = ["Milo","Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  kittens.slice(2, "Broom")
  return kittens
}


