const myEach = function(collection, callback){
    const newCollection = standardize(collection)
        let i = 0;
        while(i< newCollection.length){
            callback(newCollection[i]);
            i = i+1;
        } return collection;
    };

const myMap = function (collection, callback){
    const newCollection = standardize(collection);
        let i = 0;
        let modArray = []
        while(i< newCollection.length){
            modArray.push(callback(newCollection[i]));
            i = i+1;
        } return modArray
    };

const myReduce = function (collection, callback, acc=0){
    let newCollection = standardize(collection);
    for(let i = 0; i< newCollection.length; i++){
        const val = newCollection[i]
       acc = (callback(acc, val, newCollection[i]))
        
    } return acc
}

const myFind = function (collection, predicate){
    let newCollection = standardize(collection);
    let i = 0
    while(i< newCollection.length){
        if (predicate(newCollection[i]) === true){
            return newCollection[i];
        } i = i+1
    }
};

const myFilter = function (collection, predicate){
    let resultArray = [];
    let newCollection = standardize(collection)
    for(let i = 0; i< newCollection.length; i++){
        if(predicate(newCollection[i]) === true){
            resultArray.push(newCollection[i]);
        }
    } return resultArray;
};

const mySize = function (collection){
    let newCollection = standardize(collection);
    let collectionSize = 0;
    let i = 0
    debugger;
    while (newCollection[i] !== undefined){
        debugger;
        collectionSize = (collectionSize + 1);
        debugger;
        i = i+1;
    } return collectionSize
}

const myFirst = function (array, n){
    let firstOf = []
    let i = 0
    if(n=== undefined){
        return array[0]
    } else {
        while (n>0){
            debugger;
            firstOf.push(array[i]);
            debugger;
            n = n-1;
            debugger;
            i = i +1;
        } return firstOf
    }
}

const myLast = function (array, n){
    let lastOf = []; 
    if(n === undefined){
        let i = array.length - 1;
        return array[i];
    } else {
        while (n>0){
            let i = array.length - n;
            lastOf.push(array[i]);
            n = n - 1;
            i = i + 1;
        } return lastOf
    }
}

const myKeys = function (object){
    let results = [];
    for (const key in object){
        results.push(`${key}`)
    }
    return results
}

const myValues = function (object){
    let results = [];
    for (const property in object){
        results.push(object[`${property}`])
    }
    return results
}


function standardize (collection){
    if(Array.isArray(collection)){
        return collection
    } else {
        return Object.values(collection)
} };