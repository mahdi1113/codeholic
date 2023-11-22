import { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Inbox from './inbox';
function Mails() {
  const [tab, setTab] = useState("recive");

  const handleTab = (key) => {
    setTab(key)
  }


    return (
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header text-center"></div>
                  <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    onSelect={handleTab}
                  >
                    <Tab eventKey="recive" title="نامه های دریافتی">
                      <Inbox 
                      tab={tab}
                      />
                    </Tab>
                    <Tab eventKey="send" title="نامه های ارسالی">
                      <Inbox 
                      tab={tab}
                      />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          
      );
}

export default Mails;