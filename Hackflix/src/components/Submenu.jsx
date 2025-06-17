export default function Submenu({ name, opcion, opcion1, opcion2, opcion3 }) {
  return (
    <div className="col-1 justify-content-center">
      <div className="menu-container">
        <button className="menu-principal btn btn-dark">{name}</button>
        <div className="submenu">
          <ul>
            <li>
              <a href="#">{opcion} </a>
            </li>
            <li>
              <a href="#">{opcion1} </a>
            </li>
            <li>
              <a href="#">{opcion2} </a>
            </li>
            <li>
              <a href="#">{opcion3} </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
