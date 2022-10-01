
function BodyPart({ name, bodyPartSearch }) {
  name = name[0].toUpperCase() + name.substring(1);

  return (
    <div className="col-2">
      <div onClick={() => bodyPartSearch(name)} className="cs-item btn">
        <span className="flaticon-002-dumbell"></span>
        <h4>{name}</h4>
      </div>
    </div>
  )
}

export default BodyPart;