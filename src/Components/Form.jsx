import React from 'react';
import FirstName from './FirstName';
import LastName from './LastName';
import WorkEmail from './WorkEmail';
import Password from './Password';
import OrgName from './OrgName';
import OrgSize from './OrgSize';
import Industry from './Industry';
import SubmitButton from './Button';

export default function Form() {
  return (
    <form>
    
      <h5>Try <a style={{fontSize: "18px", color: "gray"}}>Sign</a> free for 14 days</h5>
      <h5>Already have a Formstack account? <a style={{ color: "blue" }}>Start your trial in app</a></h5>

      <div className='container'>
    
      <div className="row col-lg-12">
        <div className="col-lg-6">
          <FirstName />
        </div>
        <div className="col-lg-6">
          <LastName />
        </div>
      </div>
      
      <div className="row col-lg-12">
        <WorkEmail />
      </div>
      
      <div className="row col-lg-12">
        <Password />
      </div>
      
      <div className="row col-lg-12">
        <OrgName />
      </div>
      
      <div className="row col-lg-12">
        <OrgSize />
      </div>
      
      <div className="row col-lg-12">
        <Industry />
      </div>
      
      <div className="row col-lg-12 footer">
      
      Formstack has updated our terms of Service effective January 4, 2023.<br/>
      We encourage you to read the document in its entirety.<br/><br/>
      I understand and agree to the <a style={{ color: "blue", textDecoration:"Underline" }}>Formstack Privacy Policy, Software <br/>Service Agreement,</a>and<a style={{ color: "blue", textDecoration:"Underline" }}>Acceptable Use Policy.</a><br/><br/>  
      
      </div>
      
      <div className="row col-lg-12 btn">
        <SubmitButton />
      </div>
    
    </div>
    </form>
  );
}
