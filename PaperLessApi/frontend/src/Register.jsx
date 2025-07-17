import './Register.css'

function Register({ onClose }) {
  const id = 0;
  const userName = "apple";
  const passwordbase = "lolicullar";

  async function postUser() {
    const response = await fetch('http://localhost:5133/User', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        username: userName,
        passwordHash: passwordbase,
        characters: []
      }),
    });
    const data = await response.json();
    console.log(data)
  }


  return (
    <>
      <div className="regPage">
        <form>
          <h3 id="subheading">Username</h3>
          <input />
          <h3 id="subheading">Password</h3>
          <input />
          <button id="submit" onClick={() => {
            postUser()
          }}>Confirm</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  )
}

export default Register;
