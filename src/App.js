import React, { Children, Component } from 'react';

import './App.css';


function NavElement(props) {

  return (
    <a className='navElement'>{props.content}</a>
  )

}

function Subtitle(props){
  return(
    <h2>{props.title}</h2>
  )
}

function Header() {

  return (
    <header className='header'>
      <h1>Controla</h1>
      <nav>
        <NavElement content="Dashboard" />
        <NavElement content="Home" />
        <NavElement content="Limits" />
        <NavElement content="Profile" />
        
      </nav>
    </header>

  )

}


function AddButton(props){
  return(
    <button className='addButton' type=''>
      {props.buttonName}
    </button>
  )
}

function FormSection(){
  return(
    <div className='formSection'>
      
      <div>
        <label>
          <input name='data' type='date' />
        </label>
      </div>
      <div>
        <label>
          Categoria
          <input name='category' />
        </label>
      </div>
      
      <div>
        <label>
          Valor
          <input name='price' type='number' />
        </label>
      </div>
    </div>
  )

}

function AddSection(){
  return(
    <form className='addSection'>
    <FormSection />
    <AddButton buttonName='Adicionar Entrada'/>  
    <AddButton buttonName='Adicionar Saída'/>  
    </form>

  )
}

function TableRow(props){
  return(
    <tr>
      <td>{props.date}</td>
      <td>{props.category}</td>
      <td>{props.price}</td>
    </tr>
  )

}



function TransactionTable(){
  return(        
      <table>
      <tr>
        <th>Data</th>
        <th>Categoria</th>
        <th>Preço</th>
      </tr>
      <TableRow date = "data" category = "Categoria" price = "Preço" />
      </table>
    
  )
}

function ContentBox(props){
  return(
      <div className={props.class}>

        <Subtitle title={props.title}/>
        {props.children}

      </div>
  ) 

}



function App() {
  
  return (
    <div className="App">
    <Header />
    <div className='contentSection'>
      <ContentBox title = "Registros" class = "contentBox contentBox1">
        <TransactionTable/>
      </ContentBox>  
      <ContentBox title = "Novo registro" class ="contentBox contentBox2">     
       <AddSection/>
      </ContentBox>  
    </div> 
    
    </div>
    
  );
}

export default App;
