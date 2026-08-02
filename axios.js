
// console.log(window)

const fakeData=async()=>{
  try {
    //  const res=await axios.post('https://jsonplaceholder.typicode.com/posts',{
    //     body: JSON.stringify({
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   }),
    //     })

    //  console.log(res.data)
    const user={
      email:'nime@gmail.com',
      password:'0987'
    }
    const res=await axios.post('http://localhost:4000/user/login',user);

    console.log(res)

  } catch (error) {
    console.log(error)
  }

}
fakeData()

