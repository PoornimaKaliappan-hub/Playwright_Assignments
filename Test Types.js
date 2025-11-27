function runtest(testtype)

{
    
    switch(testtype)
    {
        case 'smoke':
            console.log('this is smoke test');
            break;
            case 'sanity':
            console.log('this is sanity test');
            break;  
            case 'regression':
            console.log('this is regression test');
            break;  
            default:
            console.log('This is a smoke test');
            
    }

}
runtest('default')

