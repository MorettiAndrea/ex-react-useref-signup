import { useState } from "react";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [yearOfService, setYearOfService] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="container mt-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(
            "nome: ",
            userName,
            "password",
            password,
            "specialization",
            specialization,
            "yearOfService",
            yearOfService,
            "description",
            description
          );
        }}
      >
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
              required
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
              placeholder="Inserisci la password"
              value={password}
              required
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
              Anni di Servizio
            </label>
            <input
              type="number"
              id="yearOfService"
              className="form-control no-spinner"
              value={yearOfService}
              min={0}
              max={60}
              required
              placeholder="Inserisci gli anni di servizio"
              onChange={(e) => setYearOfService(e.target.value)}
            />
          </div>

          <div className="col-4">
            <label htmlFor="description" className="form-label">
              Descrizione
            </label>
            <input
              type="text"
              id="description"
              className="form-control"
              value={description}
              required
              placeholder="Inserisci una descrizione"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-primary">
              Conferma
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
