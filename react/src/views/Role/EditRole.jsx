import { useEffect, useState } from "react";
import axiosClient from "../../axios";
import Tree from "./Tree";
import EditRoleModal from "./EditRoleModal";

export default function EditRole() {
    const [data, setData] = useState([]);
    const [expandedNodes, setExpandedNodes] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null);
    const [parentselectedNode, setParentSelectedNode] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [roleData, setRoleData] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        // title: roleData.title,
        // description: roleData.description ?? "",
    });
    const fetchData = () => {
        axiosClient
            .get("role")
            .then((res) => {
            setData(res.data);
            })
            .catch((error) => {
            console.log(error.response);
            });
    };
      useEffect(() => {
        fetchData();
      }, []); // Include selectedNode as a dependency

    const openModal = () => {
        const url = "role/"+selectedNode;
        axiosClient
            .get(url)
            .then((res) => {
                setRoleData(res.data);
                setShowModal(true);
            })
            .catch((error) => {
                console.log(error.response);
            });  
    };

    const handleDelete = () => {
        const url = "role/"+selectedNode;
        axiosClient
            .delete(url)
            .then((res) => {
                alert(res.data.msg);
                if(res.status == 200){
                    setSelectedNode(null);
                    fetchData();
                    closeModal();
                }     
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
    const closeModal = () => {
        setShowModal(false);
    };
      
    function handleUpdate(e){
        e.preventDefault();
        if(parentselectedNode == selectedNode){
            alert("نقش نمی تواند زیرمجموعه خودش باشد")
        }
        else{
            const params  = new URLSearchParams();
            params .append('title', formData.title);
            params .append('description', formData.description);
            params .append('parent_id', parentselectedNode);
            const url = "role/"+selectedNode;
            axiosClient
                .put(url, params )
                .then((res) => {
                    alert(res.data.msg);
                    if(res.status == 200){
                        setParentSelectedNode(null);
                        fetchData();
                        closeModal();
                    }     
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }
    }
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
                            {showModal &&(
                                <EditRoleModal 
                                    data={data}
                                    roleData={roleData}
                                    expandedNodes={expandedNodes}
                                    setExpandedNodes={setExpandedNodes}
                                    selectedNode={parentselectedNode}
                                    setSelectedNode={setParentSelectedNode}
                                    showModal={showModal} 
                                    closeModal={closeModal}
                                    handleDelete={handleDelete}
                                    handleUpdate={handleUpdate}
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}