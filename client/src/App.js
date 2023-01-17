import Header from "./components/Header";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Project from './Pages/Project'

import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const cache=new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        clients:{
          merge(existing, incoming){
            return incoming;
          }
        },
        projects:{
          merge(existing, incoming){
            return incoming;
          }
        }
      }
    }
  }
})

const client=new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache
});

function App() {
  return (
    <>
    <ApolloProvider client={client}> 
      <Router>
        <div className="container">
          <Header />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/projects/:id' element={<Project />}></Route>
              <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
