function solution(year) {
/*
    if year ends 00, century == all previous digits
    if year does not end in 00, century == all previous digits + 1
    
*/
    var b = year.toString();
    
    if (year % 100 == 0) {
        
        switch (b.length) {
            case 1:
            return 1;
            case 2: 
            return 1;
            case 3:
            return Number(b.slice(0,1));
            case 4:
            return Number(b.slice(0,2));
        }
    } else {
        
            switch (b.length) {
            case 1:
            return 1;
            case 2: 
            return 1;
            case 3:
            return Number(b.slice(0,1)) + 1;
            case 4:
            return Number(b.slice(0,2)) + 1;
        }
    }
}
    