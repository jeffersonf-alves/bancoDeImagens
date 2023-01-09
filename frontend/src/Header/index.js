import './style.css'


function Header() {
    return (<>
        <header>
            <div>
                <button>CADASTRAR IMAGEM</button>
            </div>
            <div>
                <input type="text" placeholder='Pesquiser Imagem' className='search'/>
            </div>
        </header>
    </>)
}

export default Header;