import style from "./Tarefa.module.scss"
import { BsClockHistory } from 'react-icons/bs';

export default function Tarefa() {

    return (
        <div id={style.tarefasWrap}>
            <div id={style.tarefasContent}>
                <div id={style.tarefasHeader}>
                    <h2>Nome da Tarefa:</h2>
                    <input></input>
                </div>
                <div id={style.tarefasBody}>
                    <div className={style.novaTarefaWrap}>
                        <span className={style.absolute}>Horário: 10:00 até 12:00</span>
                        <span className={style.absolute}>Atividade: Estudar</span>
                        <div id={style.clockWrap}>
                            Tempo Restante: 00:00 <BsClockHistory> </BsClockHistory>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}