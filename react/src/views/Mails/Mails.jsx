import { useState, useEffect } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css'
import Inbox from "./Inbox";
import axiosClient from "../../axios";
import { useSelector } from "react-redux";
function Mails() {
  const [tab, setTab] = useState("recive");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [allOrNotseen, setAllOrNotseen] = useState(1);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const fetchData = async  () => {
    let parameters = {};
    let url='';
    if (tab == 'recive') {
        if(allOrNotseen)
          url = '/mail/reciveMails/'+user.id;
        else
          url = '/mail/reciveMailsNotViewed/'+user.id;
        parameters = {
        url: url,
        data: {
          page: page,
        }
        }
    } else {
        // Set parameters for sent letters
        
        parameters = {
        url: '/mail/sendMail/'+user.id,
        data: {
            page: page,
        },
        };
    }
    console.log(parameters.url);
    axiosClient.post(parameters.url, parameters.data).then(res => {
        console.log(res.data.mail);
        setData(res.data.mail);
        setMaxPage(res.data.mail.last_page)
        setLoading(false)
    })
    .catch((error) => {
        console.log(error.response);

        setLoading(false)
        });
}
useEffect(() => {
  fetchData();
  }, [tab,allOrNotseen,page,user]);
  
  const handleTab = (key) => {
    if(key != tab){
      setLoading(true);
      setPage(1);
      setTab(key);

    }



  }
  const inboxProps = {
    tab,
    data,
    page,
    setPage,
    maxPage,
    setMaxPage,
    fetchData,
    allOrNotseen,
    setAllOrNotseen,
    loading,
    setLoading
  };

    return (
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <div className="card">
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
                          <Spinner animation="grow" variant="danger" />
                          <Spinner animation="grow" variant="warning" />
                          <Spinner animation="grow" variant="info" />
                        </div>

                      ) : (
                        <Inbox {...inboxProps}/>
                      )}
                    </Tab>

                    <Tab eventKey="send" title="نامه های ارسالی">
                      {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <Spinner animation="grow" variant="danger" />
                          <Spinner animation="grow" variant="warning" />
                          <Spinner animation="grow" variant="info" />
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
