
    const blogs=[
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }];
 
const useFetch = () => {
    console.log("using function useFETCH {blogs}", blogs);
    return ( blogs );
}
 
export default useFetch;