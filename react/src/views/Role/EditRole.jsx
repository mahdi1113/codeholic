import { useEffect, useState } from "react";
import axiosClient from "../../axios";
import Tree from "./Tree";
import EditRoleModal from "./EditRoleModal";

export default function EditRole() {
    const [data, setData] = useState([]);
    const [expandedNodes, setExpandedNodes] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState([]);
    useEffect(() => {
        axiosClient
            .get("role")
            .then((res) => {
                // console.log(res);
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);

    const openModal = () => {
        const url = "role/"+selectedNode;
        axiosClient
            .get(url)
            .then((res) => {
                setModalData(res.data);
                setShowModal(true);
            })
            .catch((error) => {
                console.log(error.response);
            });
        
        
    };
    
      const closeModal = () => {
        setShowModal(false);
      };
      
    return(
        <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4 className="mb-0">ویرایش نقش</h4>
                        </div>
                        <div className="card-body">
                            <Tree
                                data={data}
                                expandedNodes={expandedNodes}
                                setExpandedNodes={setExpandedNodes}
                                selectedNode={selectedNode}
                                setSelectedNode={setSelectedNode}
                            />
                            
                            <button
                                type="submit"
                                className="btn btn-success mt-1 d-block mx-auto"
                                onClick={openModal}
                            >
                                ویرایش
                            </button>
                            
                            <EditRoleModal 
                            data={modalData}
                            showModal={showModal} 
                            closeModal={closeModal}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}