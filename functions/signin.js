

const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});


const signin = async (username, password) => {
  try {
   
    const result = await client.query(
      q.Get(q.Match(q.Index('users_by_username'), username))
    );

    
    if (result.data.password === password) {
      return { statusCode: 200, body: JSON.stringify({ message: 'Login successful.' }) };
    } else {
      return { statusCode: 401, body: JSON.stringify({ error: 'Invalid username or password.' }) };
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Error logging in.' }) };
  }
};


exports.handler = async (event) => {
  const { username, password } = JSON.parse(event.body);

  return signin(username, password);
};
