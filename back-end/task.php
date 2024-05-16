<?php

class Task {
    public $id;
    public $title;
    public $description;
    public $user_id;

    public function __construct($id, $title, $description, $user_id) {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->user_id = $user_id;
    }
}

?>