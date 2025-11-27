function launchbrowser(browser='chrome')
{
    if(browser==='chrome')
        console.log('Luanch Chrome Browser');
    else if(browser==='firefox')
        console.log('Launch Firefox Browser');
    else if (browser==='edge')
        console.log('Launch Edge Browser');
    else
        console.log('Please enter a valid browser name');

}
launchbrowser()