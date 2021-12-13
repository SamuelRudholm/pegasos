import '../../style.css';
import { Header } from '../Header';
import { MyComponent, Button } from '../Const';
import { AppRouter } from '../../router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { EffectHook, FirstUseState } from '../Usestate';
import { WelcomeProps } from '../Props';

export const App = () => {

  return(
    <div>
      <WelcomeProps name="Samuel"/>
      <FirstUseState />
      <EffectHook />
      <BrowserRouter>
        <Navigation />
        <AppRouter />
      </BrowserRouter>
    </div>

  )

}