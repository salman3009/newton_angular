function add(a,b){
    var c=a+b;
    return c;
}
function square(n)
{
    var m=n*n;
    return m;
}
it("Add test case",()=>{
var actualResult = add(10,20);
var expectedResult = 30;
expect(actualResult).toBe(expectedResult);
});
it("Square test case",()=>{
    var actualResult = square(5);
    var expectedResult = 25;
    expect(actualResult).toBe(expectedResult);
});
