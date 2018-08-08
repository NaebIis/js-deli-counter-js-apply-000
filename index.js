var katzDeliLine = [];
 var x = 0
function takeANumber(katzDeliLine) { 
  // var x = 0
 // while (x <= 0, x++) //
  x++
  katzDeliLine.push(x)
  return  `welcome, you are # ${x}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return`Currently serving ${katzDeliLine.shift()}.`}
  else {
  return "There is nobody waiting to be served!"}
}

function currentLine(kazDeliLine) {
  var x = []
  if (kazDeliLine.length > 0){
    for (let z = 0; z < kazDeliLine.length ; z++){
      x.push(`${z+1}. ${kazDeliLine[z]}`)
    }
      return ('The line is currently: '  +  x.join(", ") )
  }else { 
    return 'The line is currently empty.'
  }
}