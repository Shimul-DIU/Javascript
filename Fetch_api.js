function Fakeapi(){
    let url='https://jsonplaceholder.typicode.com/users/1';

    fetch(url)
    .then((response)=>
   {
    console.log(response.body);
          console.log(response);
        })
    .then(data=>
    {
       console.log(data);
        }

    )
}
Fakeapi();