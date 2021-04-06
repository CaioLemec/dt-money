import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import React from "react";
import { Container } from "./style";

export function Summary () {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 2000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>-R$ 1500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total:</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$ 500</strong>
            </div>
        </Container>
    );
}