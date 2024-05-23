import "./Register.css";

export default function Register() {
    return (
        <div className="register">
            <form>
                <h2 className="text-center">Registrarse</h2>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre de usuario</label>
                    <input type="text"
                        class="form-control" id="input" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                    <input type="email"
                        class="form-control" id="input" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password"
                        class="form-control" id="input" />
                </div>
                <button type="submit" id="submitBtn">Enviar</button>
                <div className="d-flex gap-2">
                    <p>¿Ya tienes una cuenta?</p>
                    <a href="/react-rick-and-morty/login">Iniciar sesión</a>
                </div>
            </form>
        </div>
    );
}
