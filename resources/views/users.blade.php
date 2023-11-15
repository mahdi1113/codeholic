<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body>


    {{--  <h1>لیست کارمندان</h1>
    @foreach ($user->child as $u)
        <li>{{ $u->name }}</li>
    @endforeach


    <select name="categories[]" style="width: 100%">
        @foreach ($users as $user1)
            <option value="{{ $user1->id }}">{{ $user1->name }}</option>
        @endforeach
      </select>  --}}
    <div class="container mt-3">
        <div class="row">

            @foreach ($users as $user)
                <div style="position: relative" class="col-sm-6 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ $user->name }}</h5>
                            <p class="card-text">{{ $user->email }}
                            </p>
                            <h3>لسیت کارمندان</h3>
                        @foreach ($user->child as $item)
                            {{ $item->name }}
                        @endforeach
                            <span class="badge badge-warning">نقش کاربر :{{ $user->role->title }}</span>
                            <a href="{{ route('setFormRole', $user->id) }}"
                                style="position: absolute; right: 130px; bottom: 15px" class="btn btn-primary">افزودن
                                نقش</a>
                            <a href="{{ route('showRelationForm', $user->id) }}"
                                style="position: absolute; right: 10px; bottom: 15px" class="btn btn-info">افزودن کارمند
                            </a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

</body>

</html>
