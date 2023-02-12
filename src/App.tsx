
import { Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout/Layout';
import ProtectedRoute from './route/ProtectedRoute/ProtectedRoute';
// screen
import DashboardScreen from './screen/DashboardScreen/DashboardScreen';
import HomeScreen from './screen/HomeScreen/HomeScreen';
import NoMathScreen from './screen/NoMathScreen/NoMathScreen';
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <ProtectedRoute path="/dashboard" component={DashboardScreen} />
          <Route path="*" component={NoMathScreen} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
