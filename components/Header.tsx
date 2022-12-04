import Link from 'next/link'

const style = {
  header: `w-full`,
  nav: `flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700`,
  navLeft: `flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0`,
  logo: `flex items-center flex-shrink-0 text-gray-800 mr-16`,
  logoName: `font-semibold text-xl tracking-tight`,
  navRight: `menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8`,
  links: `text-md font-bold text-blue-700 lg:flex-grow`,
  link: `block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2`,
  wrapSearch: `relative mx-auto text-gray-600 lg:block hidden`,
  search: `border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none`,
  userArea: `flex`,
  signIn: `block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0`,
  signUp: `block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0`,
  hamburgerWrap: `block lg:hidden`,
  hamburger: `flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700`
}
const Header = () => {
  return (
    <header className={style.header}>
    <nav
        className={style.nav}>
        <div className={style.navLeft}>
            <div className={style.logo}>
                <span className={style.logoName}><a href=""> HopAmNhanh</a> </span>
            </div>
            <div className={style.hamburgerWrap}>
                <button
                    id="nav"
                    className={style.hamburger}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    
        <div className={style.navRight}>
            <div className={style.links}>
                {/* <a href="#responsive-header"
                   className={style.link}>
                    Thể loại
                </a> */}
                {/* <Link href="/list/category/1">
                   <div className={style.link}>Thể loại</div> 
                </Link>
                <a href="#responsive-header"
                   className={style.link}>
                    Điệu
                </a> */}
            </div>
            <div className={style.wrapSearch}>
                <input
                    className={style.search}
                    type="search" name="search" placeholder="Search" 
                />
            </div>
            {/* <div className={style.userArea}>
                <a href="#"
                   className={style.signIn}>Sign in
                </a>
    
                <a href="#"
                   className={style.signUp}>Login
                </a>
            </div> */}
        </div>
    
    </nav>
    </header>
  )
}

export default Header
