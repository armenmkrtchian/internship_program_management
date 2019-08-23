<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GroupsMembers extends Model
{
    protected $fillable = [
        'groups', 'members'
];
}
