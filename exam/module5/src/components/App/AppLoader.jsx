
import App from "components/App/App.jsx";
import { ProviderWrapper } from "contexts/countersContext";

const AppLoader= () => {
  return (
    <ProviderWrapper >
        <App />
 
      </ProviderWrapper >
  )
}
export default AppLoader
