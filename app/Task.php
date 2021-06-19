<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ['title','description', 'due_date', 'due_time'];
    
}
