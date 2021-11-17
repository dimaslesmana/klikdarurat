import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonRouterLink,
  IonRow,
  IonText,
} from '@ionic/react';
import { klikDarurat } from 'assets';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

import Layout from 'components/layout';

const Login: React.FC = () => {
  const handleLoginClick = () => {
    console.log('Login button clicked!');
  };

  return (
    <Layout>
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(135deg, rgba(224,108,120,1) 35%, rgba(250,146,132,1) 100%)',
          textAlign: 'center',
        }}
      >
        <IonGrid
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <IonRow>
            <IonCol>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span style={{ paddingTop: '4px' }}>
                  <img src={klikDarurat} alt="logo" width="40" />
                </span>
                &ensp;
                <h1
                  style={{
                    margin: 'auto 0',
                    fontWeight: 'bold',
                    color: '#ffffff',
                  }}
                >
                  KlikDarurat
                </h1>
              </div>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonCard style={{ margin: '8px 0', borderRadius: '18px' }}>
                <IonCardHeader>
                  <h1 style={{ fontWeight: 'bold' }}>
                    <IonText color="dark">Masuk</IonText>
                  </h1>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonList style={{ background: 'none' }}>
                        <IonItem style={{ '--background': 'inherit' }}>
                          <IonIcon
                            icon={mailOutline}
                            color="primary"
                            slot="start"
                          />
                          <IonInput type="email" placeholder="Email" />
                        </IonItem>
                        <IonItem style={{ '--background': 'inherit' }}>
                          <IonIcon
                            icon={lockClosedOutline}
                            color="primary"
                            slot="start"
                          />
                          <IonInput type="password" placeholder="Kata Sandi" />
                        </IonItem>
                      </IonList>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol>
                      <IonButton
                        color="primary"
                        expand="block"
                        shape="round"
                        onClick={handleLoginClick}
                      >
                        Masuk
                      </IonButton>
                    </IonCol>
                  </IonRow>

                  <IonRow className="ion-margin-vertical">
                    <IonCol>
                      <IonRouterLink
                        color="dark"
                        routerLink="/"
                        style={{
                          textDecoration: 'underline',
                        }}
                      >
                        Lupa Kata Sandi?
                      </IonRouterLink>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText style={{ color: '#ffffff' }}>
                Belum memiliki akun?{' '}
                <IonRouterLink
                  color="secondary"
                  routerLink="/register"
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                >
                  Daftar
                </IonRouterLink>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </Layout>
  );
};

export default Login;
