import Counter from "./app/features/counter/Counter";
import AddPostForm from "./app/features/posts/AddPostForm";
import Posts from "./app/features/posts/Posts";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <Posts />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
