

const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.fnacapi_omd2ZXJzaW9uAWdwYXlsb2FkWFiiYmlkcjQxMjcyOTI0NjI4ODQ0NjAyNmZzZWNyZXR4OHVLWUtxQ1p2a3c2eTJ3bC9YRjNtY2FRTmpVa0lnZEJWKy8vaVNVTU01NldTMUxUdXk4ZVB3Zz09,
});


const signup = async (username, password, invitationCode) => {
 
  if (invitationCode !== 'HXL-ROOT-TEST') {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid invitation code.' }) };
  }

  try {
    
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


exports.handler = async (event) => {
  const { username, password, invitationCode } = JSON.parse(event.body);

  return signup(username, password, invitationCode);
};
