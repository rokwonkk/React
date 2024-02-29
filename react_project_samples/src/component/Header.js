import openholy from '../asset/open-holy.jpeg';

function Header(){
    return(
        <div className='container text-center'>          
            <img alt='no' src={openholy} width='100%' height='100%' /><br/>
        </div>
    );
}

export default Header;