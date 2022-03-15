//getting jwt token
import { SubmitData } from "./login";
const JWTToken = SubmitData();


// getting API data
function SiteData({datas}){
  return (
    <>
    <h2>API data returned</h2>  
          <div>
            {/* {datas.result.siteName} */}
          </div>
    </>
  )
}
export default SiteData;

export async function getServerSideProps() {
    const res = await fetch('https://easycube-external-api-web-c2m2jq5zkw6rc.azurewebsites.net/',
    {
      method: 'GET',
      body: JSON.stringify({
        Authorization: "Bearer " + JWTToken}),
      headers:  {
        'Content-Type': 'application/json'
      },
    });
    const data = await res.json();
    console.log(data)
    return {
      props: { datas: data}
    }
  }

