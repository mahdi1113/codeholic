<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" </head>

<body>
    <div class="container mt-3">
        <h1>نام کاربر: {{ $user->name }}</h1>
        <h1>نقش کاربر: {{ $user->role->title }}</h1>
        <ul>
            @foreach ($users as $item)
                <li>نام کاربر: {{ $item->name }}</li>
                <li>نقش کاربر: {{ $item->role->title }}</li>

                <form action="{{ route('makeRelation', $user->id) }}" method="post">
                    @csrf
                <input name="child_id" type="text" value="{{ $item->id }}">
                <button type="submit" class="btn btn-success mt-3">افزودن نقش</button>
            </form>
                <hr>
            @endforeach
        </ul>
    </div>
</body>

</html>
