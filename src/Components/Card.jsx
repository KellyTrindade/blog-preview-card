import Tag from "./Tag";
import Profile from "./Profile";

const Card = (props) => {
    return(
        <div className="w-full max-w-80 p-4 bg-white border border-r-8 border-b-8 rounded-xl ">
            <img className="rounded-xl" src={props.publishPic} alt="Imagem de capa do curso"/>
            <Tag name={props.tagName} />
            <small className="font-bold text-gray-500">Publicado em {dateNowFormat(props.publishDate)}</small>
            <h3 className="mt-1 text-lg font-bold text-gray-950 hover:text-yellow hover:cursor-pointer">{props.title}</h3>
            <span className="text-sm text-gray-500">{props.description}</span>
            <Profile 
                pic={props.pic}
                name={props.profileName}/>
        </div>
    )
}

const allMonths = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
];

const dateNowFormat = (date) => {
    // Lista de abreviações dos meses em português
  const currentMonthStr = allMonths[date.getMonth()]

  return `${date.getDate()} de ${currentMonthStr} de ${date.getFullYear()}`
}

export default Card