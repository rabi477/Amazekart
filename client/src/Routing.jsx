import React from 'react'
import { Button } from 'react-bootstrap';
import { useLocation, useParams, useSearchParams } from 'react-router';
import { useNavigate } from 'react-router-dom';


const Routing = () => {
  const {pathname, search} = useLocation();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams, [...searchParams.entries()]);

  const navigate = useNavigate();

  return (
    <>
      <div>Routing</div>
      <div>Pathname - {pathname}</div>
      <div>Search - {search}</div>
      <div>Params - {params.productId}</div>

      <h3>Search Params</h3>
      <div>Keyword - {searchParams.get('keyword')}</div>
      <div>Category - {searchParams.get('category')}</div>

      <input type="text" onChange={(e)=>{setSearchParams({keyword: e.target.value})}} />

      <div className="mt-2">
        <Button onClick={()=>navigate('/login',{state :{from:pathname}})}>Go to Login</Button> 
      </div>
    </>

  )
}

export default Routing