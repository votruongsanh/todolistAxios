function Validation(){
    this.checkempty = function(input){
        if(input === ""){
            alert("vui lòng nhập task");
            return false;
        }else{
            return true;
        }
    };
    this.checkTaskDuplicate = function(input, arr){
        for(var i = 0; i < arr.length; i++){
            if(input === arr[i]. taskName){
                alert("task đã tồn tại");
                return false;
            }else{
                return true;
            }
        }
    }
}