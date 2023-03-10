import project from './assets/project.png';

const Header = () => {
  return (  
    <nav className='navbar bg-light mb-4 p-0'>
            <a className='navbar-brand'>
                <div className='d-flex'>
                    <img src={project} alt='logo' classNameName='h-10 w-25'/>
                    <div className='mt-3 '><strong>Project Management</strong></div>
                </div>  
            </a>
    </nav>
  )
}

export default Header;