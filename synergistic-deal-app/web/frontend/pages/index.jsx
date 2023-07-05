import {Page } from "@shopify/polaris";
import {useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("ratikanta@returnx.com");
  const [showMessage, setShowMessage] = useState(false);
  const handleSubmit = () => {
    setShowMessage(true);
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <Page narrowWidth>
      <input
        style={{padding:"10px",margin:'10px',fontSize:'25px',borderRadius:'10px'}}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter your email"
      />
      <button style={{padding:"10px",margin:'10px',fontSize:'25px',backgroundColor:"purple",borderRadius:'10px', color:'white', }} onClick={handleSubmit}>Submit</button>
      {showMessage ? <p style={{color:'red',fontSize:'1.5rem'}}>You have succcessfully submited email :{email}</p> : ""}
    </Page>
  );
}
