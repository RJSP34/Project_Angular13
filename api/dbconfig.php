<?php
class DbConfig{

    private $_host='682ku4wu7pai.us-east-4.psdb.cloud'; //host name
    private $_username='vp3ejnbcqvrs'; //username for the database
    private $_password='pscale_pw_rzTvRunfg-QQKqnnSDWVrPiHw5CV__lV0ClRjECIb_o';  //password for the database
    private $_database='database'; //database name

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
