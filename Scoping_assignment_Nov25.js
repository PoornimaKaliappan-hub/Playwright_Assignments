var genderType='unisexMale';
function printGender()
{
    let color='brown';
    if(genderType.startsWith('Male'))
    {
    var age=30;
    let color='pink';
    console.log('The colour inside if block:', color)
 }
 else
    {
    var age=35;
    console.log('The colour outside if block:', color);
   }
 console.log('Age outside if block:',age);
}
printGender();
