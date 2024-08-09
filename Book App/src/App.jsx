import Books from "./components/Books";
import { books } from "./constants/mockData";
import Layout from "./layouts/Layout";
function App() {
  return (
    <>
      <Layout>
       
       <Books />
       
       
      </Layout>
    </>
  );
}

export default App;
