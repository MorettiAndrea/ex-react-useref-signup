import { useEffect, useMemo, useState } from "react";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [yearOfService, setYearOfService] = useState("");
  const [description, setDescription] = useState("");

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  const onSubmit = (e) => {
    e.preventDefault();

    const errorsCheck =
      !userName.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !yearOfService.trim() ||
      yearOfService < 0 ||
      !description.trim();

    if (errorsCheck) {
      alert("Controlla i dati immessi");
      return;
    } else {
      console.log("Dati inseriti correttamente!:", {
        userName,
        password,
        specialization,
        yearOfService,
        description,
      });
    }
  };

  const userNameValidator = useMemo(() => {
    const isUserNameValid = userName
      .split(" ")
      .every(
        (char) =>
          letters.includes(char.toLowerCase()) ||
          numbers.includes(char.toLowerCase())
      );
    return isUserNameValid && userName.length > 6;
  }, [userName]);

  const passwordValidator = useMemo(() => {
    return (
      password.length > 8 &&
      password.split("").some((c) => letters.includes(c.toLowerCase())) &&
      password.split("").some((c) => c >= "A" && c <= "Z") &&
      password.split("").some((c) => numbers.includes(c)) &&
      password.split("").some((c) => symbols.includes(c))
    );
  }, [password]);

  const descriptionValidator = useMemo(() => {
    return description.trim().length >= 100 && description.length <= 1000;
  }, [description]);

  // dom
  return (
    <div className="container mt-4">
      <form onSubmit={onSubmit}>
        <div className="row mb-3">
          <div className="col-4">
            <label htmlFor="userName" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="userName"
              className="form-control"
              value={userName}
              placeholder="Inserisci il nome"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="col-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              placeholder="Inserisci la password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="col-4">
            <label htmlFor="specialization" className="form-label">
              Specializzazione
            </label>
            <select
              id="specialization"
              className="form-select"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option value="">Seleziona una specializzazione</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4">
            <label htmlFor="yearOfService" className="form-label">
              Anni di esperienza
            </label>
            <input
              type="number"
              id="yearOfService"
              className="form-control"
              value={yearOfService}
              placeholder="Inserisci gli anni di esperienza"
              onChange={(e) => setYearOfService(e.target.value)}
              min="0"
            />
          </div>

          <div className="col-4">
            <label htmlFor="description" className="form-label">
              Descrizione
            </label>
            <textarea
              id="description"
              className="form-control"
              value={description}
              placeholder="Scrivi qualcosa su di te"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="col-4 d-flex align-items-end">
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={formErrors}
            >
              Conferma
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
