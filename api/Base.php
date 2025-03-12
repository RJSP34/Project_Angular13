<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include 'dbconfig.php';
class Base extends DbConfig{

    public function getData($query){
        $result=$this->connection->query($query);
        if(!$result){
            echo $this->connection->error;
            return false;
        }

        $rows=array();
        while($row=$result->fetch_assoc()){
            $rows[]=$row;
        }
        return $rows;
    }

    public function execute($query){
        $result=$this->connection->query($query);
        if(!$result){
            echo $this->connection->error;
            return false;
        }else{
            return true;
        }
    }

    public function escape_string($value){
        return $this->connection->real_escape_string($value);
    }
}
function hello(){
  $g=new Base();
  $g->getData('Select * from Users;');


}
?>
