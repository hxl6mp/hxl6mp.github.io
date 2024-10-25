// signup.js

const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

// Function to handle signup
const signup = async (username, password, invitationCode) => {
  // Check for valid invitation code
  if (invitationCode !== 'HXL-ROOT-TEST') {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid invitation code.' }) };
  }

  try {
    // Create a new user in FaunaDB
    const result = await client.query(
      q.Create(q.Collection('users'), {
        data: {
          username: username,
          password: password,
          invitationCode: invitationCode,
        },
      })
    );

    return { statusCode: 200, body: JSON.stringify(result) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Error creating user.' }) };
  }
};

// Exports the signup function for use in Netlify Functions
exports.handler = async (event) => {
  const { username, password, invitationCode } = JSON.parse(event.body);

  return signup(username, password, invitationCode);
};
