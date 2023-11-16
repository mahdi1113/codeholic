// import React from "react";

// export default function Test2({ data }) {
//     console.log(data);
//     return (
//         <>
//             <ul>
//                 {data.map((node) => (
//                     <li key={node.id}>
//                         {node.title}
//                         {node.all_children && <Test2 data={node.all_children} />}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// import React from 'react';

// const RoleTree = ({ data }) => {
//   return (
//     <ul>
//       {data.map((node) => (
//         <li key={node.id}>
//           {node.name}
//           {node.children && <RoleTree data={node.children} />}
//         </li>
//       ))}
//     </ul>
//   );
// };

import React from "react";

export default function Test2(data) {
    return (
        <>
            <ul>
                {data.map((item) => (
                    <li className={item.text + item.id}>
                        <div>{item.title}</div>
                        {item.sub_child && item.sub_child.length
                            ? Test2(item.sub_child)
                            : ""}
                    </li>
                ))}
            </ul>
        </>
    );
}
