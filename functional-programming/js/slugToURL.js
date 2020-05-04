var globalTitle = "Winter Is           Coming";

// Only change code below this line
function urlSlug(title) {
    
    let url=title.split(/\s/)
        .map(word => word.toLowerCase())
        .filter(word=>word.length>0)
        .join('-') ;
    return url;        
                  
}
// Only change code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);