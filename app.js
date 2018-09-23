
updateList();

$('#view').on('click',view);
$('#add').on('click',add);
$('#verify').on('click',verify);
$('#update').on('click',update);
$('#delete').on('click',deleteIt);

$('#addBtn').on('click',function(){
    let myName=dataGrab('#addName');
    let myNum=dataGrab('#addNum');
    let myPhone=dataGrab("#addPhone");
    // console.log(myName);
    // console.log(myNum);
    // console.log(myPhone);
    employeeList.push({name: myName, officeNum: myNum, phoneNum: myPhone});
    // console.log(employeeList);
    updateList();
})

$("#verifyBtn").on('click',function(){
    // console.log("Verify Clicked");
    let myName=dataGrab('#nameVerify');
    let answer=false;
    for(i=0;i<employeeList.length;i++){
        // console.log(employeeList[i]);
        if(employeeList[i].name===myName){
            answer=true;
        }
    }
    if(answer===true){
        alert(`${myName} is already on the list.`);
    }
    else{
        alert(`${myName} is not currently here.`);
    }
})

$('#upBtn').on('click',function(){
    // console.log("Update Clicked");
    let myName=dataGrab('#updateName'), myNum=dataGrab('#updateNum'), myPhone=dataGrab("#updatePhone");
    // console.log(myName,myNum,myPhone);
    let answer=false, index=-1;
    for(i=0;i<employeeList.length;i++){
        // console.log(employeeList[i]);
        if(employeeList[i].name===myName){
            answer=true;
            index=i;
        }
    }
    // console.log(answer,index);
    if(answer===false){
        alert(`${myName} is not currently in this list.`);
    }
    else{
        employeeList[index]={name:myName,officeNum:myNum,phoneNum:myPhone}
    }
    updateList();
})
