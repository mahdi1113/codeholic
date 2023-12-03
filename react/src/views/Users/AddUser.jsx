import { useState, useEffect,} from "react";
import axiosClient from "../../axios";
import { useDispatch, useSelector } from "react-redux";
// import { getById,add } from "../redux/loginAction";
import { addToken } from "../../redux/loginAction";
import Tree from "../Role/Tree";
import Swal from 'sweetalert2';
import moment from 'moment';
import jalaliMoment from 'jalali-moment';
import {CDatePicker } from "@coreui/react-pro"
export default function AddUser() {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      password_confirmation: '',
      first_name: '',
      last_name: '',
      father_name: '',
      national_code: '',
      gender: 'male',
      birth_date: moment(new Date()).format('YYYY/MM/DD'),
      certificate_number: '',
      certificate_serial: '',
      certificate_date: moment(new Date()).format('YYYY/MM/DD'),
      certificate_place: '',
      education_level: '',
      phone: '',
      email: '',
      telephone: '',
      telephone_extension: '',
      postal_codes: '',
      address: '',
    });
    const [expandedNodes, setExpandedNodes] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    const [certificateDate, setCertificateDate] = useState(null);
    const [data, setData] = useState([]);
    
    const token = useSelector((state) => state);
    const dispatch = useDispatch();
    // console.log(token);
    const fetchData = () => {
        axiosClient
            .get("role")
            .then((res) => {
            setData(res.data);
            })
            .catch((error) => {
                Swal.fire(error.response.data.message);
            });
    };
    useEffect(() => {
        fetchData();
      }, []); // Include selectedNode as a dependency
    const handleSubmit = function (e) {
      e.preventDefault();
      const formDataToSend = new FormData();
      console.log(moment(birthDate).format('YYYY/MM/DD'));
      formDataToSend.append('birth_date',moment(birthDate).format('YYYY/MM/DD'));
      formDataToSend.append('certificate_date',moment(certificateDate).format('YYYY/MM/DD'));
      formDataToSend.append('role_id',selectedNode);
      Object.entries(formData).forEach(([fieldID, fieldValue]) => {
        formDataToSend.append(fieldID, fieldValue);
        // console.log([fieldID, fieldValue]);
      });
      console.log(!isNaN(selectedNode));
      console.log('role_id',selectedNode);
      axiosClient
            .post("addUser",formDataToSend)
            .then((res) => {
                Swal.fire(res.data.msg);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: res.data.msg,
                });
                console.log(res);
            })
            .catch((error) => {
                console.log(error.response);
                if(error.response.status == 422)
                    Swal.fire({
                        icon: 'warning',
                        title: 'Warning',
                        text: error.response.data.message || 'There was an error processing your request.',
                    });
            });
    };
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    };
    const icon = {
        fontSize:
        "10em" /* تغییر اندازه آیکون به دلخواه با استفاده از font-size */,
    };
    return (
      <>
        <div
            className="container-xl p-5 ml-1 rounded"
        >
                
        <form onSubmit={handleSubmit} className="border p-4">
        <div className="row text-center bg-light">
            <h3>فرم ثبت نام کاربر</h3>
        </div>
        <br/>
        <div className="row">
            <div className="form-group col-md-2 mt-3">
              <label className="text-nowrap" htmlFor="username">نام کاربری :</label>
              <input value={formData["username"]} onChange={handleChange} type="text" className="form-control " id="username"/>
            </div>
            <div className="form-group col-md-2 mt-3">
              <label className="text-nowrap" htmlFor="password">رمز عبور :</label>
              <input value={formData["password"]} onChange={handleChange} type="password" className="form-control" id="password"/>
            </div>
            <div className="form-group col-md-2 mt-3">
              <label className="text-nowrap" htmlFor="password_confirmation">تکرار رمز عبور :</label>
              
              <input value={formData["password_confirmation"]} onChange={handleChange} type="password" className="form-control " id="password_confirmation"/>
            </div>
        </div>
          <div className="row">
            <div className="form-group col-md-2 mt-3">
            <label className="text-nowrap" htmlFor="name">نام :</label>
              <input value={formData["first_name"]} onChange={handleChange} type="text" className="form-control " id="first_name"/>
            </div>
            <div className="form-group col-md-2 mt-3">
            <label className="text-nowrap" htmlFor="last_name">نام خانوادگی :</label>
              <input value={formData["last_name"]} onChange={handleChange} type="text" className="form-control" id="last_name"/>
            </div>
            <div className="form-group col-md-2 mt-3">
              <label className="text-nowrap" htmlFor="father_name">نام پدر :</label>
              <input value={formData["father_name"]} onChange={handleChange} type="text" className="form-control " id="father_name"/>
            </div>
            <div className="form-group col-md-2 mt-3">
              <label className="text-nowrap" htmlFor="national_code"> کد ملی :</label>
              <input value={formData["national_code"]} onChange={handleChange} type="text" className="form-control " id="national_code"/>
            </div>
            <div className="form-group col-md-1 mt-3">
            <label className="text-nowrap" htmlFor="gender">جنسیت :</label>
            <select onChange={handleChange} className="form-select form-select-sm" id="gender">
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
          </div>
          <div className="form-group col-md-2 mt-3">
              <label className="text-nowrap" htmlFor="birth_day">تاریخ تولد :</label>
            
              <CDatePicker 
              firstDayOfWeek={6}
              date={new Date()}
              placeholder="" 
              onStartDateChange={setBirthDate}
              locale="fa-IR" 
              size="sm"
              />
          
          </div>
          
            </div>
          <div className="row">
          <div className="form-group col-md-2 mt-3">
              <label className="text-nowrap" htmlFor="certificate_number">شماره شناسنامه :</label>
              <input value={formData["certificate_number"]} onChange={handleChange} type="text" className="form-control " id="certificate_number"/>
            </div>
            <div className="form-group col-md-2 mt-3">
              <label className="text-nowrap" htmlFor="certificate_serial">سریال شناسنامه :</label>
              <input value={formData["certificate_serial"]} onChange={handleChange} type="text" className="form-control " id="certificate_serial"/>
            </div>
            
            <div className="form-group col-md-2 mt-3">
              <label className="text-nowrap" htmlFor="certificate_day " >تاریخ صدور شناسنامه :</label>
              <CDatePicker 
              firstDayOfWeek={6}
              date={new Date()}
              placeholder="" 
              onStartDateChange={setBirthDate}
              locale="fa-IR" 
              size="sm"
              />
            </div>

            <div className="form-group col-md-2 mt-3">
            <label className="text-nowrap" htmlFor="certificate_place">محل صدور شناسنامه</label>
              <input value={formData["certificate_place"]} onChange={handleChange} type="text" className="form-control " id="certificate_place"/>
            </div>
            <div className="form-group col-md-3 mt-3">
            <label className="text-nowrap" htmlFor="education_level">مدرک تحصیلی :</label>
              <input value={formData["education_level"]} onChange={handleChange} type="text" className="form-control " id="education_level"/>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-2 mt-3">
              <label className="text-nowrap" htmlFor="mobile">تلفن همراه :</label>
              <input value={formData["phone"]} onChange={handleChange} type="text" className="form-control" id="phone" />
            </div>
            <div className="form-group col-md-2 mt-3">
              <label className="text-nowrap" htmlFor="email">ایمیل :</label>
                <input value={formData["email"]} onChange={handleChange} type="email" className="form-control " id="email"/>
            </div>
            <div className="form-group col-md-2 mt-3 ml-0">
              <label className="text-nowrap" htmlFor="telephone">تلفن :</label>
                <input value={formData["telephone"]} onChange={handleChange} type="text" className="form-control " id="telephone"/>
            </div>
            <div className="form-group col-md-1 mt-5 text-center">
                -
            </div>
            <div className="form-group col-md-1 mt-3">
              <label className="text-nowrap" htmlFor="telephone"></label>
                <input value={formData["telephone_extension"]} onChange={handleChange} type="text" className="form-control " id="telephone_extension"/>
            </div>
            <div className="form-group col-md-2 mt-3">
                <label className="text-nowrap" htmlFor="postal_codes">کدپستی :</label>
                  <input value={formData["postal_codes"]} onChange={handleChange} type="text" className="form-control " id="postal_codes"/>
              </div>
            </div>
            <div className="row">
            <div className="form-group col-md-12 mt-3">
              <label className="text-nowrap" htmlFor="address">آدرس :</label>
              <textarea value={formData["address"]} onChange={handleChange} rows="3" className="form-control row-3" id="address" />
            </div>
          
          </div>
          <div className="row mt-4 mr-3">
            <Tree
              data={data}
              expandedNodes={expandedNodes}
              setExpandedNodes={setExpandedNodes}
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
            />
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="btn btn-success col-md-1 mt-3 center">ثبت</button>
          </div>
          
        </form>
      </div>
            
      </>
    );
}
