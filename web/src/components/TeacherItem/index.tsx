import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (



<article className="teacher-item">
                   <header>
                       <img src="https://avatars3.githubusercontent.com/u/50045856?s=460&u=c1fea56addac7378d9c0a2d809b16547037493d9&v=4" alt="Stephani Knupp"/>
                       <div>
                         <strong>Stephani Knupp</strong>
                         <span>Matemática</span>
                       </div>
                   </header>
                   <p>
                       Pós-graduada em matemática aplicada.
                       <br /> <br />
                       Apaixonada por exatas possui grande domínio em álgebra, álgebra linear, cálculo integral e derivadas e geometria analítica.
                   </p>

                   <footer>
                       <p>
                           Preço/hora
                           <strong>R$60,00</strong>
                       </p>
                       <button type="button">
                           <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                       </button>
                   </footer>
               </article>


)
}

export default TeacherItem