import Card from '../Card/card';
import { Details } from '../../Utils/const1';
import Profile from '../Profile';
import './styles.scss';

const Home = () => {
    return (
      <div>
          <Profile />
          <div className = "Home" >
            {
              Details.map(element => <Card  data = {element}/>)
            }
          </div>
      </div>
    );
  }
  
export default Home;
  