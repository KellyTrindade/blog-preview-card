const Profile = (props) => {
    return(
        <div className='my-3 flex justify-normal items-center'>
            <img className='max-w-8 mr-3' src={props.pic} alt='Ícone de perfil' />
            <small className='font-bold'>{props.name}</small>
        </div>
    )
}

export default Profile