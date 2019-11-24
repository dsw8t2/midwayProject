function convertTimeToWords(hours, minutes) {
var finalString = "error";//default value is error in case one of the numbers is too large, this checks for errors 
    
//make sure to test for the fact 12 + 1 = 1
    //utilizes all string literals 
    switch (minutes) {
        case 0://tests for the on the hour case
            finalString = `${numToWord(hours)} o' clock`;
            break;
        case 15://quarter past case
                finalString = `quarter past ${numToWord(hours)}`;
            break;
        case 30://half past case
                finalString = `half past ${numToWord(hours)}`;
            break;
        case 45://quarter to case
                if(hours==12){
                    hours = 1;
                }else{
                    hours++;
                }
                finalString = `quarter to ${numToWord(hours)}`;
            break;
            
            //these two cases account for the singular use of the word
        case 1:
            finalString = `${numToWord(minutes)} minute past ${numToWord(hours)}`;
            break;
        case 59:
            if(hours == 12){
                hours =1;
            }else{
                hours++;
            }
            finalString = `${numToWord(60-minutes)}  minute to ${numToWord(hours)}`;
            break;
            
            
        default://the standard method
            if(minutes < 30){
                finalString = `${numToWord(minutes)} minutes past ${numToWord(hours)}`;
            }else if(minutes < 60){
                if(hours == 12){
                    hours = 1;
                }else{
                    hours++;
                }
                finalString = `${numToWord(60-minutes)} minutes to ${numToWord(hours)}`;
            }
    }
    return finalString;
}

function numToWord(number) {
    var names = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"];
    return names[number];
}