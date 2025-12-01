function reverstring_ispalindrome(input)
{
    
    const text= String(input);
    // console.log('string is:',text);

    const chars=text.split("");
    // console.log('text split into chars:',chars);

    const reversed_chars=chars.reverse();
    // console.log('chars reversed is:',reversed_chars);

    const final_string=reversed_chars.join("");
     console.log("Reversed string is:",final_string)
     if(final_string===text)
     {
        console.log('The final string is palindrome:',final_string)
     }
     else
     {
       console.log('The final string is not palindrome:',final_string) 
     }
}
reverstring_ispalindrome('pooy');