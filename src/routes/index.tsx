import AppRoutes from "./App.routes"; //* Import the routes for the authenticated user
import AuthRoutes from "./Auth.routes"; //* Import the routes for the unauthenticated user
import { useSelector } from "react-redux"; //* Import the useSelector hook for accessing the store state
import { IAuthSate } from "../types/IAuthSate"; //* Import the type for the authentication state
//* Define the main router component
export default function Router() {
  const { logged } = useSelector((state: IAuthSate) => state.authState); 
  //* Get the "logged" value from the store's "authState"
  //* Render the authenticated or unauthenticated routes based on the "logged" value
  return (
    <>
      {logged ? <AuthRoutes /> : <AppRoutes />}
    </>
  );
}
