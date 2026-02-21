const Tag = (props) => {
    return(
        <div className="mt-4 mb-2">
            <small className='bg-yellow rounded-sm px-3 py-1 text-gray-950'>
                <strong>{props.name}</strong>
            </small>
        </div>
    )
}

export default Tag