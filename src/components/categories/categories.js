import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  background: lightgrey;
`

const CatContainer = styled.div`
  display: flex;
  flex: 1;
`

const CatTitle = styled.div`
  margin: auto auto;
  padding: 20px 0;
  font-size: 24px;
`


export class Categories extends React.Component {
  render () {
    return (
      <Page>
        <CatContainer>
          <CatTitle>cat one</CatTitle>
        </CatContainer>
        <CatContainer>
          <CatTitle>cat two</CatTitle>
        </CatContainer>
        <CatContainer>
          <CatTitle>cat three</CatTitle>
        </CatContainer>
      </Page>
    )
  }
}

export default Categories;