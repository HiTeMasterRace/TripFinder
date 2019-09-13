<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class ConnectionController extends Controller
{
    public function login(){
        $credentials = request(['email', 'password']);

        if (Auth::attempt($credentials)) {
            $tokenResult = Auth::user()->createToken('Personal Access Token');
            return $this->respond(['access_token' => $tokenResult->accessToken]);
        } else {
            return response('User not found', 400);
        }
    }

    public function me()
    {
        return Auth::user();
    }

    public function logout()
    {
        Auth::user()->token()->revoke();
        return $this->respond(['status' => 'logged out']);
    }

    private function respond($data, $headers = [])
    {
        return Response::json($data, 200, $headers);
    }
}
