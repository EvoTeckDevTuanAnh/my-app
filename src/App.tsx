
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './route/ProtectedRoute/ProtectedRoute';
// screen
import DashboardScreen from './screen/DashboardScreen/DashboardScreen';
import HomeScreen from './screen/HomeScreen/HomeScreen';
import NoMathScreen from './screen/NoMathScreen/NoMathScreen';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/home" component={HomeScreen} />
        <ProtectedRoute path="/dashboard" component={DashboardScreen} />
        <Route path="*" component={NoMathScreen} />
      </Switch>
    </div>
  );
}
const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });
export default App;
