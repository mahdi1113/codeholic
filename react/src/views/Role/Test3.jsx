// import React, { useState } from "react";
// import { useRef, useEffect } from "react";
// import { useSpring, animated } from "react-spring";
// import "./style.css";

// export default function Test3({ data }) {
//     const [isExpanded, setExpanded] = useState(false);

//     const springProps = useSpring({
//         height: isExpanded ? "auto" : 0,
//         opacity: isExpanded ? 1 : 0,
//         config: { tension: 210, friction: 20 },
//     });

//     const handleToggle = () => {
//         setExpanded(!isExpanded);
//     };

//     return (
//         <>
//             <div className="parent" onClick={handleToggle}>
//                 <p>Parent Element</p>
//                 <animated.div style={springProps} className="child-container">
//                     <div className="child">
//                         child1
//                         <div>child1.1</div>
//                     </div>
//                     <div className="child">Child 2</div>
//                     <div className="child">Child 3</div>
//                 </animated.div>
//             </div>
//         </>
//     );
// }

////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";
// import "./style.css";

// const TreeNode = ({ node }) => {
//   const [isExpanded, setExpanded] = useState(false);

//   const springProps = useSpring({
//     height: isExpanded ? "auto" : 0,
//     opacity: isExpanded ? 1 : 0,
//     config: { tension: 210, friction: 20 },
//   });

//   const handleToggle = () => {
//     setExpanded(!isExpanded);
//   };

//   return (
//     <div className="parent" onClick={handleToggle}>
//       <p>{node.title}</p>
//       {node.sub_child && (
//         <animated.div style={springProps} className="child-container">
//           {node.sub_child.map((childNode) => (
//             <TreeNode key={childNode.id} node={childNode} />
//           ))}
//         </animated.div>
//       )}
//     </div>
//   );
// };

// const Test3 = ({ data }) => {
//   return <TreeNode node={data} />;
// };

// export default Test3;

////////////////////////////////////////////////////////////////////
{
    /* <ul>
                {data.map((node) => (
                    <li onC style={{cursor:'pointer'  }} key={node.id}>
                        {node.title}
                        {node.sub_child && <Test3 data={node.sub_child} />}
                    </li>
                ))}
            </ul> */
}

import React from 'react'

export default function Test3() {
  return (
    <div>Test3</div>
  )
}
