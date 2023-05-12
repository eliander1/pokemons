import React from "react";
import RoutesProject from "./routes";
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>

        <RoutesProject/>    
        
    </QueryClientProvider>
    
  );
}

export default App;
