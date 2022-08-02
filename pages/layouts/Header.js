import Link from 'next/Link'


const Header=()=>{
    return(
        <div className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        <div className="header-right">
        <Link href="/" className="active">Home</Link>
        <Link href="/user">User</Link>
        <Link href="/test-sayfasi">Test Sayfası</Link>
        </div>
      </div>
    )
}

export default Header;