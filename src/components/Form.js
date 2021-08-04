import React from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";



export default function Form() {


    const handleSubmitForm = async (e) => {
        const formData = new FormData(e.target);
        e.preventDefault();
        
        const entries = formData.entries();
        const arr = Array.from(entries);
        
        const requestBody = Object.fromEntries(arr);
        console.log(requestBody);
        const url = "https://rentreceipts.herokuapp.com/api/generate/pdf";
    const api = await axios
      .post(url)
      .then(async (response) => {
        console.log(response.data, "response");
        if (response.data.error) {
          return alert(response.data.error);
        } else {
          alert("Succesfully Generated");
         
        }
      })
      .catch(async (err) => {
        console.log(err, "err");
        
        alert(err);
      });

         
      };
  return (
    // <React.Fragment>
        
      
      <div
        className="card">
        <form onSubmit={(e) => handleSubmitForm(e)}>
        
      <Grid container spacing={2}>
           
        <Grid item xs={6} md={6}>
          <TextField required name="tenantName" id="tenantName" label="Tenant Name" fullWidth  />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            required
            id="tenantPanCard"
            name="tenantPanCard"
            label="Tenant Pan Card Number"
            fullWidth
            
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            required
            id="tenantAadharCard"
            name="tenantAadharCard"
            label="Tenant AAdhar Card Number"
            fullWidth
            
          />
        </Grid>
     
       
        <Grid item xs={6} md={6}>
          <TextField
            required
            id="landLordName"
            name="landLordName"
            label="Land Lord Name"
            fullWidth
            
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            required
            id="landLordPanCard"
            name="landLordPanCard"
            label="Land Lord Pan Card Number"
            fullWidth
            
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            
          />
        </Grid>
        

        <Grid item xs={12} md={6}>
          <TextField required id="fromDate" name="fromData" label="From Date (YY-MM-DD)" fullWidth/>
          
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="toDate"
            required
            id="toDate"
            label="To Date (YY-MM-DD)"
            
            fullWidth
           
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="issuedDate"
            required
            id="issuedDate"
            label="Issued Date (YY-MM-DD)"
            
            fullWidth
           
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="amount"
            id="amount"
            label="Amount"
            
            fullWidth
           
          />
        </Grid>
        <Grid item md={12} xs={12}>
            <button type="submit" className="landing-page__text--button"> <p className="landing-page__text--button__text">Download Now</p></button>  
        </Grid>
       
      </Grid>
      </form>
      </div>
    // </React.Fragment>
  );
}