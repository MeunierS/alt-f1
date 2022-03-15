//importing .env credentials
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const GRANT_TYPE = process.env.GRANT_TYPE
const SCOPE = process.env.SCOPE

// getting API token
export const SubmitData = async () => {
  const res = await fetch('https://login.easycube.torkglobal.com/connect/', {
    method: 'POST',
    body: JSON.stringify(
      {client_id: CLIENT_ID,
      client_secrat : CLIENT_SECRET,
      grant_type: GRANT_TYPE,
      scope: SCOPE}
    ),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await res.json();
  console.log(data);

  return {
    props: { datas: data.access_token}
  }
}