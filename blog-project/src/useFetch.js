var blogs = [
  {
    title: "My new website",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere lorem lectus, ac laoreet sem eleifend a. Vivamus sed feugiat purus. Nulla facilisi. Donec euismod leo sed ante fringilla, at dictum justo auctor. Phasellus gravida, ligula ut tincidunt hendrerit, enim elit tristique risus, ac consequat ligula massa eget risus. Proin eget augue et est consectetur aliquet. Nunc blandit condimentum risus, et fringilla felis faucibus a. Fusce id justo facilisis, feugiat odio non, scelerisque quam. Fusce in ante sed lectus fringilla bibendum. Phasellus a enim eget quam sagittis iaculis ipsum...",
    author: "mario",
    id: 1,
  },
  {
    title: "Welcome party!",
    body: "Pellentesque dapibus quam sed felis luctus, et auctor velit consequat. Quisque id diam vitae sapien faucibus congue. Duis malesuada consequat felis, a bibendum purus pulvinar et. Nullam lacinia orci a massa ultricies, sed ultrices lectus tincidunt. Curabitur at dui iaculis, efficitur nisi ut, viverra est. Proin auctor pharetra convallis. Aliquam non metus in neque consequat laoreet. Nullam suscipit quam a risus fermentum luctus ipsum...",
    author: "yoshi",
    id: 2,
  },
  {
    title: "Web dev top tips",
    body: "Vestibulum facilisis justo quis velit scelerisque, eget consequat purus gravida. Integer mattis convallis nunc, a lobortis ex consectetur at. Sed ut ultricies lectus. Donec sed congue magna. Duis non urna fringilla, efficitur risus id, cursus lectus. Nulla dapibus tincidunt est, at tristique elit lacinia id. In varius varius elit, ut euismod lectus placerat at. Nam faucibus tincidunt dolor. Vestibulum nec tellus auctor, lobortis orci a, faucibus arcu ipsum...",
    author: "mario",
    id: 3,
  },
];

const useFetch = () => {
  console.log("using function useFETCH {blogs}", blogs);
  return blogs;
};
const postData = (newBlog) => {
  blogs = [...blogs, newBlog];
  console.log("🚀 POSTED~ file: useFetch.js:28 ~ postData ~ blogs:", blogs);
};
const deleteData = (id) => {
  blogs = blogs.filter((element) => element.id !== id);
  console.log("🚀 DELETED ~ file: useFetch.js:32 ~ deleteData ~ blogs:", blogs);
};

export default useFetch;
export { useFetch, postData, deleteData };
