import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Router";


// TODO
// je vais faire un store pour un truc
// seulement je pense, c'est si il quite le document qu'il crée, les infos restent présente
// quand il reviens
// avec un truc du style popup qui te dis "Données déja présente, voulez-vous les charger ?"

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
