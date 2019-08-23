<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\GroupsMembers;


class GroupsMembersController extends Controller
{
   public function index()
    {
        return GroupsMembers::all();
    }
 
    public function show($id)
    {
        return GroupsMembers::find($id);
    }
    // public function show(Request $request,  $id)
    // {
        
    //     $task = Task::findOrFail($id);
    //     $task->show($request->all());

    //     return Task::find($id);
    // }

    public function store(Request $request)
    {

        $this->validate($request, [
            'groups' => 'required',
            'members' => 'required'
            ]);

        return GroupsMembers::create($request->all());

    }

    public function update(Request $request, $id)
    {
        // dd($request);
        $groupsMembers = GroupsMembers::findOrFail($id);
        $groupsMembers->update($request->all());

        return $groupsMembers;
    }

    public function delete(Request $request, $id)
    {
        $groupsMembers = GroupsMembers::findOrFail($id);
        $groupsMembers->delete();

        return 204;
    }
}