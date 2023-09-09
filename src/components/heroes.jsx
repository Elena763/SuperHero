import './heroes.css';
function Hero (props){
    return (
      <div className='herocard'>
        <p className='name'>{props.name}</p>
        <p className='universe'>Вселенная: {props.universe}</p>
        <p className='alterego'>Альтер Эго: {props.alterego}</p>
        <p className='occupation'>Род Деятельности{props.occupation}</p>
        <p className='friends'>Друзья: {props.friends}</p>
        <p className='superpowers'>Суперсилы: {props.superpowers}</p>
        <img className='picture' src={props.url} alt="imghero" />
        <p className='info'>Информация: {props.info}</p>
      </div>
    );
}

export default Hero;