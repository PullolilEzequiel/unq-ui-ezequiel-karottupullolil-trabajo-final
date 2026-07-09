import "./about.css";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

    const volverAlInicio = () => {
        navigate("/");
    };

    return (
        <div id="container" className="about-container">
            <header className="about-header">
                <h1>Página no encontrada</h1>
                <p className="subtitle">
                    La ruta ingresada no existe, pero ya que estas aca....
                </p>
            </header>

            <main className="about-content">
                <section className="about-section rules-section">
                    <h2>Reglas del Juego</h2>
                    <ul className="rules-list">
                        <li>Formá la cadena más larga posible ingresando palabras válidas en español.</li>
                        <li>Cada nueva palabra debe comenzar con la última letra de la palabra anterior.</li>
                        <li>Tenés 15 segundos por turno; cada acierto reinicia el temporizador.</li>
                        <li>Cada letra de una palabra válida suma 1 punto a tu marcador final.</li>
                    </ul>
                </section>

                <section className="about-section autor-section">
                    <h2>Información Académica</h2>
                    <div className="autor-card">
                        <div className="autor-detail">
                            <span className="label">Alumno</span>
                            <p className="value">Ezequiel Karottupullolil</p>
                        </div>

                        <div className="autor-detail">
                            <span className="label">Institución</span>
                            <p className="value">Universidad Nacional de Quilmes (UNQ)</p>
                        </div>

                        <div className="autor-detail">
                            <span className="label">Código Fuente</span>
                            <p className="value">
                                <a
                                    href="https://github.com/PullolilEzequiel/unq-ui-ezequiel-karottupullolil-trabajo-final"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-link"
                                >
                                    unq-ui-ezequiel-karottupullolil-trabajo-final
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="about-actions">
                <button onClick={volverAlInicio} className="back-button">
                    Ir al inicio
                </button>
            </footer>
        </div>
    );
}