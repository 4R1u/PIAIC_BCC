var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var unique = arr1.filter(function(elem, index, self) {
return index === self.indexOf(elem);
});
console.log(unique);