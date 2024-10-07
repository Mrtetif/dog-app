import { useState } from 'react';

const Contacto = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <form className="form">
      <h5 style={{ textAlign: 'center' }}>Contacta con nosotros y únite a nuestra newsletter</h5>
      {/* {name} */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* {lastName} */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          lastName
        </label>
        <input type="text" className="form-input" name="lastName" id="lastName" />
      </div>
      {/* {email} */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button
        type="sumbit"
        className="btn btn-block"
        onClick={handleSubmit}
        style={{ marginTop: '0.5rem' }}
      >
        submit
      </button>
    </form>
  );
};
export default Contacto;
