export default function PageTitle({first,second}) {
  return (
    <div>
        <h1 className="page-title">
          <span className="highlight-container">
            <span className="highlight">{first}&nbsp;&nbsp;&nbsp;</span>
          </span>
          {second &&  <span className="highlight-container">
            <span className="highlight">{second}&nbsp;</span>
          </span>}
         
        </h1>
      </div>
  )
}
