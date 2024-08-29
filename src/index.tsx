import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/store'
import { createGlobalStyle} from 'styled-components'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import CardPage from './pages/CardPage';


const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto;
}
html, body {
  height: 100%;
  font-size: 62.5%;
}
#root {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  background: none;
  outline: none;
  border: none;
}
`

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:'/card/:id',
    element: <CardPage/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <>
          <Global/>
          <RouterProvider router={router}/>
        </>
      </Provider>
  </React.StrictMode>
);

