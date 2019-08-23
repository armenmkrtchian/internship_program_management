<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function index()
    {
        return Task::all();
    }
 
    public function show($id)
    {
        return Task::find($id);
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
            'name' => 'required',
            'surname' => 'required',
            'email' => 'required',
            'password' => 'required'
            ]);

        return Task::create($request->all());

    }

    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $task->update($request->all());

        return $task;
    }

    public function delete(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return 204;
    }
}
