<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
</head>
<body>
    <div class="container mt-3">
        <h1>نام کاربر: {{ $user->name }}</h1>
        <h1>نقش کاربر: {{ $user->role->title }}</h1>
        <form action="{{ route('setRole',$user->id) }}" method="post">
            @csrf
            <select class="select mt-3" name="role" style="display: block">
                @foreach ($roles as $role)
                    <option value="{{ $role->id }}">{{ $role->title }}</option>
                @endforeach
              </select>
              <button type="submit" class="btn btn-success mt-3">افزودن نقش</button>
        </form>
    </div>
</body>
</html>
