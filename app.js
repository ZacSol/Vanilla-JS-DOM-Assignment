

for(i=0;i<employeeList.length;i++){
    // console.log(employeeList[i]);

$('#content').append(makeBox(employeeList[i]));

}

$('#view').on('click',view);
$('#add').on('click',add);
$('#verify').on('click',verify);
$('#update').on('click',update);
$('#delete').on('click',deleteIt);