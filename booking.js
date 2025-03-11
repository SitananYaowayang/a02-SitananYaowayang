
function valid(){
    let size = document.getElementById("sizetour");
    let ticket = document.getElementById("ticket");
    let passengers = document.getElementById("passengers");
    let name = document.getElementById("name");
    let tel = document.getElementById("tel");


    if(name.value.trim()===""){
        alert("กรุณากรอกชื่อผู้ติดต่อ");
        return false;
    }
    if(tel.value.trim()===""){
        alert("กรุณากรอกเบอร์โทรติดต่อ");
        return false;
    }
    if(passengers.value===""){
        alert("กรุณากรอกจำนวนผู้ร่วมเดินทาง")
        return false;
    }
    if(passengers.value<1 || passengers.value>15){
        alert("สามารถใส่จำนวนคนในช่วง 1-15 คนเท่านั้น")
        return false;
    }
    if(ticket.checked){
        if (confirm("ต้องการซื้อบัตรโดยสารเครื่องบินเองใช่หรือไม่?")) {
            alert("คุณเลือกซื้อบัตรโดยสารเครื่องบินเอง");
        }else{
            return false;
        }

    }
    return true;
}