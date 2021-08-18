@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <form action="{{ url('api/csv/upload') }}" method="post">
            <div class="custom-file">
                <input type="file" class="custom-file-input" name="file" id="customFile">
                <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
            <button class="btn btn-primary" type="submit">Submit form</button>
        </form>
    </div>
</div>
@endsection