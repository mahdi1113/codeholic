<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['title','description','parent_id'];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function child()
    {
        return $this->hasMany(Role::class,'parent_id','id');
    }

    public function subChild()
    {
        return $this->child()->with('subChild');
    }

    public function allChildrenIDs()
    {
        $childrenIDs = $this->child()->pluck('id')->toArray();

        foreach ($this->child as $child) {
            $childrenIDs = array_merge($childrenIDs, $child->allChildrenIDs());
        }

        return $childrenIDs;

    }
}
