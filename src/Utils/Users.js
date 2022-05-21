import axios from "axios";


const login = async ( { email, password } ) => {
  try {
    const res = await axios.post( 'https://notes-rest-api-v1.herokuapp.com/api/auth/login', { email, password } )
    localStorage.setItem( 'token', res.data.token )
    localStorage.setItem( 'isAdmin', res.data.usuario.admin )
  } catch ( error ) {
    console.error( error );
  }
};

export { login }