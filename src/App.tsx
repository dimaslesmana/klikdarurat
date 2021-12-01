import { IonApp, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Routes from 'components/routes/Routes';
import SideMenu from 'components/SideMenu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import 'theme/variables.css';
import 'theme/customTheme.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <SideMenu />
        <Routes />
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
