
updateList();

$('#view').on('click',view);
$('#add').on('click',add);
$('#verify').on('click',verify);
$('#update').on('click',update);
$('#delete').on('click',deleteIt);

$('#addButton').on('click',function(){
    let myName=dataGrab('#nameIn');
    let myNum=dataGrab('#offNumIn');
    let myPhone=dataGrab("#phoneNumIn");
    // console.log(myName);
    // console.log(myNum);
    // console.log(myPhone);
    employeeList.push({name: myName, officeNum: myNum, phoneNum: myPhone});
    // console.log(employeeList);
    $("#content").empty();
    updateList();
})