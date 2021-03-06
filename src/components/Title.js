import React from 'react';
import styled from 'styled-components';

export default function Title(props) {
  return (
    
      <TitleWrapper className="title" style={{color:props.color}}>
        <h2>
          {props.title}
          <div className="first">
          <div className="underline"></div>
          </div>
        </h2>
      </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
text-align:center;
margin-bottom: 10px;
h2{
  font-weight:400;
  text-transform: capitalize;
  letter-spacing: 0.3rem;
}

.underline{
  width:40px;
  border:1px solid;
  margin: 0 auto;
}

`