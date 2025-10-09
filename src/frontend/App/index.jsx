import { BrowserRouter } from "react-router-dom";

// components
import AppRoutes from "./Routes";
import Layout from "./Layout";

// component
const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <AppRoutes />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
