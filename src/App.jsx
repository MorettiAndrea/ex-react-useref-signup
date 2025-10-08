import { useRef, useMemo, useState } from "react";

export default function App() {
  // campi controllati
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  // campi non controllati
  const fullNameRef = useRef();
  const yearOfServiceRef = useRef();
  const specializationRef = useRef();

  // variabili per controlli
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  // form submit
  const onSubmit = (e) => {
    e.preventDefault();

    const fullName = fullNameRef.current.value.trim();
    const specialization = specializationRef.current.value.trim();
    const yearOfService = yearOfServiceRef.current.value.trim();

    const errorsCheck =
      !fullName ||
      !userName.trim() ||
      !password.trim() ||
      !description.trim() ||
      !specialization ||
      isNaN(yearOfService) ||
      Number(yearOfService) < 1;

    if (errorsCheck) {
      alert("Controlla i dati immessi");
      return;
    } else {
      console.log("Dati inseriti correttamente!:", {
        fullName,
        userName,
        password,
        specialization,
        yearOfService,
        description,
      });
    }
  };

  // validatori errori
  const userNameValidator = useMemo(() => {
    const isUserNameValid = userName
      .split("")
      .every(
        (char) =>
          letters.includes(char.toLowerCase()) ||
          numbers.includes(char.toLowerCase())
      );
    return isUserNameValid && userName.trim().length >= 6;
  }, [userName]);

  const passwordValidator = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some((c) => letters.includes(c.toLowerCase())) &&
      password.split("").some((c) => c >= "A" && c <= "Z") &&
      password.split("").some((c) => numbers.includes(c)) &&
      password.split("").some((c) => symbols.includes(c))
    );
  }, [password]);

  const descriptionValidator = useMemo(() => {
    return description.trim().length >= 100 && description.length <= 1000;
  }, [description]);

  const buttonLock = useMemo(() => {
    const fullName = fullNameRef.current?.value.trim();
    const specialization = specializationRef.current?.value.trim();
    const yearOfService = yearOfServiceRef.current?.value.trim();

    return (
      !fullName ||
      !userNameValidator ||
      !passwordValidator ||
      !descriptionValidator ||
      !specialization ||
      isNaN(yearOfService) ||
      Number(yearOfService) < 1
    );
  }, [userNameValidator, passwordValidator, descriptionValidator]);

  return (
    <div className="container mt-4">
      <form onSubmit={onSubmit}>
        <div className="row mb-3">
          <div className="col-4">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Inserisci il nome"
              ref={fullNameRef}
            />
          </div>

          <div className="col-4">
            <label htmlFor="userName" className="form-label">
              Username
            </label>
            <p
              className={
                userNameValidator
                  ? "text-center text-success"
                  : "text-center text-danger"
              }
            >
              {userNameValidator ? "Username valido" : "Username non valido"}
            </p>
            <input
              type="text"
              id="userName"
              className="form-control"
              value={userName}
              placeholder="Inserisci lo username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="col-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <p
              className={
                passwordValidator
                  ? "text-center text-success"
                  : "text-center text-danger"
              }
            >
              {passwordValidator ? "Password valida" : "Password non valida"}
            </p>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              placeholder="Inserisci la password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4">
            <label htmlFor="specialization" className="form-label">
              Specializzazione
            </label>
            <select
              id="specialization"
              className="form-select"
              ref={specializationRef}
            >
              <option value="">Seleziona una specializzazione</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
          </div>

          <div className="col-4">
            <label htmlFor="yearOfService" className="form-label">
              Anni di esperienza
            </label>
            <input
              type="number"
              id="yearOfService"
              className="form-control"
              placeholder="Inserisci gli anni di esperienza"
              ref={yearOfServiceRef}
              min="1"
            />
          </div>

          <div className="col-4">
            <label htmlFor="description" className="form-label">
              Descrizione
            </label>
            <p
              className={
                descriptionValidator
                  ? "text-center text-success"
                  : "text-center text-danger"
              }
            >
              {descriptionValidator
                ? "Descrizione inserita"
                : "Inserisci una descrizione"}
            </p>
            <textarea
              id="description"
              className="form-control"
              value={description}
              placeholder="Scrivi qualcosa su di te"
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <button
              type="submit"
              className={
                buttonLock ? "btn btn-danger w-50" : "btn btn-primary w-50"
              }
              disabled={buttonLock}
            >
              {buttonLock ? "Controlla i dati immessi" : "Conferma"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
