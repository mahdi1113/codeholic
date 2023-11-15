import React from "react";

export default function Test2({ data }) {
    console.log(data);
    return (
        <>
            <ul>
                {data.map((node) => (
                    <li key={node.id}>
                        {node.title}
                        {node.all_children && <Test2 data={node.all_children} />}
                    </li>
                ))}
            </ul>
        </>
    );
}

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
