import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-1 mx-1 border-b-2'>
            <h1 className='text-4xl font-semibold rounded-2xl text-green-800'>KNOWLEDGE IS POWER</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;