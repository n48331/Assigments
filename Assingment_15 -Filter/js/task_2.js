// Remove duplicate items from an array [10, 50,20 67, 10, 20]: e.g. remove 10, 20 (use loops)
function removeDup() {
    var arr = [10, 50, 20, 67, 10, 20];
    var result = [];
    for (i = 0; i < arr.length; i++) {
        var flag = 0;
        for (j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                flag = 1;
                break;
            }
        }
        if (!flag) {
            result.push(arr[j])
        }
    }
    document.getElementById('div1_result').innerHTML = result
    return result
    
}

function indexDup(val) {
    var arr = [10, 50, 20, 67, 10, 20];
    var result = [], i;
    console.log(arr.match(10));
    // for(i = 0; i < arr.length; i++)
    //     if (arr[i] === val)
    //         indexes.push(i);
    // return indexes;
}
function diff(){
    var arr1 = [12, 56, 789]
    var arr2 = [12, 56, 789]
    var result=[]
    for (var i = 0; i < arr1.length; i++) {
        result.push(arr1[i]-arr2[i])
    }
    console.log(result);
    document.getElementById('div3_result').innerHTML = '['+ result + ']'

}

function remEle(){
    var arr =[12, 56, 89];
    ele = document.getElementById('div4_input').value
    for( var i = 0; i < arr.length; i++){ 
        if ( arr[i] === Number(ele)) { 
            arr.splice(i, 1);  
        }
    }
    
    document.getElementById('div4_result').innerHTML ='['+ arr + ']'
}
function addInt(){
    arr = []
    arr.push(Math.floor(Math.random() * 10))
    console.log(arr);
    document.getElementById('div5_result').innerHTML = '['+ arr + ']'
}
function bigOdd() {
    var result = 0
    var arr = [10, 12, 900, 93, 707]
    for (i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 !== 0 && result <= Number(arr[i]))
            result = arr[i]
    }

    document.getElementById('div6_result').innerHTML ='Biggest of even number : '+ result
}