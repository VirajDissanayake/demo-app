import './App.css';
import {SignOut, withAuthenticator} from 'aws-amplify-react';

function App() {
  return (
    <div>
      <header>
        <SignOut/><br/>

         <iframe src="https://search-eventlogsdemo-ihgnli4jp5xqcnl7mprjmfv7bq.us-east-1.es.amazonaws.com/_plugin/kibana/app/dashboards#/view/38364620-36df-11eb-9ec8-d31e29d50504?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now%2Fd,to:now%2Fd))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:''),timeRestore:!f,title:logdashboard,viewMode:view)" height="900" width="100%"></iframe>

      </header>
    </div>
  );
}

export default withAuthenticator(App);
