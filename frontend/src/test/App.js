import { AuthProvider } from "../Authcontent";
import Login from "../Login";
import Signup from "../Signup";
import Authpage from "../Authpage"
function App() {
  return (
    <AuthProvider>
      <div>
        
        {/*<Signup />
        <Login/>*/}
<Authpage/>
        {/* Other routes/components */}
      </div>
    </AuthProvider>
  );
}

export default App;
