// Name: Tayyab Fayyaz 
// Date: 20-feb-2024

// EXERSICE NO. 33

let numbers: number[] = [1,2,3,4,5,6,7,8,9];

for (let no of numbers){
    let ordinalEnding: string;

    if(no == 1){
        ordinalEnding = 'st';
    }else 
        if(no == 2){
            ordinalEnding = 'nd';
        }else
            if(no == 3){
                ordinalEnding = 'rd';
            }else{
                ordinalEnding = 'th';
            }

    console.log(`${no}${ordinalEnding}`);
}