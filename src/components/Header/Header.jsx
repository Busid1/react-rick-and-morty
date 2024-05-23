import "./Header.css";

export default function Header() {
    return (
        <header className="d-flex justify-content-center w-100">
            <nav className="navbar navbar-expand-lg w-75">
                <div className="container-fluid w-100">
                    <a className="navbar-brand logo-box" href="/react-rick-and-morty/">
                        <img src="../../build/logo.webp" className="" alt="" />
                    </a>
                    <button class="navbar-toggler text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="material-symbols-outlined">
                            menu
                        </span>
                    </button>

                    <div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header d-flex justify-content-between">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" 
                                className="material-symbols-outlined text-danger fs-2 p-0">
                                close
                            </button>
                        </div>
                        <div className="offcanvas-body pt-0">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3">
                                <li className="nav-item">
                                    <a class="nav-link active text-light fs-4" aria-current="page" href="/react-rick-and-morty/store">Tienda</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light fs-4" href="/react-rick-and-morty/comunity" >Comunidad</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link text-light fs-4" href="/react-rick-and-morty/register" >Registrarse</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link text-light fs-4" href="/react-rick-and-morty/login" >Iniciar sesión</a>
                                </li>

                                {/* <li className="nav-item dropdown">
                                <a className="nav-link text-light fs-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Perfil
                                    <span class="material-symbols-outlined">
                                        arrow_drop_down
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item h6" href="#">Nombre Usuario</a></li>
                                    <li><a className="dropdown-item h6" href="#">Progreso</a></li>
                                    <li><a className="dropdown-item h6" href="#">Cerrar Sesión</a></li>
                                </ul>
                            </li> */}
                                <li className="nav-item d-flex align-items-center" id="carrito">
                                    <a href="/react-rick-and-morty/cart" className="material-symbols-outlined">
                                        shopping_cart
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    );
}
