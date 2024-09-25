import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routes } from "./routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {routes.map((route) => {
                return (
                  <Route
                    key={route.link}
                    path={route.link}
                    element={route.element}
                  />
                );
              })}
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
