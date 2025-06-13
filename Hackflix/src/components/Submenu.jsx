export default function Submenu({ name, opcion, opcion1, opcion2, opcion3 }) {
  return (
    <div className="col-2 justify-content-center">
      <div className="menu-container">
        <button className="menu-principal btn btn-dark">{name}</button>
        <div className="submenu">
          <a href="#">{opcion}</a>
          <a href="#">{opcion1}</a>
          <a href="#">{opcion2}</a>
          <a href="#">{opcion3}</a>
        </div>
      </div>
    </div>
  );
}
