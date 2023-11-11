export default function PageComponent({title , children}) {
    return(
    <>
        <div className="shadow-lg p-3 mb-5 bg-info text-dark">
            <div className="container mt-3">{title}</div>
        </div>
        <div className="container mt-3">{children}</div>
    </>
    )
}
