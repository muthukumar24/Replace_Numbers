function replaceFunction(numbers,valueOne,valueTwo)
{
document.write("Old Array")
document.write("<br>")
document.write("<br>")
document.write(numbers)

for(var i=0; i<numbers.length; i++)
{
    if( numbers[i] == valueOne)
    {
        numbers[i] = valueTwo
    }
}
document.write("<br>")
document.write("<br>")
document.write("Updated Array")
document.write("<br>")
document.write("<br>")
document.write(numbers)
}
var numbers = [1,2,2,3,2,2,5,6]
replaceFunction(numbers,2,7)