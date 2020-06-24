
    let contract =  require('../contractAccess');
    // console.log(contract);
    
    contract.events.InstructorCreated(
        {}, 
        function(err, event) 
        {
            if(!err){
                console.log(event)
            } else {
                console.log(err);
            }
        }
    );
