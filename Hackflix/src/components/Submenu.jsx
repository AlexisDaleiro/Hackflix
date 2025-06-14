export default function Submenu({ name, opcion, opcion1, opcion2, opcion3 }) {
  return (
    <div className="col-1 justify-content-center">
      <div className="menu-container">
        <button className="menu-principal btn btn-dark">{name}</button>
        <div className="submenu">
          <ul>
            <li>
              <a href="#">{opcion} </a>
              <ul>
                <li>
                  <a href="#">Submenú 1</a>
                </li>
                <li>
                  <a href="#">Submenú 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">{opcion1} </a>
              <ul>
                <li>
                  <a href="#">Submenú 1</a>
                </li>
                <li>
                  <a href="#">Submenú 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">{opcion2} </a>
              <ul>
                <li>
                  <a href="#">Submenú 1</a>
                </li>
                <li>
                  <a href="#">Submenú 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">{opcion3} </a>
              <ul>
                <li>
                  <a href="#">Submenú 1</a>
                </li>
                <li>
                  <a href="#">Submenú 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
