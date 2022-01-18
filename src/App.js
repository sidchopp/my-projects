import MyProjects from './components/MyProjects'
import UseStyles from './components/UseStyles';

function App() {
  const classes = UseStyles();
  return (
    <div className={classes.body}>
      <MyProjects />
    </div>
  );
}

export default App;
