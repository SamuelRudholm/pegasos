import { AppRouter } from "../../router/AppRouter";
import { Navigation } from "../Navigation/Navigation";

export const App = () => {
  return (
    <div>
      {/* Header */}

      {/* <WelcomeProps name="TT" />
      <FirstUseState />
      <EffectHook /> */}
      <Navigation />
      <AppRouter />
    </div>
  );
};
