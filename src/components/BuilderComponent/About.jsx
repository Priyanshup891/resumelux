import React from 'react';
import styled from 'styled-components';
import FileBase from 'react-file-base64';

const Work = () => {


    const handleFilechange = () => {

    }

  return (
    <AboutContainer>
        <ImportImage>
            <label>Profile Image</label>
            <div>
            <FileBase
            type="file"
            multiple={false}
            onDone={handleFilechange}
            />
            </div>
        </ImportImage>

        <Form>
            <div>
                <label htmlFor="name">Full Name</label>
                <input type="text" name='name' placeholder='Full Name' />
            </div>
            <div>
                <label htmlFor="role">Role</label>
                <input type="text" name='role' placeholder='Role' />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email' />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" name='phone' placeholder='Phone' />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input type="text" name='address' placeholder='Address' />
            </div>
            <div>
                <label htmlFor="linkedin">LinkedIn</label>
                <input type="text" name='linkedin' placeholder='LinkedIn' />
            </div>
        </Form>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items:flex-start ;
margin-top:1rem ;
`;

const ImportImage = styled.div`
display:flex ;
flex-direction:column ;
gap:0.5rem;
margin-bottom:1rem ;
width:100% ;

label{
    display: block;
    font-size: 16px;
    font-weight: 500;
    color:#e5e5e5 ;
}

& > div{
    background-color: rgba(255,255,255,0.07);
    width:100% ;
    height:40px ;
    display:flex ;
    align-items:center ;
    border-radius: 3px;
    padding: 0 10px;
}
`;

const Form = styled.form`
width:100% ;
height:100% ;
display:grid ;
grid-template-columns:1fr 1fr ;
justify-content: center;
align-content: center;
gap:1rem;

label{
    display: block;
    font-size: 16px;
    font-weight: 500;
    color:#e5e5e5 ;
}

input{
    display: block;
    height: 40px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    border:none ;
    color:#e5e5e5 ;

    &:focus{
        outline:none ;
        background-color: rgba(255,255,255,0.3);
    }

    &::placeholder{
        color: #e5e5e5;
    }
}
`;

export default Work