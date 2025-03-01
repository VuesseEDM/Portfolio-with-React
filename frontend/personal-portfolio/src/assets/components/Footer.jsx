import '../styles/footer.css';
import MyForm from './Form';

function Footer () {

  return (
    <footer className="footer">

  <div className="container-3">
      <div className="row">
          <div className="col-md-4">
            <a href="/">    
              <div className="loading-2">
               <div className="cube-2">
                <div className="side front"></div>
                <div className="side back"></div>
                <div className="side top"></div>
                <div className="side bottom"></div>
                <div className="side left-1"></div>
                <div className="side right-1"></div>
              </div>
            </div>
          </a> 
    
          </div> 
         
           
        </div>
    </div>
<MyForm/>
</footer>
  )
}

export default Footer