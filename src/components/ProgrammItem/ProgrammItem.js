import './programm-item.scss';

const ProgrammItem = ({item}) => {
    function handleTouch(e) {
        e.target.parentNode.classList.toggle('active');
    }
    return (
        <div className="programm">
            <h2 className="programm__title">{item.title}</h2>
            <div className="programm__modules-block">
                <div className="programm__module">
                    <p className="programm__module__title" onTouchStart={handleTouch}>Модуль 1</p>
                    <ul className="programm__module__list">
                        {
                            item.specializedSubjects.slice(0,5).map((e, i) => <li key={i}><span>{e}</span></li>)
                        }
                    </ul>
                </div>
                <div className="programm__module">
                    <p className="programm__module__title" onTouchStart={handleTouch}>Модуль 2</p>
                    <ul className="programm__module__list">
                        {
                            item.specializedSubjects.slice(5,10).map((e, i) => <li key={i}><span>{e}</span></li>)
                        }
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default ProgrammItem;