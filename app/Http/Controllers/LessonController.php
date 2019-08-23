<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lesson;


class LessonController extends Controller
{
   public function index()
    {
        return Lesson::all();
    }
 
    public function show($id)
    {
        return Lesson::find($id);
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
            'lessons' => 'required',
            'topics' => 'required',
            'links' => 'required',
            
            ]);

        return Lesson::create($request->all());

    }

    public function update(Request $request, $id)
    {
        // dd($request);
        $lesson = Lesson::findOrFail($id);
        $lesson->update($request->all());

        return $lesson;
    }

    public function delete(Request $request, $id)
    {
        $lesson = Lesson::findOrFail($id);
        $lesson->delete();

        return 204;
    }
}