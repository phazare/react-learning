import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextAPI from "./context-api/ContextAPI";
import ReducerExample from "./reducer-example/ReducerExample";
import SocialMedia from "./social-media/SocialMedia";
import PostList from "./social-media/components/PostList";
import CreatePost from "./social-media/components/CreatePost";
const router = createBrowserRouter([
  {
    path: "/react-learning/",
    element: <SocialMedia />,
    children: [
      {
        path: "/react-learning/posts",
        element: <PostList />,
      },
      {
        path: "/react-learning/create-post",
        element: <CreatePost />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
  // <SocialMedia></SocialMedia>
  // <ReducerExample></ReducerExample>
  // <ContextAPI></ContextAPI>;
}
export default App;
