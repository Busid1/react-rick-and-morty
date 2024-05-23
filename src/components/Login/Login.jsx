import "./Login.css";

export default function Login() {

    return (
        <div className="register">
            <form>
                <h2 className="text-center">Iniciar Sesion</h2>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                    <input type="email"
                        class="form-control" id="input" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password"
                        class="form-control" id="input" />
                </div>
                <button type="submit" class="btn">Enviar</button>
                <div className="d-flex gap-2">
                    <p>¿No tienes una cuenta?</p>
                    <a href="/react-rick-and-morty/register">Registrarse</a>
                </div>
            </form>
        </div>
    );
}
