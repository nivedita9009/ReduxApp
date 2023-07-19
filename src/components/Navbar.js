import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const items = useSelector((state) => state.cart )

    return (
        <div style={{display: 'flex',alignItems: 'center',justifyContent:'space-between'}}>
            <span className='logo'>REDUX STORE</span>
            <div>
                <Link className='navlink' to='/' style={{color: 'blue',padding:'2px',paddingRight:'80px',fontSize:'18px'}}>
                    Home
                    </Link>
                <Link className='navlink' to='/cart' style={{color: 'blue',padding:'2px',paddingRight:'60px',fontSize:'18px'}}>
                    Cart
                    </Link>

                <span className='cartCount'style={{color: 'red',fontSize:'20px',font:'icon'}}>
                    Cart items: {items.length}
                </span>

            </div>
        </div>
    )
}

export default Navbar