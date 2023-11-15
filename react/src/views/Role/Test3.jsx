// import React from "react";

// export default function Test3({ data }) {

//     console.log(data);
//     return (
//         <>
//               {/* <ul>
//                 {data.map((node) => (
//                     <li onC style={{cursor:'pointer'  }} key={node.id}>
//                         {node.title}
//                         {node.sub_child && <Test3 data={node.sub_child} />}
//                     </li>
//                 ))}
//             </ul> */}



//         </>
//     );
// }

// Tree.jsx
import React, { useState } from 'react';

const Test3 = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div style={{ cursor: 'pointer' }} onClick={handleToggle}>
        {isOpen ? '[-] ' : '[+] '}{label}
      </div>
      {isOpen && (
        <ul>
          {children}
        </ul>
      )}
    </div>
  );
};

export default Tree;
