import { useState, useEffect } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css'
import Inbox from './inbox';
import axiosClient from "../../axios";
function Mails() {
  const [tab, setTab] = useState("recive");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async  () => {
    let parameters = {};
    console.log('tab :: ',tab);
    if (tab == 'recive') {
      

        parameters = {
        url: '/mail/receivedMails',
        data: {
            receiv_id: 1,
            page: page,
        },
        };
    } else {
        // Set parameters for sent letters
        parameters = {
        url: '/mail/sentLetters',
        data: {
            user_id: 1,
            page: page,
        },
        };
    }
    axiosClient.post(parameters.url, parameters.data).then(res => {
        console.log("tab ::",tab);
        console.log("data ::",res.data.mail.data);
        console.log("url ::",parameters.url);
        setData(res.data.mail.data);
        setMaxPage(res.data.mail.last_page)
        setLoading(false)
    })
    .catch((error) => {
        console.log(error.response);
        });  
}
useEffect(() => {
  fetchData();
  }, [tab, page]);
  
  const handleTab = (key) => {
    setLoading(true);
    setTab(key)
    
  }
  const inboxProps = {
    tab,
    data,
    page,
    setPage,
    maxPage,
    setMaxPage,
    fetchData,
  };

    return (
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header text-center"></div>
                  <Tabs
                    defaultActiveKey="recive"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    onSelect={handleTab}
                  >
                    
                    <Tab eventKey="recive" title="نامه های دریافتی">
                      {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <Spinner animation="border" />
                        </div>
                      ) : (
                        <Inbox {...inboxProps}/>
                      )}
                    </Tab>
                    
                    <Tab eventKey="send" title="نامه های ارسالی">
                      {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <Spinner animation="border" />
                        </div>
                      ) : (
                        <Inbox {...inboxProps}/>
                      )}
                    </Tab>
                    
                  </Tabs>
                </div>
              </div>
            </div>
          
      );
}

export default Mails;