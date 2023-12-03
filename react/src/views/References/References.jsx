import { useState, useEffect } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css'
import Inbox from "./Inbox";
import axiosClient from "../../axios";
import { useSelector } from "react-redux";
function Referencess() {
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
          url = '/mail/reciveReferencess/'+user.id;
        else
          url = '/mail/reciveReferencessNotViewed/'+user.id;
        parameters = {
        url: url,
        data: {
          page: page,
        }
        }
    } else {
        parameters = {
        url: '/mail/sendReferences/'+user.id,
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

                    <Tab eventKey="recive" title=" ارجاعات دریافتی">
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

                    <Tab eventKey="send" title=" ارجاعات ارسالی">
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

export default Referencess;
