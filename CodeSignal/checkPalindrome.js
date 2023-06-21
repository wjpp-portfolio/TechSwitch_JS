function CheckPallindrome(inputString){

    var first_half;
    var second_half;
    if (inputString.length % 2 != 0)
    {
        var first_half_upper_bound = Math.floor(inputString.length / 2);
        var second_half_lower_bound = Math.ceil(inputString.length / 2);
    
        var first_half = inputString.slice(0,first_half_upper_bound);
        var second_half = inputString.slice(second_half_lower_bound, inputString.length);
    
    } else {
        var first_half = inputString.slice(0,inputString.length / 2);
        var second_half = inputString.slice(inputString.length / 2, inputString.length);
    }
    
    var counter = 0;
    var j = second_half.length - 1;
    for (var i = 0; i <= second_half.length ; i++){   
     
        if (first_half[i] != second_half[j]) {
            counter++;
        }
    
        j--;
    }
    if (counter == 0){
        return true;
    } else {
        return false;
    }
}