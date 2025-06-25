function DashboardCard({ icon, legend, data }) {
    return (
        <div className="card">
            <div className="card__logo">
                { icon }
            </div>
            <div className="card__information">
                <p>{ legend }</p>
                <p>{ data.length }</p>
            </div>
        </div>
    )
}

export default DashboardCard