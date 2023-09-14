import { useRoutes, BrowserRouter } from "react-router-dom";
import PostSections from "../userPages/Posts/PostSections"
import SavedSections from "../userPages/Saved/SavedSections"
import TagsSections from "../userPages/Tags/TagsSections"
import WithoutContent from "../userPages/withoutContent/WithoutContent"

const userRoutes = () => {
    const routes = useRoutes([
        {
          path: "/",
          element: <PostSections />,
        },
        {
            path: "*",
            element: <WithoutContent />,
          },
    ]);
    return routes
}

const RoutesWrapper = ({children}) => {
    return (<BrowserRouter> {children} <userRoutes/> </BrowserRouter>)
}

export default RoutesWrapper; 