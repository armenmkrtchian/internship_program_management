<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//_________Auth________________
Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('profile', 'UserController@getAuthenticatedUser');
//_________Trainer________________
Route::get('trainers', 'TrainerController@index');
Route::get('trainers/{id}', 'TrainerController@show');
Route::post('trainers', 'TrainerController@store');
Route::put('trainers/{id}', 'TrainerController@update');
Route::delete('trainers/{id}', 'TrainerController@delete');
//_________Lessons and Topics________________
Route::get('lessons-and-topics', 'LessonController@index');
Route::get('lessons-and-topics/{id}', 'LessonController@show');
Route::post('lessons-and-topics', 'LessonController@store');
Route::put('lessons-and-topics/{id}', 'LessonController@update');
Route::delete('lessons-and-topics/{id}', 'LessonController@delete');
//_________Gruops and Members________________
Route::get('groups-and-members', 'GroupsMembersController@index');
Route::get('groups-and-members/{id}', 'GroupsMembersController@show');
Route::post('groups-and-members', 'GroupsMembersController@store');
Route::put('groups-and-members/{id}', 'GroupsMembersController@update');
Route::delete('groups-and-members/{id}', 'GroupsMembersController@delete');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
