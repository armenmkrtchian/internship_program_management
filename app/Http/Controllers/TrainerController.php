<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Trainer;


class TrainerController extends Controller
{
   public function index()
    {
        return Trainer::all();
    }
 
    public function show($id)
    {
        return Trainer::find($id);
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

        return Trainer::create($request->all());

    }

    public function update(Request $request, $id)
    {
        // dd($request);
        $trainer = Trainer::findOrFail($id);
        $trainer->update($request->all());

        return $trainer;
    }

    public function delete(Request $request, $id)
    {
        $trainer = Trainer::findOrFail($id);
        $trainer->delete();

        return 204;
    }
}
