const Button = props => {
  const {styling,btnText}=props
  
  return (
    <button className={styling}>{btnText}</button>

      

}

const element = (
    <div class="bg">
      <h1 className="main-heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button styling="btn1" btnText="Like"/>
        <Button styling="btn2" btnText="Comment"/>
        <Button styling="btn3" btnText="Share"/>
      </div>
    </div>
    
    
)

ReactDOM.render(element, document.getElementById('root'))
