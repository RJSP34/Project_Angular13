<?php
class DbConfig{

    private $_host=''; //host name
    private $_username=''; //username for the database
    private $_password='';  //password for the database
    private $_database=''; //database name

    protected $connection;
    public function __construct(){
        if(!isset($this->connection)){
            $this->connection=new mysqli($this->_host,$this->_username,$this->_password,$this->_database);

            if(!$this->connection){
                echo "Cannot connect to the database Server";
                exit;
            }
        }
        return $this->connection;
    }
}


?>
