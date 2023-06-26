import React from "react";
import style from "./Home.module.scss"
import Tarefa from "./components/tarefas";

export default function Home() {
    return (

        <div id={style.pageWrap}>
            <Tarefa></Tarefa>
        </div>
    )
}