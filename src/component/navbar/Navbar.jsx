
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'

import './NavBar.css'
import Login from '../login/Login'
import { useSelector,useDispatch } from 'react-redux'
import supabase from '../../supabase/supabase'
import { removeUser } from '../../slice/Userslices'

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)

    const dispatch =useDispatch()

    const user = useSelector((state) => state.userData.user)
    console.log(user);

    useEffect(() => {
        if (user) {
            setOpen(false)
        }
    }, [user])

    const signout=async()=>{
        const {error} = await supabase.auth.signOut()
        if(!error){
            dispatch(removeUser())

        }       

    }

    return (
        <>
            <div className='navbar_container'>
                <div className='navbar'>
                    <Link to={'/'}>
                        <img
                            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                            className='navbar_logo' />
                    </Link>
                    <div className='navbar_search'>
                        <input
                            type='text'
                            placeholder=" Search for Products, brand and more"
                            className='navbar_searchbox'
                        />
                        <button className='searchbtn'><IoSearch /></button>
                    </div>
                    { user?(
                        <h3 onClick={signout}>@{user?.email.slice(0, 10)}</h3>
                    ):(
                        <button className='navbar_btn' onClick={() => setOpen(true)}>Login</button>)
                    }
                    <div className='navbar_bcs'>
                        <h3>
                            Become a seller
                        </h3>
                    </div>
                    <div className='navbar_more'>
                        <h3>more
                            <i className='moredown'>
                                <MdKeyboardArrowDown />
                            </i>
                        </h3>
                    </div>
                    <div className='navbar_cart'>
                        <div className='cart_icon'></div>
                        <FaShoppingCart />

                        <Link to={'/cart'} className='cart'>Cart</Link>
                    </div>
                </div>
                <Login isOpen={isOpen} setOpen={setOpen} />
            </div>

        </>
    )
}

export default Navbar
