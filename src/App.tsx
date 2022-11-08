import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { User } from "./components/User";
import { Users } from "./components/Users";

// Create a client
const queryClient = new QueryClient();
function App() {
  return (
    <div className="container-fluid">
      <div className="mt-4">
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Pages></Pages>
          </QueryClientProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}
const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />}></Route>
      <Route path="/:id" element={<User />}></Route>
    </Routes>
  );
};

export default App;
